import React from "react"
import { StyleSheet, Text, View } from "react-native"

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text> */}
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  )
}

export default BoxScreen

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 4,
    borderColor: "green",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end"
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "purple"
  }
})

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 4,
//     borderColor: "green",
//     height: 200
//   },
//   textOneStyle: {
//     borderWidth: 3
//   },
//   textTwoStyle: {
//     borderWidth: 3,
//     fontSize: 18,
//     position: "absolute",
//     ...StyleSheet.absoluteFillObject
//   },
//   textThreeStyle: {
//     borderWidth: 3
//   }
// })

// const styles = StyleSheet.create({
//   viewStyle: {
//     borderWidth: 3,
//     borderColor: "black",
//     height: 200,
//     flexDirection: "row",
//     alignItems:"center"
//   },
//   textOneStyle: {
//     borderWidth: 3,
//     borderColor: "red",
//     flex: 50,
//   },
//   textTwoStyle: {
//     borderWidth: 3,
//     borderColor: "red",
//     flex: 20,
//   },
//   textThreeStyle: {
//     borderWidth: 3,
//     borderColor: "red",
//     flex: 30
//   }
// })
