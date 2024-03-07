import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { PropsWithChildren } from 'react'
import Markdown from 'react-native-markdown-display'
const MarkDownDisplay = ({children}:PropsWithChildren) => {
  
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior='automatic'>
        <Markdown style={markdownStyles}>
        {children}
        </Markdown>
    </ScrollView>
  )
}

export default MarkDownDisplay

const markdownStyles = StyleSheet.create({
    heading1:{
        color:'red',
        fontSize:45,
        fontFamily:'AmaticBold',
        marginTop:10,
        marginBottom:5,
        lineHeight:50
    },
    heading2:{
        fontFamily:"InterBold",
        color:'gray',
        marginTop:10,
        marginBottom:5
    },
    body:{
      fontSize:16,
      fontFamily:'Inter',
      lineHeight:20
    }
})

const styles=StyleSheet.create({
  page:{
    backgroundColor:"white",
    padding:10
  }
})