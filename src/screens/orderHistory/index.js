import * as React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import StarRating from 'react-native-star-rating';
import { connect } from "react-redux";

class OrderHistory extends React.Component {

   constructor() {
      super()
      this.state = {
         data: [{
            title: 'Lorem Ipsum is simply dummy of the',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 4
         },
         {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 2
         },
         {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 1.5
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 4
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 5
         }, {
            title: 'Lorem Ipsum is simply dummy',
            description: 'Lorem Ipsum is simply dummy',
            starCount : 3
         }]
      }

   }

   async componentDidMount() {
   }

   renderItem = ({ item, index }) => {
      return (
         <TouchableOpacity onPress={() => this.props.navigation.push('OrderHistoryDetail')} activeOpacity={0.6} style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
               <Image resizeMode="contain" source={require('../../assets/img/cream.png')} style={styles.icon} />
               <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                     <View style={styles.delivered} /><Text style={styles.deliveredText}>Delivered</Text>
                  </View>

                  <View style={{width:'20%'}}>
                  <StarRating
                     disabled={true}
                     emptyStar={'star-o'}
                     fullStar={'star'}
                     halfStar={'star-half-o'}
                     iconSet={'FontAwesome'}
                     containerStyle={{marginStart:10,marginTop:5}}
                     maxStars={5}
                     starSize={20}
                     rating={item.starCount}
                     fullStarColor={'#BA2026'}
                  />
                  </View>
                
               </View>

            </View>

         </TouchableOpacity>
      )
   }

   render() {
      return (
         <SafeAreaView style={{ flex: 1 }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Order History`} />

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
      fontSize: 14,
      width: '70%',
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
      height: 80,
      width: 80
   },
   delivered: {
      height: 5,
      width: 5,
      borderRadius: 20,
      marginStart: 10,
      backgroundColor: '#079893'
   },
   deliveredText: {
      marginStart: 3,
      fontSize: 8,
      width: '70%',
      fontFamily: 'Montserrat-Regular',
      color: '#707070'
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



export default connect(mapStateToProps, null)(OrderHistory);