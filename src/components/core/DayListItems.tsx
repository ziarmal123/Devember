import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type DayListItems= {
    day:number
}

const DayListItems = ({day}:DayListItems) => {
  
  return (
    <Link href={`/days/day${day}`} asChild>
    <Pressable style={styles.box}>
      <Text style={styles.text}>
        {day}
      </Text>
    </Pressable>
    </Link>
    
  )
}

export default DayListItems

const styles = StyleSheet.create({
    box:{
        backgroundColor:"#F9EDE3",
        flex:1,
        aspectRatio:1,
   
        justifyContent:'center',
        alignItems:'center',
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:"#9b4521",
        borderRadius:20
    
      },
      text:{
        color:"#9b4521",
        fontSize:50,
        fontFamily:"Amatic"
      }
})