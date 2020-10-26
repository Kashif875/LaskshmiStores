import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import { connect } from "react-redux";


class CommonScreen extends React.Component {

   constructor() {
      super()
      this.state = {
         title: ''
      }
   }

   async componentDidMount() {

      this.setState({
         title: this.props.navigation.state.params.status == 1 ? "Privacy Policy" : "Legal Information"
      })
   }



   render() {
      return (
         <SafeAreaView style={{ flex: 1 }}>
            <ToolBar onPress={() => this.props.navigation.goBack()} title={this.state.title} />

            <View style={styles.card}>
               <ScrollView showsVerticalScrollIndicator={false}>

                  <Text style={styles.description}>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. {"\n"}{"\n"}
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged . {"\n"}{"\n"}
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.{"\n"}{"\n"}
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged .{"\n"}{"\n"}
                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </Text>

               </ScrollView>
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
   container: {
   },
   card: {
      flexDirection: 'row',
      width: '90%',
      height:'80%',
      padding: 15,
      justifyContent: 'space-between',
      backgroundColor: 'white',
      elevation: 10,
      marginTop: 10,
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
   description: {
      marginTop: 0,
      fontSize: 14,
      lineHeight:20,
      marginTop:10,
      marginBottom:10,
      fontFamily: 'Montserrat-Regular',
      color: '#707070',
   },

   logo: {
      height: '100%',
      width: '100%'
   }
})



export default connect(mapStateToProps, null)(CommonScreen);