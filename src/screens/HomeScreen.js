import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity, Touchable } from "react-native"

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hii theree</Text>
      <Button title="Go to components demo" onPress={() => navigation.navigate("Components")} />
      <Button title="Go to List Demo" onPress={() => navigation.navigate("List")} />
      <Button title="Go to Image Demo" onPress={() => navigation.navigate("Image")} />
      <Button title="Go To Counter Demo" onPress={() => navigation.navigate("Counter")} />
      <Button title="Go To Color Demo" onPress={() => navigation.navigate("Color")} />
      <Button title="Go To Square Demo" onPress={() => navigation.navigate("Square")} />
      <Button title="Go To Text Screen" onPress={() => navigation.navigate("Text")} />
      <Button title="Go To Box Screen" onPress={() => navigation.navigate("Box")} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen
