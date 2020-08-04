import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

 
 const GoInfo = () => {
  return (
      <View style={{padding:16, paddingBottom:0}}>
          <View style={{height:15, width:60, marginLeft:-4}}>
            <Image source={require('../../assets/dummy/gojek.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}}/>
          </View>
          <Text style={{fontSize:17, fontWeight:'bold', color:'#1C1C1C', marginTop:15, marginBottom:20}}>Complete your profile</Text>
          <View>
              <View style={{flexDirection:'row', marginBottom:16}}>
                <View>
                  <Image source={require('../../assets/images/facebook-connect.png')}/>
                </View>
                <View style={{marginLeft:16, flex:1}}>
                  <Text style={{fontSize:15, fontWeight:'bold', color:'#4A4A4A'}}>Connect with Facebook</Text>
                  <Text style={{fontSize:15, fontWeight:'normal', color:'#4A4A4A', width:'70%'}}>Login faster without verification code</Text>
                </View>
              </View>
            <TouchableOpacity onPress={() => alert('anda mau baca')} style={{backgroundColor:'#61A756', paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
            <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>CONNECT</Text>
          </TouchableOpacity>        
          </View>
            <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, paddingBottom:16, marginTop:16}} />

        </View>
    )
}

export default GoInfo;