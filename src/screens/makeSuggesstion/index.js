import * as React from 'react';
import { Button, View, StyleSheet,Dimensions, Text, SafeAreaView, Image, ScrollView, TextInput,TouchableOpacity } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
class MakeSuggestion extends React.Component {


   async componentDidMount() {
   }



   render() {
      return (
         <View style={{ flex: 1 }}>
            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Make a Suggesstion`} />

            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#F9F9F9' }} showsVerticalScrollIndicator={false}>
               <View style={styles.card}>
                  <Text style={styles.title}>Describe What Happenning</Text>
                  <TextInput
                     placeholder={`Enter some suggestions`}
                     style={styles.textInput} />
                      <TouchableOpacity
                        onPress={() => {}}
                        style={styles.signupbtn}>
                        <Text style={styles.otptext}>Send</Text>
                    </TouchableOpacity>
               </View>

               <View style={styles.bottom}>
                            <View style={[styles.Row]}>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/shopping-cart.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>Free Shipping</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>On Order Above Rs. 399</Text>
                                </View>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/money.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>COD Available</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>@ Rs. 40 On Per Order</Text>
                                </View>
                            </View>
                            <View style={styles.Row}>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/mail.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15, marginLeft: 0, marginRight: 0, textAlign: 'center' }]}>lakshmikrishnahomemade@gmail.com</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>Have query? Mail us.</Text>
                                </View>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/phone.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>+91 9344569982</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>24/7 available</Text>
                                </View>
                            </View>
                        </View>
            </ScrollView>

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
   imgContainer: {
      width: width / 2,
      height: height / 6,
      backgroundColor: '#F8F8F8',
      alignItems: 'center',
      justifyContent: 'center'
  },
   Row: {
      flexDirection: 'row'
  },
   bottom: {
      width: width,
      // bottom:0,
      // left:0,
      // right:0,
      marginTop:50,
      height: 221,
      backgroundColor: '#F8F8F8',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: 20,
      justifyContent: 'space-around'
  },
   otptext: {
      color: '#F3F5D1',
      fontSize: 12,
      fontFamily: 'Montserrat-Bold',


  },
   signupbtn: {
      elevation: 5,
      backgroundColor: '#BA2026',
      width:150,
      color: '#16191C59',
      height: 45,
      marginStart:8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "5%",
      borderRadius: 10,
  },
   title: {
      marginTop:10,marginStart:10,
      marginBottom:14,
      color:'#707070',
      fontSize:12,
      fontFamily:'Montserrat-Regular'
   },
   textInput:{
      height: 150,textAlignVertical: 'top',fontFamily:'Montserrat-Regular' ,lineHeight:10,padding:10, borderStyle: 'solid', width: '95%', backgroundColor: '#ACACAC1A', textAlign: 'left', borderWidth: 2, borderColor: '#ACACAC1A', alignSelf: 'center'
   },
   card: {
      width: '90%',
      padding: 15,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 30,
      borderRadius: 5,
      marginBottom: 10,
      alignSelf: 'center'
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



export default connect(mapStateToProps, null)(MakeSuggestion);