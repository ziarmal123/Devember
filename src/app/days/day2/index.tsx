import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
const Day2 = () => {
  return (
    <View>
      <Stack.Screen options={{title:"Day 2"}}/>
      <Text>Day2</Text>
      <Link href="/days/day2/onboarding" asChild>
      <Button title='Go to onBoarding' color={"black"} />
      </Link>
    </View>
  )
}

export default Day2

const styles = StyleSheet.create({})