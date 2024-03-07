import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MarkDownDisplay from '@/components/day3/MarkdownDisplay'

const description= `# Animated Splash Screen`

const index = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{title:'Day 4: SplashScreen'}}/>
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <View style={{marginBottom:20,backgroundColor:"white"}}>
      <Link href='/days/day4/animation' asChild>
      <Button title='Go to Animation'/>

      </Link>
      <Link href='/days/day4/splashScreen' asChild>
      <Button title='Go to Splash Screen'/>

      </Link>
      </View>
     
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})

