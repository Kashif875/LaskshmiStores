import * as React from 'react';
import { Button, View, StyleSheet,ScrollView, Text,Dimensions, SafeAreaView, Image, TextInput } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import LargeButton from '../../components/LargeButton';

import { connect } from "react-redux";
const { width, height } = Dimensions.get('window');
class AddShippingAddress extends React.Component {


   async componentDidMount() {
   }



   render() {
      return (
         <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Add New Address`} />

            <ScrollView>


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
            <Text style={styles.placeHolder}>PIN Code</Text>
            <TextInput
               style={styles.textInput}
            />

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
               <View style={{ width: '45%' }}>
                  <Text style={[styles.placeHolder, { marginStart: 8 }]}>City/District</Text>
                  <TextInput
                     style={[styles.textInput, { width: '100%' }]}
                  />
               </View>
               <View style={{ width: '45%' }}>
                  <Text style={[styles.placeHolder, { marginStart: 8 }]}>State</Text>
                  <TextInput
                     style={[styles.textInput, { width: '100%' }]}
                  />
               </View>
            </View>

            <Text style={styles.placeHolder}>Address (House No, Building, Street, Area) *</Text>
            <TextInput
               style={[styles.textInput, { height: 150 }]}
            />

            <Text style={styles.placeHolder}>Locality / Town</Text>
            <TextInput
               style={styles.textInput}
            />

            <Text style={styles.placeHolder}>Additional information</Text>
            <TextInput
               style={[styles.textInput, { height: 150 }]}
            />
            <LargeButton
               backgroundColor={'#BA2026'}
               width={width - 40}
               height={50}
               margin={'5%'}
               textStyles={{fontFamily: 'Montserrat-Regular'}}
               color={'#fff'}
               buttonText={'Submit'}
               customClick={() => {}}
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



export default connect(mapStateToProps, null)(AddShippingAddress);