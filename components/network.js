import React,{useState}from 'react'
import { StyleSheet,View, Text ,Button} from 'react-native';
import * as NetworkData from 'expo-network';


export default function Network() {
  const [data, setData] = useState({});

  const getData = async ()=>{
    try {
      const IP = await NetworkData.getIpAddressAsync();
      const {type,isConnected,isInternetReachable}=  await NetworkData.getNetworkStateAsync();
      setData({type,isConnected,isInternetReachable,IP});

    } catch (error) {
      console.error(error);
    }
  } 

 

  return (
    <View style={styles.container}>
      <Button title ={'Get Network data'} onPress={getData} />
      <Text> Network Type : {data.type? data.type:`${data.type}`}</Text>
      <Text> Connected to network : {data.isConnected ? 'Yes':'No'}</Text>
      <Text> is the Internet Reachable? :  {data.isInternetReachable? 'Yes':'No'}</Text>
      <Text> IP : {data.IP? data.IP:'N/A'}</Text>
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
