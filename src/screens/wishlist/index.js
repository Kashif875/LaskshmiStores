import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";

class Wishlist extends React.Component {


   async componentDidMount() {
   }


   render() {
      return (
         <SafeAreaView style={{ flex: 1,backgroundColor:'#F9F9F9' }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Wishlist`} />

            <Image style={{height:400,width:'90%',alignSelf:'center',marginTop:20}} resizeMode="contain" source={require('../../assets/img/empty_wishlist.png')} />

            <Text style={styles.title}>Wishlist is empty</Text>
            <Text style={styles.description}>You haven't add any item yet</Text>
            <TouchableOpacity
               onPress={() => { }}
               style={styles.signupbtn}>
               <Text style={styles.otptext}>Explore</Text>
            </TouchableOpacity>
         </SafeAreaView>
      );
   }
}
const mapStateToProps = state => {
   return {
      userData: state.user.userData
   }
};

const styles = StyleSheet.create({

   title :{
      textAlign:'center',
      marginTop:20,
      fontSize:16,
      fontFamily: 'Montserrat-Regular',
   },
   description:{
      textAlign:'center',
      marginTop:20,
      color:'#414B5A',
      fontSize:16,
      fontFamily: 'Montserrat-Regular',
   },
   signupbtn: {
      elevation: 5,
      backgroundColor: '#BA2026',
      width: '90%',
      color: '#16191C59',
      height: 45,
      marginStart: 8,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius: 10,
   },
   otptext: {
      color: '#F3F5D1',
      fontSize: 12,
      fontFamily: 'Montserrat-Bold',


  },
   container: {
   },
   icon: {
      height: 200,
      width: 200, position: 'absolute',
      alignSelf: 'center',
      top: 100
   },
   paragraph: {
      textAlign: 'center',
      marginTop: 0,
      fontSize: 24,
      color: 'black',
      fontWeight: '600'
   },

   logo: {
      height: '100%',
      width: '100%'
   }
})



export default connect(mapStateToProps, null)(Wishlist);