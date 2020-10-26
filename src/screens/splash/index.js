import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import StatusBar from '../../components/statusBar';

import { connect } from "react-redux";
class SplashScreen extends React.Component {


   async componentDidMount() {
      this.checkLoginStatus()
   }

   checkLoginStatus = () => {
      setTimeout(()=>{
        this.props.navigation.navigate('Login')
      },2000)
   }

   render() {
      return (
         <View style={{ flex: 1, backgroundColor: '#F3F5D1', justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('../../assets/img/splashlogo.png')}
               style={{ width: 200, height: 200, }}
            />
         </View>
      );
   }
}
const mapStateToProps = state => {
   return {
      userData: state.user.userData
   }
};

const styles = StyleSheet.create({
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



export default connect(mapStateToProps, null)(SplashScreen);