import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Stack } from 'expo-router'

const ProtectedScreen = () => {
  return ( 
    <SafeAreaView>
       <Stack.Screen options={{headerShown:false}}/>
      <Text>ProtectedScreen</Text>
    </SafeAreaView>
  )
}

export default ProtectedScreen

const styles = StyleSheet.create({})