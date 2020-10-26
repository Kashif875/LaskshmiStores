import * as React from 'react';
import { Button, View, StyleSheet, ScrollView, Text, Dimensions, SafeAreaView, Image, TextInput, ImageBackground } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import LargeButton from '../../components/LargeButton';

import { connect } from "react-redux";
const { width, height } = Dimensions.get('window');


class EditProfile extends React.Component {


   async componentDidMount() {
   }



   render() {
      return (
         <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Edit Profile`} />
            <ScrollView>

               <ImageBackground source={require('../../assets/img/Oval.png')} style={{alignItems:'center',justifyContent:'center',alignContent:'center', alignSelf: 'center', marginTop: '6%', width: 100, height: 100 }} >
                  <Image style={{height:25,width:35}} resizeMode="contain" source={require('../../assets/img/camera.png')}/>
               </ImageBackground>



               <Text style={styles.placeHolder}>Name</Text>
               <TextInput
                  style={styles.textInput}
               />
               <Text style={styles.placeHolder}>Phone Number</Text>
               <TextInput
                  style={styles.textInput}
               />
               <Text style={styles.placeHolder}>Email</Text>
               <TextInput
                  style={styles.textInput}
               />
               <Text style={styles.placeHolder}>Gender</Text>
               <TextInput
                  style={styles.textInput}
               />
               <Text style={styles.placeHolder}>Date of Birth</Text>
               <TextInput
                  style={styles.textInput}
               />


               <LargeButton
                  backgroundColor={'#BA2026'}
                  width={width - 40}
                  height={50}
                  margin={'5%'}
                  textStyles={{ fontFamily: 'Montserrat-Regular' }}
                  color={'#fff'}
                  buttonText={'Update'}
                  customClick={() => this.props.navigation.push('AddShippingAddress')}
               />
            </ScrollView>

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
   placeHolder: {
      color: '#00000080',
      fontFamily: 'Montserrat-Regular',
      marginStart: 24,
      marginTop: 20
   },
   textInput: {
      height: 50, marginTop: 5, textAlignVertical: 'top', fontFamily: 'Montserrat-Regular', lineHeight: 10, padding: 10, borderStyle: 'solid', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10, textAlign: 'left', borderWidth: 2, borderColor: '#ACACAC1A', alignSelf: 'center'
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



export default connect(mapStateToProps, null)(EditProfile);