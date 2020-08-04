import React from 'react';
import {View, Text, Image} from 'react-native';

 
 const GopayFeature = (props) => {
  return (
      <View style={{ flex:1, alignItems:'center'}}>
        <Image source={props.image} />
        <Text style={{fontSize:13, fontWeight:'bold', color:'white', marginTop:15}}>{props.name}</Text>
      </View>
    )
}

export default GopayFeature;