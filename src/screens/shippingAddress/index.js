import * as React from 'react';
import { Button, View, StyleSheet, Dimensions, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import LargeButton from '../../components/LargeButton';

import { connect } from "react-redux";
const { width, height } = Dimensions.get('window');
class ShippingAddress extends React.Component {

   constructor() {
      super()
      this.state = {
         data: [{
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: true
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         },
         {
            title: 'Street 2',
            description: 'Order will be delivered between 3 - 5 business days',
            status: false
         }]
      }

   }

   async componentDidMount() {
   }

   renderItem = ({ item, index }) => {
      return (
         <TouchableOpacity onPress={() => { }} activeOpacity={0.6} style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                  <Image style={{height:15,width:15}} resizeMode="contain" source={item.status ? require('../../assets/img/radio_on.png') :  require('../../assets/img/radio_off.png')} />
                  <Text style={styles.title}>{item.title}</Text>
               </View>
               <TouchableOpacity>
                  <Text style={styles.edit}>Edit</Text>

               </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
               <Text style={styles.description}>{item.description}</Text>
               <TouchableOpacity>
                  <Image style={{ alignSelf: "flex-end", marginTop: 40 }} source={require('../../assets/img/delete.png')} />

               </TouchableOpacity>
            </View>


         </TouchableOpacity>
      )
   }

   render() {
      return (
         <SafeAreaView style={{ flex: 1 }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Shipping Address`} />

            <FlatList
               style={{ marginBottom:80, backgroundColor: '#F9F9F9', marginTop: 10 }}
               renderItem={this.renderItem}
               data={this.state.data} />

            <LargeButton
               backgroundColor={'#BA2026'}
               width={width - 40}
               height={50}
               margin={'5%'}
               styles={{ position: 'absolute', bottom: 0 }}
               textStyles={{fontFamily: 'Montserrat-Regular'}}
               color={'#fff'}
               buttonText={'Add New'}
               customClick={() => this.props.navigation.push('AddShippingAddress')}
            />
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
   title: {
      color: '#414B5A',
      fontSize: 12,
      marginStart:10,
      fontFamily: 'Montserrat-Regular',
   },
   description: {
      color: '#00414B5A',
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      lineHeight: 20,
      marginTop: 10,
      width: '80%'
   },
   edit: {
      color: '#01572C',
      fontSize: 11,
      fontFamily: 'Montserrat-Bold',
   },
   card: {
      width: '90%',
      padding: 15,
      paddingTop: 0,
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 10,
      borderRadius: 5,
      marginBottom: 10,
      alignSelf: 'center'
   },
   cardTitle: {
      marginStart: 10,
      fontSize: 14,
      fontFamily: 'Montserrat-Regular',
      color: '#707070'
   },
   cardDescription: {
      marginStart: 10,
      fontFamily: 'Montserrat-Regular',
      marginTop: 5,
      fontSize: 10,
      color: '#707070'
   },
   icon: {
      height: 30,
      width: 30
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



export default connect(mapStateToProps, null)(ShippingAddress);