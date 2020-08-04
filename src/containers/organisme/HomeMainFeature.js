import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import MainFeature from '../../components/molecules/MainFeature.js';



class HomeMainFeature extends Component {

	render() {
		return (
		<View style={{flexDirection:'row', flexWrap:'wrap', marginTop:18}}>
	         <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', flexWrap:'wrap'}}>
	          <MainFeature name="GO-RIDE" image={require('../../assets/icons/go-ride.png')}/>
	          <MainFeature name="GO-CAR" image={require('../../assets/icons/go-car.png')}/>
	          <MainFeature name="GO-BLUEBIRD" image={require('../../assets/icons/go-bluebird.png')}/>
	          <MainFeature name="GO-SEND" image={require('../../assets/icons/go-send.png')}/>
	          <MainFeature name="GO-DEALS" image={require('../../assets/icons/go-deals.png')}/>
	          <MainFeature name="GO-PULSA" image={require('../../assets/icons/go-pulsa.png')}/>
	          <MainFeature name="GO-FOOD" image={require('../../assets/icons/go-food.png')}/>
	          <MainFeature name="MORE" image={require('../../assets/icons/go-more.png')}/>
        	</View>
      	</View>
		)
		
	}
}



export default HomeMainFeature;