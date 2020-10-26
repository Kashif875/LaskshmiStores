import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";

class ReadMore extends React.Component {


    constructor(){
        super()
    }
    async componentDidMount() {
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                <ToolBar onPress={() => this.props.navigation.goBack()} title={`Find Your Beauty Match`} />

                <ScrollView style={{ flex: 1 }}>



                        <Image source={require('../../assets/One.png')} style={{ height: 300, alignSelf: 'center', borderRadius: 10, marginTop: 20, width: '85%' }} />

                        <Text style={styles.author}>Lipstick     By Janny Joe</Text>
                        <Text style={styles.title}>The Cosmetics World</Text>
                        <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.{"\n\n"}Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged . {"\n\n"}It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.{"\n\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{"\n\n"}It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged .{"\n\n"} It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

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
    author : {
        marginTop: 20,
        fontSize: 10,
        color:'#797979',
        marginStart:20,
        fontFamily: 'Montserrat-Regular',
    },
    title: {
        marginTop: 20,
        fontSize: 16,
        marginStart:20,
        color:'#01572C',
        fontFamily: 'Montserrat-Bold',
    },
    description: {
        marginTop: 20,
        color: '#707070',
        marginStart:20,
        fontSize: 12,
        width:'90%',
        marginBottom:20,
        fontFamily: 'Montserrat-Regular',
    },
    signupbtn: {
        elevation: 5,
        backgroundColor: '#BA2026',
        width: '90%',
        color: '#16191C59',
        height: 45,
        marginStart: 8,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 10,
    },
    otptext: {
        color: '#F3F5D1',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',


    },
    container: {
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



export default connect(mapStateToProps, null)(ReadMore);