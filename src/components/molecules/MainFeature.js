import React from 'react';
import {View, Text, Image} from 'react-native';

 
 const MainFeature = (props) => {
  return (
       <View style={{width: '25%', alignItems:'center', marginBottom:18}}>
	      <View style={{width:58, height:58, justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#EFEFEF', borderRadius:18}}>
	        <Image source={props.image} />
	      </View>
	      <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>{props.name}</Text>
	    </View>
    )
}

export default MainFeature;