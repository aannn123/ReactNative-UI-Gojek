import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

 
 const GoBanner = () => {
  return (
      <View style={{padding:16}}>
          <View style={{position:'relative'}}>
            <Image source={require('../../assets/images/go-food-kfc.jpg')} style={{height:170, width:'100%', borderRadius:6}} />
            <View style={{width:'100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity:0.2, borderRadius:6}} />
             <View style={{height:15, width:55, position:'absolute', top:16, left:16}}>
              <Image source={require('../../assets/dummy/go-food.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}}/>
            </View>

            <View style={{position:'absolute', bottom:0, left:0, width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingBottom:16}}>
              <View>
                <Text style={{fontSize:18, fontWeight:'bold', color:'white', marginBottom:10}}>Free GO-FOOD vouchers</Text>
                <Text style={{fontSize:12, fontWeight:'600', color:'white'}}>Quick, before they run out</Text>
              </View>
              <View style={{flex:1, paddingLeft:12}}>
                <TouchableOpacity onPress={() => alert('anda mau baca')} style={{backgroundColor:'#61A756', paddingHorizontal:12, paddingVertical:11, alignSelf:'flex-end', borderRadius:4}}>
                  <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>GET VOURCHER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, paddingBottom:16, marginTop:16}} />
      </View>

    )
}

export default GoBanner;