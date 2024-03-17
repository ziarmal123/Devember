import { ActivityIndicator, StyleSheet, Text, View,ImageBackground } from 'react-native'
import React,{useEffect,useState} from 'react'
import MapView from 'react-native-maps'
import { Stack } from 'expo-router'
import * as Location from 'expo-location';
import { FlatList } from 'react-native-gesture-handler';
import ForeCastItem from '@/components/day5/ForeCastItem';
import LottieView from 'lottie-react-native';


type MainWeather={
  temp:number;
  feel_like:number;
  temp_min:number;
  temp_max:number;
  pressure:number;
  humidity:number;
  sea_level:number;
  grnd_level:number;
}
type Weather = {
  name:string;
  main: MainWeather,
  weather:[
    {
    id:number,
    main:string,
    description:string,
    icon:string
    }
  ]
}

export type WeatherForecast={
  main:MainWeather
  dt:number,
  weather:[
    {
    id:number,
    main:string,
    description:string,
    icon:string
    }
  ]
}
const WeatherScreen = () => {
 const BASE_URL_One_DAY_API=`https://api.openweathermap.org/data/2.5/weather`
 const FIVE_DAY_API=`https://api.openweathermap.org/data/2.5/forecast`
 const API_KEY=process.env.EXPO_PUBLIC_API_KEY
 const bgImage="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg"

 const [weatherData, setWeatherData] = useState<Weather>()
 const [ForeCastData, setForeCastData] = useState<WeatherForecast[]>()
 const [location, setLocation] = useState<Location.LocationObject>();
 const [errorMsg, setErrorMsg] = useState('');


 const fetchWeather= async() =>{

  // if(!location){
  // return .warn("No Location Found")
  // }
  const lat=location?.coords?.latitude;
  const lon=location?.coords?.longitude;
  
  // const lat=28.4636;
  // const lon=16.2518


    const DailyApi = await fetch(`${BASE_URL_One_DAY_API}?lat=${lat}&lon=${lon}8&appid=${API_KEY}&units=metric`)
  
    const data=await DailyApi?.json()
    setWeatherData(data)
 }
 const FetchForcast = async () =>{
  if(!location){
    return
  }
  const lat=location?.coords?.latitude;
  const lon=location?.coords?.longitude;
  const FiveDayApi=await fetch (`${FIVE_DAY_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  const data=await FiveDayApi?.json()

  setForeCastData(data.list)
 }


useEffect(() => {

  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
   
  })();

}, []);
useEffect(() => {
   if(location){
    fetchWeather();
    FetchForcast();
   }
  // fetchWeather()
 }, [location])
 if(!weatherData){
  return <ActivityIndicator/>
 }
 
  return (
   
    <ImageBackground source={{uri:bgImage}} style={styles.container}>
      <View style={{...StyleSheet.absoluteFillObject,backgroundColor:'rgba(0,0,0,0.5)'}}/>
      <Stack.Screen options={{headerShown:false}}/>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <LottieView 
      source={weatherData.weather[0].main=='Rain'? require("@assets/lottie/cloud.json"):
      require("@assets/lottie/sunny.json")
    }
      style={{width:200,aspectRatio:1}}
      loop
      autoPlay
      />
      <Text style={styles.location}>{weatherData?.name}</Text>
      <Text style={styles.temp}>{Math.round(weatherData?.main?.temp)}°</Text>
      <Text style={styles.weathertype}>{weatherData.weather[0].main}</Text>
      </View>
      
      <FlatList
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{gap:5,paddingHorizontal:10,}}
      horizontal
      style={{flexGrow:0,height:170,marginBottom:40}}
      data={ForeCastData}
      renderItem={({item})=><ForeCastItem forecast={item}/>}
      
      />
    </ImageBackground>
  )
}

export default WeatherScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    justifyContent:'center',
    alignItems:'center'
  },
  location:{
    fontFamily:"Inter_Semi",
    fontSize:30,
    color:'lightgray'
  },
  temp:{
    fontFamily:'Inter',
    fontSize:70,
    color:"#FEFEFE"
  },
  weathertype:{
    fontFamily:'Inter400',
    fontSize:30,
    color:"#FEFEFE"
  }
})