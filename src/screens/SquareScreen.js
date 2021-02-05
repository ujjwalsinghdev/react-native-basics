import React, { useReducer } from "react"
import { View, Text, StyleSheet } from "react-native"
import ColorCounter from "../components/ColorCounter"

import { reducer } from "./reducer"

const COLOR_INCREMENT = 15

const defaultState = { red: 0, green: 0, blue: 0 }

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const { red, green, blue } = state

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
