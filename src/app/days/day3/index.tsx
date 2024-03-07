import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import MarkDownDisplay from '@/components/day3/MarkdownDisplay'

const description= `
# Markdown

Integrate Markdown content in **React Native
`
const Day3 = () => {
    
  return (
      <SafeAreaView edges={['bottom']} style={{flex:1}}>
      <Stack.Screen options={{title:"Markdown Editor"}}/>
      <MarkDownDisplay>{description}</MarkDownDisplay>
      <Link href="/days/day3/editor" asChild>
      <Button title='Go to Editor'/>
      </Link>
      </SafeAreaView>
    
  )
}

export default Day3

