import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import MarkDownDisplay from '@/components/day3/MarkdownDisplay'

const description= `#Camera Arrangment`

const index = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{title:'Day 7: Camera Setting'}}/>
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <View style={{marginBottom:20,backgroundColor:"white"}}>
      
      <Link href='/days/day6/protected' asChild>
      <Button title='Go to Protected Page'/>

      </Link>

      </View>
     
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})

