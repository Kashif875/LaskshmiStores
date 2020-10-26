import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";

class OrderSuccess extends React.Component {


    async componentDidMount() {
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
                <View style={{ width: '100%', height: 60, backgroundColor: 'white', elevation: 10, marginTop: 25 }}>
                    <Text style={styles.titleHead}>Order Places</Text>
                </View>

                <Image style={{ height: 200, width: '90%', alignSelf: 'center', marginTop: 50 }} resizeMode="contain" source={require('../../assets/img/orderSuccess.png')} />

                <Text style={styles.title}>your order Places{"\n"}Successfully</Text>
                <Text style={styles.description}>Please, enter your email address. You will receive a link to create a new password via mail .</Text>
                <View style={{
                    position: 'absolute', bottom: 0, start: 0,
                    end: 0,
                }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('HomeInitial')}>
                        <Text style={styles.continue}>Continue Shopping</Text>
                    </TouchableOpacity>
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
    continue: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: '#727C8E',
        alignSelf: 'center',

        textAlign: 'center',
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
        color: '#01572C',
        fontFamily: 'Montserrat-Medium',
        textTransform: 'uppercase'
    },
    titleHead: {
        marginTop: 20,
        marginStart: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    description: {
        textAlign: 'center',
        marginTop: 20,
        color: '#707070',
        width: '70%',
        textAlign: 'center',
        alignSelf: 'center',
        lineHeight: 15,
        fontSize: 12,
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



export default connect(mapStateToProps, null)(OrderSuccess);