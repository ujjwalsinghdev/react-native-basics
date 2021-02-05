import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => {
  const greeting = <Text>Hello To You!!!!</Text>
  const name = <Text> "Ujjwal Singh"</Text>

  return (
    <View>
      <Text style={styles.textStyle}>This is the component screen Ha ha ha</Text>
      <Text style={styles.myName}>Getting started with react-native</Text>
      {greeting}
      {name}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  myName: {
    fontSize: 30
  }
})

export default ComponentsScreen
