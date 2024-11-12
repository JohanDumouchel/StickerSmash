import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type ImageViewerProps = {
  imgSource: ImageSource,
  imgSelected?: string,
};

export default function ImageViewer({ imgSource, imgSelected }: ImageViewerProps) {
  return <Image source={(imgSelected) ? { uri: imgSelected } : imgSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})