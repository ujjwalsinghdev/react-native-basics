import React, { useReducer } from "react"
import { StyleSheet, Text, View, Button } from "react-native"

//DEFAULT STATE
const defaultState = {
  count: 0
}

//REDUCER FUNCTION
const reducer = (state, action) => {
  //state==={count:number}
  // action === {type:'increment' || 'decrement',payload:15 }
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload }

    case "DECREMENT":
      return { ...state, count: state.count - action.payload }

    default:
      return state
  }
}

const CounterScreen = () => {
  //useReducer
  const [state, dispatch] = useReducer(reducer, defaultState)
  //state destructring
  const { count } = state

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "INCREMENT", payload: 1 })}></Button>
      <Button title="Decrease" onPress={() => dispatch({ type: "DECREMENT", payload: 1 })}></Button>
      <Text>Current Count {count} </Text>
    </View>
  )
}

export default CounterScreen

const styles = StyleSheet.create({})
