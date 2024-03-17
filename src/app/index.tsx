import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native';
import DayListItems from '@components/core/DayListItems';

export default function HomeScreen() {

  const days=[...Array(24)].map((val,index)=>index+1)
  return (
    <View style={styles.container}>
      <FlatList 
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({item})=><DayListItems day={item}/>}
      />
      {/* {days.map((date)=>{
        return(
            <View style={styles.box} key={date}> 
                <Text style={styles.text}>{date}</Text>
            </View>
        )
      })} */}

 

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    gap:10,
    padding:10
  }, 
  column:{
    gap:10
  },
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
    fontSize:100,
    
  }
});
