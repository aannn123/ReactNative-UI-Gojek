/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import SearchFeature from './src/components/molecules/SearchFeature.js';
import GoNews from './src/components/molecules/GoNews.js';
import GoInfo from './src/components/molecules/GoInfo.js';
import GoBanner from './src/components/molecules/GoBanner.js';
import ScrollableProducts from './src/containers/organisme/ScrollableProducts.js';
import NavBar from './src/containers/organisme/NavBar.js';
import HomeMainFeature from './src/containers/organisme/HomeMainFeature.js';
import HomeGopayFeature from './src/containers/organisme/HomeGopayFeature.js';


const App = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView>
        {/* Seacrh Bar*/}
          <SearchFeature/>
          {/* Gopay */}
          <HomeGopayFeature/>
          {/* Main Feature */}
         <HomeMainFeature/>
        <View style={{height:17, backgroundColor: '#F2F2F4', marginTop:10}}/>
          {/* News Section */}
          <GoNews/>
          {/* internal information sectio */}
          <GoInfo/>
          {/* Main GoBanner gofood section */}
          <GoBanner/>
          {/* Nearby go-food */}
          <ScrollableProducts/>
      </ScrollView>
          <NavBar/>
    </View>
    )
}



export default App;

const styles = StyleSheet.create({

})

// Fungsi flex 1 yaitu akan memakan habis sisa dari tinggi yang ada
// Flex 1 dia akan menggunakan sisa dari wrapper yang kosong akan digunakan seluruhmya dengan pembagian yang sama besar
// dimana semuanya sma2 memiliki bagian yang sama 