import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WeatherForecast } from '@/app/days/day5/weather'
import dayjs from 'dayjs'
import {BlurView} from 'expo-blur'
const ForeCastIte = ({forecast}:{forecast:WeatherForecast}) => {
  return (
      <BlurView intensity={40} style={styles.container}>
      <Text style={styles.temp}> {Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}> {dayjs(forecast.dt*1000).format('ddd ha')}</Text>
      </BlurView>
   
    
  )
}

export default ForeCastIte

const styles = StyleSheet.create({
  container:{
    padding:10,
    aspectRatio:9/16,
    borderRadius:10,
    alignItems:'center',
    overflow:'hidden',
    borderColor:"gainsboro",
    borderWidth:StyleSheet.hairlineWidth,
    justifyContent:"center"
  },
  temp:{
    fontFamily:'Inter_Bold',
    fontSize:30,
    color:'white',
    marginVertical:10
  },
  date:{
    fontFamily:"Inter_Semi",
    fontSize:16,
    color:'snow',

  }
})