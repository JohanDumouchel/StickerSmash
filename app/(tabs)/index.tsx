import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";

const PlaceHolderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // to do 
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} imgSelected={selectedImage} />
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
      {showOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset'
              onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon='save-alt' label='Save'
              onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label='Choose a photo' theme='primary'
            fontAwesome='picture-o' onPress={pickImageAsync} />
          <Button label='Use this photo' onPress={() => setShowOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});