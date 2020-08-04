import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItem from '../../components/molecules/ScrollableItem.js';


class ScrollableProducts extends Component {

	render() {
		return (
			<View>
				<View style={{height:15, width:55, marginLeft:16}}>
				<Image source={require('../../assets/dummy/go-food.png')} style={{width:undefined, height:undefined, resizeMode:'contain', flex:1}}/>
				</View>
				<View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:16, paddingHorizontal:16}}>
				<Text style={{fontSize:17, fontWeight:'bold', color:'#1C1C1C'}}>Nearby Restaurant</Text>
				<Text style={{fontSize:17, fontWeight:'bold', color:'#61A756'}}>See all</Text>
				</View>

				<ScrollView style={{flexDirection:'row', paddingLeft:16}} horizontal>
					<ScrollableItem name="KFC Aeon Mall" image={require('../../assets/images/go-food-kfc.jpg')}/>
					<ScrollableItem name="Bakmi GM Aeon Mall" image={require('../../assets/images/go-food-gm.jpg')}/>
					<ScrollableItem name="Martabak Orins" image={require('../../assets/images/go-food-orins.jpg')}/>
					<ScrollableItem name="Martabak Banka" image={require('../../assets/images/go-food-banka.jpg')}/>
					<ScrollableItem name="Mie Ayam Pak Boss" image={require('../../assets/images/go-food-pak-boss.jpg')}/>
				</ScrollView>
				<View style={{borderBottomColor:'#E8E9ED', borderBottomWidth:1, paddingBottom:16, marginTop:20, marginHorizontal:16}} />
        	</View>
		)
		
	}
}



export default ScrollableProducts;