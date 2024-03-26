import { Slot, Stack } from "expo-router";
import { useEffect,useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { Alert, Text,View } from "react-native";
import {FontAwesome5} from '@expo/vector-icons'
import { useBiometrics } from "@/components/day6/Biometrics";
export default function BiometricProtectedLayout(){
    const {isUnlocked,authenticate} =useBiometrics();
   
    useEffect(() => {
      if(!isUnlocked){
         authenticate()
      }
      // const CustomOption= LocalAuthentication.authenticateAsync({
      //   promptMessage:"Enter the Passcord"
      // });
      // console.log("Options",CustomOption)
     
    }, [])

    if(!isUnlocked){
        return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <Stack.Screen options={{headerShown:false}}/>
            <Text style={{fontFamily:"Inter" ,fontSize:20,marginBottom:20}}>Use FaceId to Unlock</Text>
            <FontAwesome5 onPress={authenticate} name="fingerprint" size={50} color='gray'/>
        </View>
          )
    }
    else {
       return (
        <View>
          <Stack.Screen options={{headerShown:false}}/>
          <Slot/>
        </View>
        )
    }
    
}