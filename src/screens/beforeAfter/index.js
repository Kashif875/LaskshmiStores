import * as React from 'react';
import { Button, View, TouchableOpacity, FlatList, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import { connect } from "react-redux";

class BeforeAfter extends React.Component {
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
        <TouchableOpacity onPress={()=> {}} activeOpacity={0.8}>

        
            <Image style={{ height: 400, width: '90%',alignSelf:'center' }} resizeMode="contain" source={require('../../assets/img/before_after.png')} />
        </TouchableOpacity>
    )
}

   render() {
      return (
        <SafeAreaView style={{ flex: 1 }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Before After`} />

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



export default connect(mapStateToProps, null)(BeforeAfter);