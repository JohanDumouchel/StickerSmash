import { StyleSheet, View, Pressable, Text, StyleProp, TextStyle } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type ButtonProps = {
  label: string,
  theme?: 'primary',
  fontAwesome?: keyof typeof FontAwesome.glyphMap,
  onPress?: () => void,
}

export default function Button({ label, theme, fontAwesome, onPress }: ButtonProps) {

  let stylesButtonLabel: StyleProp<TextStyle> = styles.buttonLabel;
  let stylesButtonContainer: StyleProp<TextStyle> = styles.buttonContainer;

  if (theme === 'primary') {
    stylesButtonLabel = [styles.buttonLabel, styles.buttonLabelPrimary];
    stylesButtonContainer = [styles.buttonContainer, styles.buttonContainerPrimary];
  }

  return (
    <View style={stylesButtonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        {(fontAwesome) ?
          <FontAwesome name={fontAwesome} style={styles.buttonIcon} /> : <></>}
        <Text style={stylesButtonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
    color: "#25292e",
    fontSize: 18,
  },
  // primary style 
  buttonContainerPrimary: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 18,
    backgroundColor: "#fff"
  },
  buttonLabelPrimary: {
    color: '#25292e'
  }
})