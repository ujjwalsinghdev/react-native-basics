import React from "react"
import { StyleSheet, Text, View, Image } from "react-native"

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>{imageScore}</Text>
    </View>
  )
}

export default ImageDetail

const styles = StyleSheet.create({})
