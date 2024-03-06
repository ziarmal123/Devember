import { StyleSheet, Text, View,SafeAreaView,Pressable} from 'react-native'
import React,{useState} from 'react'
import { Stack,router } from 'expo-router'
import { FontAwesome5 } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { GestureDetector,Gesture, Directions } from 'react-native-gesture-handler'
import Animated,{FadeIn,FadeOut, SlideInLeft, SlideInRight, SlideOutLeft} from 'react-native-reanimated'
const onboarding = () => {

  const onBoardingSteps=[{
    icon:"snowflake",
    title:"Welcome to #DEVember",
    description:"Daily React Native Task during March"
  },{
    icon:"people-arrows",
    title:"Learn And Grow Together",
    description:"Learn By Building 24 projects with React Native and Expo"
  },{
    icon:"book-reader",
    title:"Education for Childern",
    description:"it is true data with no other data and have bnelive ne and you not i yes no okay na dit ill cosie you bit late an dhoo ho hi"
  }]
  const [screenIndex, setscreenIndex] = useState(0)
  const data=onBoardingSteps[screenIndex]
  
  const onContinue = ()=>{
    const isLastScreen =screenIndex==onBoardingSteps.length-1
    if(isLastScreen){
      endOnBoarding()
    }
    else{
      setscreenIndex(screenIndex+1)
    }
    
  }
  const onBack = () =>{
    const isFirestScreen = screenIndex==0;
    if(isFirestScreen){
      endOnBoarding()
    }
    else{
      setscreenIndex(screenIndex-1)
    }
  }
  const endOnBoarding = ()=>{
    setscreenIndex(0)
    router.back();
  }

  // const swipeForward =Gesture.Fling().direction(Directions.LEFT).
  // onEnd(onContinue)
  // const swipeBack=Gesture.Fling().direction(Directions.RIGHT).
  // onEnd(onBack)
  
 const swipes=Gesture.Simultaneous(
  Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
  Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue))
  return (
    <SafeAreaView style={styles.page}>
    <Stack.Screen options={{headerShown:false}}/>
     <StatusBar style='light' />
      <GestureDetector gesture={swipes}>
      <Animated.View entering={FadeIn} exiting={FadeOut} key={screenIndex} style={styles.pageContent}>
      <View style={styles.stepIndicatorContainer}>
        {onBoardingSteps.map((step,index)=>(
          <View key={index} style={[styles.stepIndicator,{backgroundColor:index==screenIndex?'#FFDA11':'grey'}]}/>
        ))}
        
      </View>
      <FontAwesome5 name={data.icon} style={styles.image} size={120} color="#FFDA11"/>
      
      <View style={styles.footer}>
        <Animated.Text entering={SlideInRight} exiting={SlideOutLeft} style={styles.title}>{data.title}</Animated.Text>
        <Animated.Text entering={SlideInRight.delay(100)} exiting={SlideOutLeft} style={styles.description}>{data.description}</Animated.Text>
      </View>

      <View style={styles.buttonRow}>
        <Text onPress={endOnBoarding} style={styles.buttonText}>Skip</Text>
        <Pressable onPress={onContinue} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

      </View>
      
    </Animated.View>
    </GestureDetector> 
    </SafeAreaView>
  )
}

export default onboarding

const styles = StyleSheet.create({
    page:{
        justifyContent:'center',
        flex:1,
        backgroundColor:'#15141A',
        
        
    },
    pageContent:{
        padding:20,
        flex:1,
        marginTop:50
    },
    title:{
        color:'#FDFDFD',
        fontSize:50,
        fontFamily:"Inter",
        letterSpacing:1.2,
        marginVertical:10
    },
    description:{
        color:"gray",
        fontSize:20,
        fontFamily:"Inter400",
        lineHeight:25
    },
    image:{
      alignSelf:'center',
      marginTop:70
     
    },
    footer:{
      marginTop:'auto'
    },
    buttonRow:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        gap:20
    },
    buttonText:{
      color:"#FDFDFD",
      padding:15,
      paddingHorizontal:25,
      fontFamily:"Inter_Semi",
    },
    buttonStyle:{
      backgroundColor:"#302E38",
      borderRadius:50,
      flex:1,
      alignItems:'center'
    },
    stepIndicatorContainer:{
      flexDirection:'row',
      marginBottom:50,
      gap:5
    },
    stepIndicator:{
      flex:1,
      width:100,
      height:3,
      backgroundColor:"gray",
     
      borderRadius:10
    }
})


