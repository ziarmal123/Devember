import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type DayListItems= {
    day:number
}

const DayListItems = ({day}:DayListItems) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>
        {day}
      </Text>
    </View>
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
        fontSize:70
      }
})