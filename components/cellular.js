import React,{useEffect,useState}from 'react'
import { StyleSheet,View, Text ,Button} from 'react-native';
import * as CellularData from 'expo-cellular';
import {If ,Else,Then} from 'react-if';

export default function Cellular() {
  const [data, setData] = useState({});
  const [isVisible, setIsVisible] = useState(false)

  const getData = async ()=>{
    try {
      
      const {carrier,allowsVoip,isoCountryCode, mobileCountryCode} = CellularData
      const gen = await CellularData.getCellularGenerationAsync();
      setData({carrier,allowsVoip,isoCountryCode,gen,mobileCountryCode})
    } catch (error) {
      console.error(error);
    }
  } 

  const handelVisibility = () =>{
    setIsVisible(!isVisible)
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <View style={styles.container}>
      <Button title ='Show Cellular Data' onPress={handelVisibility}/>
      <If condition={isVisible} >
      <Then> 
      <Text> Carrier: {data.carrier? data.carrier:'N/A'}</Text>
      <Text> Voip Authorized : {data.allowsVoip ? 'Yes':'No'}</Text>
      <Text> ISO Country Code : {data.isoCountryCode? data.isoCountryCode:'N/A'}</Text>
      <Text>  Country Mobile Network Code :{data.mobileCountryCode? data.mobileCountryCode:'N/A'}</Text>
      <Text> Mobile Network Generation : {data.gen? data.gen+'G':'N/A'}</Text>
      </Then>
      <Else>
        <Text>click Above to show results</Text>
      </Else>
      
      </If>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbe1f1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cellular:{
    width:'100%',
    height:'60%',
    

  }
});
