import { StyleSheet, Text, View,Button } from 'react-native'
import React,{ useRef }  from 'react'
import LottieView from "lottie-react-native";

const AnimationScreen = () => {
const animation=useRef<LottieView>(null);

  return (
    <View>
       <LottieView
       
       ref={animation}
      source={require("@assets/lottie/netflix.json")}
    // source={{uri:"https://lottie.host/59d7e3df-1dc1-4202-9093-ec62b8fed517/glVhpwDvWq.json"}}
      style={{width: 200, height: 200}}
    />
    
    <Button title="Play" onPress={()=>animation?.current?.play()} />
    <Button title="Pause" onPress={()=>animation?.current?.pause()} />
    </View>
  )
}

export default AnimationScreen

const styles = StyleSheet.create({})