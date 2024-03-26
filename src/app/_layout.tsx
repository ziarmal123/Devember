import { Stack } from "expo-router";
import { useState } from "react";
import { useFonts,Inter_900Black ,Inter_600SemiBold,Inter_400Regular,Inter_700Bold} from '@expo-google-fonts/inter';
import {AmaticSC_400Regular,AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/components/day4/animatedSplashScreen";
import BiometricsProvider from "@/components/day6/Biometrics";
// SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
  const [appReady, setAppReady] = useState(false)
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false)
    const [fontsLoaded,fontError] = useFonts({
        Inter:Inter_900Black,
        Amatic:AmaticSC_400Regular,
        AmaticBold:AmaticSC_700Bold,
        Inter_Semi:Inter_600SemiBold,
        Inter400:Inter_400Regular,
        Inter_Bold:Inter_700Bold,

     })
     useEffect(() => {
      if(fontsLoaded || fontError) {
        // SplashScreen.hideAsync()
        setAppReady(true)
     }
     }, [fontsLoaded,fontError])
   
     if(!appReady || !splashAnimationFinished) {
       return <AnimatedSplashScreen onAnimationFinish={(isCancelled)=>{
        if(!isCancelled){
          setSplashAnimationFinished(true)
        }
       }}/>   
     }
     
    return (   
 <BiometricsProvider>
 <GestureHandlerRootView style={{flex:1}}>
        <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{title:"Devember"}}/>
        </Stack>
      </GestureHandlerRootView>
    
  </BiometricsProvider>)
}