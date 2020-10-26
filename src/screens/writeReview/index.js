import * as React from 'react';
import { Button, View, StyleSheet, Dimensions, Text, SafeAreaView, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import StarRating from 'react-native-star-rating';
import { connect } from "react-redux";
import LargeButton from '../../components/LargeButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class WriteReview extends React.Component {

   constructor() {
      super()
      this.state = {
         rating: 0
      }
   }

   async componentDidMount() {
   }



   render() {
      return (
         <SafeAreaView style={{ flex: 1, backgroundColor: '#F8F8F8' }}>
            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Write Review`} />

            <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: '#F9F9F9' }} showsVerticalScrollIndicator={false}>


               <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginTop: 20 }}>
                  <Image resizeMode="contain" source={require('../../assets/img/cream.png')} style={styles.icon} />
                  <Text style={styles.title}>Day Beauty Cream</Text>
               </View>
               <Text style={[styles.title, { marginStart: 20, marginTop: 40, fontSize: 16 }]}>Whats your rate ?</Text>
               <View style={{ width: '50%' }}>
                  <StarRating
                     disabled={false}
                     emptyStar={'star-o'}
                     fullStar={'star'}
                     halfStar={'star-half-o'}
                     halfStarEnabled={true}
                     iconSet={'FontAwesome'}
                     containerStyle={{ marginStart: 20, marginTop: 20 }}
                     maxStars={5}
                     selectedStar={(star) => this.setState({
                        rating: star
                     })}
                     starSize={35}
                     rating={this.state.rating}
                     fullStarColor={'#BA2026'}
                  />
               </View>
               <Text style={[styles.title, { marginStart: 20, marginTop: 25, fontSize: 16 }]}>What can we improve ?</Text>
               <TextInput
                  placeholder={``}
                  style={styles.textInput} />
               <LargeButton
                  backgroundColor={'#BA2026'}
                  width={width - 40}
                  height={50}
                  margin={'5%'}
                  textStyles={{ fontFamily: 'Montserrat-Regular' }}
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
      marginTop: 50,
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
      width: 150,
      color: '#16191C59',
      height: 45,
      marginStart: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "5%",
      borderRadius: 10,
   },
   title: {
      marginStart: 10,
      color: '#000000',
      fontSize: 16,
      marginTop: 10,
      fontFamily: 'Montserrat-Regular'
   },
   textInput: {
      height: 150, textAlignVertical: 'top', fontFamily: 'Montserrat-Regular',
      lineHeight: 10, padding: 10, borderStyle: 'solid', width: '91%', backgroundColor: 'white',
      textAlign: 'left', alignSelf: 'center', borderRadius: 10, marginTop: 10
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
      height: 80,
      width: 80,
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



export default connect(mapStateToProps, null)(WriteReview);