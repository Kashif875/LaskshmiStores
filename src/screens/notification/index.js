import * as React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";

class Notification extends React.Component {

   constructor() {
      super()
      this.state = {
         data: [{
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         },
         {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         },
         {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
         }]
      }

   }

   async componentDidMount() {
   }

   renderItem = ({ item, index }) => {
      return (
         <TouchableOpacity onPress={() => {}} activeOpacity={0.6} style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <Image resizeMode="contain" source={require('../../assets/img/notification_logo.png')} style={styles.icon} />
               <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
               </View>

            </View>

         </TouchableOpacity>
      )
   }

   render() {
      return (
         <SafeAreaView style={{ flex: 1 }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Notification`} />

            <FlatList
               style={{ flex: 1, height: '100%', backgroundColor: '#F9F9F9', marginTop: 10 }}
               renderItem={this.renderItem}
               data={this.state.data} />
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
   card: {
      flexDirection: 'row',
      width: '90%',
      padding: 15,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
      alignSelf: 'center'
   },
   cardTitle: {
      marginStart: 10,
      fontSize:14,
      fontFamily: 'Montserrat-Regular',
      color: '#707070'
   },
   cardDescription: {
      marginStart: 10,
      fontFamily: 'Montserrat-Regular',
      marginTop:5,
      fontSize:10,
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



export default connect(mapStateToProps, null)(Notification);