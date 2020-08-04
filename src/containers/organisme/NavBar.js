import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import NavBarIcon from '../../components/molecules/NavBarIcon.js';


class NavBar extends Component {

	render() {
		return (
			<View style={{height:54, flexDirection:'row', backgroundColor:'white'}}>
			    <NavBarIcon name="Home" image={require('../../assets/icons/home-active.png')} active />
			    <NavBarIcon name="Orders" image={require('../../assets/icons/order.png')} />
			    <NavBarIcon name="Help" image={require('../../assets/icons/help.png')} />
			    <NavBarIcon name="Inbox" image={require('../../assets/icons/inbox.png')} />
			    <NavBarIcon name="Account" image={require('../../assets/icons/account.png')} />
        	</View>
		)
		
	}
}



export default NavBar;