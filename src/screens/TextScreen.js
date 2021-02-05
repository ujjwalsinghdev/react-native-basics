import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const TextScreen = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      ></TextInput>
      <Text>my name is {name}</Text>

      <Text>Enter Password</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      ></TextInput>
      <Text> {password.length < 4 ? <Text>Password must be 4 characters</Text> : password}</Text>
    </View>
  )
}

export default TextScreen

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
})
