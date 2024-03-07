import { StyleSheet, Text, View,Button } from 'react-native'
import { Stack } from 'expo-router';
import React,{ useRef }  from 'react'
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
const animation=useRef<LottieView>(null);

  return (
    <View style={{backgroundColor:"black"}}>
        <Stack.Screen options={{headerShown:false}} />
       <LottieView
       autoPlay
       loop
       ref={animation}
      source={require("@assets/lottie/netflix.json")}
    // source={{uri:"https://lottie.host/59d7e3df-1dc1-4202-9093-ec62b8fed517/glVhpwDvWq.json"}}
      style={{width: '100%', height: '100%'}}
    />
    
    </View>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({})