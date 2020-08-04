import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../components/molecules/GopayFeature.js';



class HomeGopayFeature extends Component {

	render() {
		return (

	 <View style={{marginHorizontal:17, marginTop:8}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#2C5FBB',
          borderTopLeftRadius:4, borderTopRightRadius:4, padding:14 }}>
            <Image source={require('../../assets/icons/gopay.png')} />
            <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Rp 50.000</Text>
          </View>

          <View style={{flexDirection:'row', paddingTop:20, paddingBottom:14, backgroundColor:'#2F65BD', 
            borderBottomLeftRadius: 4, borderBottomRightRadius:4}}>
            <GopayFeature image={require('../../assets/icons/pay.png')} name="Pay" />
            <GopayFeature image={require('../../assets/icons/nearby.png')}  name="Nearby" />
            <GopayFeature image={require('../../assets/icons/topup.png')}  name="Top Up" />
            <GopayFeature image={require('../../assets/icons/more.png')}  name="More"/>
          </View>
        </View>
		)
		
	}
}



export default HomeGopayFeature;