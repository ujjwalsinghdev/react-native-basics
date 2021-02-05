import React from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

const ListScreen = () => {
  const friends = [
    {
      name: "Friend1",
      age: "23"
    },
    {
      name: "Friend2",
      age: "23"
    },
    {
      name: "Friend3",
      age: "23"
    },
    {
      name: "Friend4",
      age: "23"
    },
    {
      name: "Friend5",
      age: "23"
    },
    {
      name: "Friend6",
      age: "23"
    },
    {
      name: "Friend7",
      age: "23"
    }
  ]

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyles}>
            {item.name} Age {item.age}
          </Text>
        )
      }}
    ></FlatList>
  )
}

export default ListScreen

const styles = StyleSheet.create({
  textStyles: {
    marginVertical: 50
  }
})
