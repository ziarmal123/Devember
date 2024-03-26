import { Children, PropsWithChildren, createContext,useContext } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";


type BiometricsContext ={
    isUnlocked:boolean,
    authenticate: () =>Promise<void>
}
const BiometricsContext = createContext<BiometricsContext>({
    isUnlocked:false,
    authenticate:async ()=>{}
});
const BiometricsProvider =({children}:PropsWithChildren)=>{
    const [isUnlocked, setIsUnlock] = useState(false)
    const authenticate = async () =>{
        const res=await LocalAuthentication.authenticateAsync();
        const hashardware=await LocalAuthentication.hasHardwareAsync();


     
          if(!hashardware){
            Alert.alert("Not Supported")
            setIsUnlock(true)
            return;
          }
          if(res.success){
            setIsUnlock(true)
          }
          console.log(res)
          }
    return(
        <BiometricsContext.Provider value={{isUnlocked,authenticate}}>
            {children}
        </BiometricsContext.Provider>
    )
}

export default BiometricsProvider

export const useBiometrics = () => useContext(BiometricsContext)