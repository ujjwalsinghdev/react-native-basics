import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail imageScore="8/10"  title="Forest" imageSource={require("../../assets/forest.jpg")}></ImageDetail>
      <ImageDetail imageScore="2/10" title="Beach" imageSource={require("../../assets/beach.jpg")}></ImageDetail>
      <ImageDetail imageScore="7/10" title="Mountain" imageSource={require("../../assets/mountain.jpg")}></ImageDetail>
    </View>
  )
}

export default ImageScreen

const styles = StyleSheet.create({})
