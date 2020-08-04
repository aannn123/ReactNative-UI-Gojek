import React from 'react';
import {View, Text, Image} from 'react-native';

 
 const NavBarIcon = (props) => {
  return (
       	<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Image style={{width:26, height:26}} source={props.image} />
          <Text style={{fontSize:10, color: props.active ? '#43AB4A' : '#545454', marginTop:4}}>{props.name}</Text>
       	</View>
    )
}

export default NavBarIcon;