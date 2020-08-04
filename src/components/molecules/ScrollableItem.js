import React from 'react';
import {View, Text, Image} from 'react-native';

 
 const ScrollableItem = (props) => {
  return (
       <View style={{marginRight:16}}>
          <View style={{width:150, height:150}}>
            <Image source={props.image} style={{width:undefined, height:undefined, resizeMode:'cover', flex:1, borderRadius:10}}/>
          </View>
          <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C', marginTop:12}}>{props.name}</Text>
        </View>
    )
}

export default ScrollableItem;