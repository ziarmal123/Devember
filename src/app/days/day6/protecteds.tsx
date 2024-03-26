import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProtectedScreen = () => {
  return (
    <SafeAreaView>
      <Text>ProtectedScreen but if you see it mean that you pass the Authentication</Text>
    </SafeAreaView>
  )
}

export default ProtectedScreen

const styles = StyleSheet.create({})