import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, Dimensions, TouchableOpacity, Image
} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import LargeButton from '../../components/LargeButton';
import OtpInputs from 'react-native-otp-inputs';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../../components/statusBar';
const { width, height } = Dimensions.get('window');
import { connect } from "react-redux";
import Modal from '../../utils/modal';

class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            codeLength: 4,
        }
    }

    componentDidMount() {

    }



    onPressKeepGoing = () => {
        if(this.validateOtp()){
            this.props.navigation.navigate('HomeInitial')
        }
    }


    validateOtp = () => {

        // if (this.state.code == '') {
        //     Modal.error('Please enter OTP');
        //     return false
        // }

        // if (this.state.code.length < 4) {
        //     Modal.error('Please valid enter OTP');
        //     return false
        // }

        return true
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#01572C' }}>
                <StatusBar backgroundColor={'#01572C'} barStyle={'light-content'} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{
                        justifyContent: 'space-around', alignItems: 'flex-start',
                        paddingLeft: '5%', marginTop: '10%'
                    }}>

                        <Text style={styles.textStyle1}>Enter the code</Text>
                    </View>
                    <Image source={require('../../assets/img/leaf.png')} style={{ alignSelf: 'flex-end', width: 166, height: 108, marginTop: '10%' }} />
                </View>
                <Text style={styles.subText}>Enter the code , we send to your phone please check and fill it.</Text>

                <ScrollView style={{ width: width, height: height / 1, marginTop: '12%', backgroundColor: '#fff', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <OtpInputs
                        ref={(ref) => this.otpRef = ref}
                        numberOfInputs={4}
                        handleChange={(code) => this.setState({ code: code })}
                        keyboardType="phone-pad"
                        autofillFromClipboard={true}
                        inputContainerStyles={{ marginTop: 50, marginEnd: 20, marginStart: 20 }}
                        inputStyles={{ width: 57, height: 50, borderWidth: 1, borderColor: '#DCDCDC', borderRadius: 10, textAlign: 'center' }}
                    />
                    <View style={{ marginTop: 39, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.subText1}>I didnt receive the code</Text>
                        <TouchableOpacity>
                            <Text style={{ color: '#BA2026', fontSize: 16, margin: 10, fontFamily: 'Roboto-Regular', }}>RESEND CODE</Text>
                        </TouchableOpacity>
                    </View>
                    <LargeButton
                        backgroundColor={'#BA2026'}
                        width={width - 40}
                        height={50}
                        margin={'5%'}
                        color={'#fff'}
                        buttonText={'Keep Going'}
                        customClick={() => this.onPressKeepGoing()}
                    />
                </ScrollView>



            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01572C',
        flex: 1,

    },
    header: {
        //   height:60,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        paddingLeft: 33,
        //   marginTop:'7%', 
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 18,
        alignItems: 'center',
        marginLeft: '5%'
    },
    textStyle1: {
        color: '#fff',
        fontSize: 20,
        width: width / 2,
        marginTop: 50,
        fontFamily: 'Roboto-Medium',

    },
    One: {
        color: '#fff',
        fontSize: 20,
        width: width / 2,
        fontFamily: 'Roboto-Regular'

    },
    subText: {
        color: '#fff',
        fontSize: 14,
        paddingLeft: '5%',
        lineHeight: 25,
        marginTop: 0,
        width: '80%',
        fontFamily: 'Roboto-Regular',

    }, subText1: {
        color: '#5F5F5F',
        fontSize: 14,
        marginTop: 7,
        fontFamily: 'Roboto-Regular',

    },
    bottom: {
        bottom: '10%',
        left: 0,
        right: 0,
        position: 'absolute'
    },

})

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(Otp);