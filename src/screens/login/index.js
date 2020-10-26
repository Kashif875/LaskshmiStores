import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Alert, Image, View, Dimensions, TextInput, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import StatusBar from '../../components/statusBar';
import Modal from '../../utils/modal'

import { connect } from "react-redux";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const list = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/onboarding1.png'),
        title: "ORIGINAL PRODUCT",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/onboarding2.png'),
        title: "FREE SHIPPING",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/onboarding3.png'),
        title: "",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
]

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            animating: false,
            align: 'center',
            alignsecond: false,
            number: ''
        };
        setTimeout(
            () =>
                this.setState({ align: 'flex-start' }, function () {
                    this.setState({
                        alignsecond: true,
                    });
                }),
            5000
        );

    }
    login = (param) => {
        console.log(width, height);
        console.log('before passing data', param);
        this.props.navigation.navigate('logintabs', {
            pass_data: param,
        })
    }
    renderPage(image, index) {
        return (
            <View style={styles.newren} key={index}>

                <Image style={styles.img_grp} source={image.imageUrl}></Image>
                <Text black center style={styles.txt1}>{image.title}</Text>
                {/* <Text light  center style={styles.txt2}>{image.subtitle}</Text> */}


            </View>

        );
    }

    validateFields = () => {
        // if(this.state.number == ''){
        //     Modal.error('Please enter mobile number');
        //     return false
        // }

        // if(this.state.number.length < 10){
        //     Modal.error('Please enter valid mobile number');
        //     return false
        // }

        return true;
    }


    onPressLogin = () => {
        if(this.validateFields()){
            this.props.navigation.navigate('Otp')
        }
    }


    render() {
        return (

            <KeyboardAwareScrollView style={styles.container}>
                <StatusBar backgroundColor={'#F3F5D1'} barStyle={'dark-content'} />
                <View style={{ marginTop: '10%' }}>

                    <Carousel
                        autoplay
                        autoplayTimeout={2000}
                        loop
                        pageIndicatorContainerStyle={styles.dot}
                        index={0}
                        pageIndicatorStyle={{ backgroundColor: '#16191C26' }}
                        activePageIndicatorStyle={styles.dot1}
                        pageSize={width}>
                        {list.map((image, index) => this.renderPage(image, index))}
                    </Carousel>

                    <TextInput
                        style={styles.input1}
                        onChangeText={(text) => this.setState({ number:text })}
                        underlineColorAndroid="#01572C5"
                        placeholder="Enter Your Number"
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                        maxLength={10}
                    />

                    <TouchableOpacity
                        onPress={() => this.onPressLogin()}
                        style={styles.signupbtn}>
                        <Text style={styles.otptext}>OTP Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: '10%' }} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.otptext1}>Skip for now</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({

    loginbtn: {
        elevation: 5,
        backgroundColor: '#24D4BC',
        borderColor: '#24D4BC',
        borderWidth: 1,
        width: width / 2,
        height: height / 14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        backgroundColor: '#F3F5D1'
    },

    dot1: {
        backgroundColor: '#00000040',
        borderColor: 'white',
    },
    dot: {
        alignItems: 'center',
    },
    newren: {
        alignItems: 'center',
    },

    img_grp: {
        // top: '30%',
        resizeMode: 'contain',

        width: '70%',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '10%',
        height: height / 2.5,
    },
    img_grp1: {
        // top: '30%',
        resizeMode: 'contain',

        marginTop: '10%',

        width: 150,
        height: 50,

    },

    subtitle: {
        // margin: '20%',

        width: width - 100,
        height: height / 12,
        alignItems: 'flex-start',
    },
    bottomLine: {
        // height: height / 16,
        // width: width / 2,
        // flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // bottom: '0.5%',
        // borderRadius: 10,
        // flex: 1,
        bottom: 5,
        left: 0,
        right: 0,
        position: 'absolute',
        // justifyContent: 'flex-end',
        // marginBottom: 36
    },
    input1: {
        // height: 40,
        width: '85%',
        marginLeft: '20%',
        marginRight: '20%',
        fontSize: 10,
        paddingStart:12,
        alignSelf: 'center',
        color: '#000000',
        marginTop: '25%',
        fontFamily: 'Montserrat-Regular',

        // marginBottom:'3%'
    },
    txt2: {
        // height: 40,
        width: width / 1.2,
        fontSize: 14,
        alignSelf: 'center',
        color: '#16191C59',
        textAlign: 'center',
        // marginBottom:'3%'
    },
    otptext: {
        color: '#F3F5D1',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',


    },
    otptext1: {
        fontSize: 12,
        marginTop: '10%',
        alignSelf: 'center',
        color: '#000',
        fontWeight: '900',
        height: height / 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        borderRadius: 5,
        marginBottom: '10%',
        fontFamily: 'Montserrat-Bold',


    },
    txt1: {
        fontSize: 16,
        marginBottom: '12%',
        marginTop: 24,
        fontFamily: 'Montserrat-Medium',


    },
    textSignUp: {
        color: 'white',
        fontSize: 20,

    },


    signupbtn: {
        elevation: 5,
        backgroundColor: '#BA2026',
        width: '85%',
        marginLeft: '20%',
        marginRight: '20%',
        alignSelf: 'center',
        color: '#16191C59',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        borderRadius: 5,
    }
});
const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(Login);