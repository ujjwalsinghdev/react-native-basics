import React, { useState } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)}></Button>
      <Button title="Decrease" onPress={() => setCounter(counter - 1)}></Button>
      <Text>Current Count {counter} </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})
