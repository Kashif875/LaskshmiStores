import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";
class FilterScreen extends React.Component {


   constructor() {
      super()
      this.state = {
         filterMain: [
            {
               title: 'Hair',
               status: true
            },
            {
               title: 'Face Care',
               status: false
            },
            {
               title: 'Body Care',
               status: false
            },
            {
               title: 'Health Care',
               status: false
            },
            {
               title: 'Eye Care',
               status: false
            },
            {
               title: 'Lip Care',
               status: false
            },
            {
               title: 'Foot Care',
               status: false
            },
            {
               title: 'Baby Care',
               status: false
            },
            {
               title: 'Beard Care',
               status: false
            },
         ]
      }
   }

   async componentDidMount() {
   }


   onPressItem = (i) => {
      let array = [...this.state.filterMain]


      for (let index = 0; index < array.length; index++) {
         const element = array[index];
         element.status = false

      }
      array[i].status = true

      this.setState({
         filterMain: array
      })
   }


   renderItem = ({ item, index }) => {
      return (
         <TouchableOpacity onPress={() => this.onPressItem(index)} style={{ marginEnd: -10, backgroundColor: item.status ? 'white' : null, marginStart: 20, borderWidth: 1, borderColor: 'transparent', paddingBottom: 15, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
            <Text style={styles.filterTitle}>{item.title}</Text>
         </TouchableOpacity>
      )
   }

   render() {
      return (
         <SafeAreaView style={{ backgroundColor: '#F9F9F9', height: '100%' }}>

            <ToolBar onPress={() => this.props.navigation.goBack()} title={`Filters`} />

            <View style={{ width: '100%', flexDirection: 'row', height: '100%' }}>
               <View style={{ width: '50%', height: '100%', backgroundColor: '#D3D3D3' }}>
                  <FlatList
                     style={{ marginTop: 20 }}
                     renderItem={this.renderItem}
                     data={this.state.filterMain} />
               </View>
               <View style={{ width: '50%', height: '100%', backgroundColor: '#fff' }}>
                  <FlatList
                     style={{ marginTop: 20 }}
                     renderItem={this.renderItem}
                     data={this.state.filterMain} />
                  <FlatList />
               </View>
            </View>
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
   filterTitle: {
      color: '#707070',
      fontFamily: 'Montserrat-Regular',
      marginStart: 24,
      fontSize: 12,
      marginTop: 15
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



export default connect(mapStateToProps, null)(FilterScreen);