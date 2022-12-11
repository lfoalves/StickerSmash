import { StyleSheet, Image } from 'react-native'

export default function ImageViewer({ placeholderImageSource, selectedImage }) {

  const imageSource = selectedImage !== null
  ? {uri: selectedImage}
  : {uri: placeholderImageSource}

  return (
    <Image source={imageSource} style={styles.image} />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})