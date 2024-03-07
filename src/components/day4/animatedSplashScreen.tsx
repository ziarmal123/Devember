import { StyleSheet, Text, View,Button } from 'react-native'
import React,{ useRef }  from 'react'
import LottieView from "lottie-react-native";
import Animated, { FadeIn } from 'react-native-reanimated';


const AnimatedSplashScreen = ({onAnimationFinish=(isCancelled)=>{},}:{onAnimationFinish?:(isCancelled:boolean)=>void}) => {
const animation=useRef<LottieView>(null);

  return (
    <Animated.View entering={FadeIn.duration(1000)} style={{backgroundColor:"black"}}>
       <LottieView
       autoPlay
       onAnimationFinish={onAnimationFinish}
       loop={false}
       ref={animation}
      source={require("@assets/lottie/netflix.json")}
    // source={{uri:"https://lottie.host/59d7e3df-1dc1-4202-9093-ec62b8fed517/glVhpwDvWq.json"}}
      style={{width: '100%', height: '100%'}}
    />
    
    </Animated.View>
  )
}

export default AnimatedSplashScreen

const styles = StyleSheet.create({})