import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
const Day3 = () => {
  return (
    <View>
      <Stack.Screen options={{title:"Markdown Editor"}}/>
      <Text>Day3</Text>
      <Link href="/days/day3/editor" asChild>
      <Button title='Go to Editor' color={"black"} />
      </Link>
    </View>
  )
}

export default Day3

const styles = StyleSheet.create({})