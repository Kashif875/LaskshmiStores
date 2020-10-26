import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, TextInput, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
//import {Button,Text} from './app/components2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import StatusBar from '../../components/statusBar';

import { connect } from "react-redux";

// import arrow from '../../assets/imgs/arrow.png';

import LinearGradient from 'react-native-linear-gradient';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const list = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/item2.png'),
        title: "ORIGINAL PRODUCT",
        category: 'Hair Care'
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FREE SHIPPING",
        category: 'Face Care'

    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/item3.png'),
        title: "FAST DELIVERY",
        category: 'Body & Health'
    },
    {
        id: 3,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/item4.png'),
        title: "FAST DELIVERY",
        category: 'Eye & Lip'
    },
    {
        id: 4,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FAST DELIVERY",
        category: 'Beard Care'
    },
    {
        id: 5,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FAST DELIVERY",
        category: 'Skin Care'
    },
]

class SearchScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            animating: false,
            align: 'center',
            alignsecond: false,
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

    static navigationOptions = ({ navigation }) => {
        return {
            header: null

        }
    };

    render() {
        //const [value, onChangeText] = React.useState('Useless Placeholder');
        return (


            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp1')}>
                        <Image style={styles.img_grp} source={require('../../assets/img/arrowleft.png')}></Image>
                    </TouchableOpacity>
                    <View style={{ width: width / 1.33, marginStart: '6%', borderRadius: 6, flexDirection: 'row', backgroundColor: "#ACACAC1A", marginTop: '2.5%', marginBottom: '2.5%' }}>
                        <Image style={styles.img_grp1} source={require('../../assets/img/search.png')}></Image>

                        <TextInput
                            style={styles.input1}
                            placeholder="Cari barang Kamu disini"
                            placeholderTextColor="#B4B4B4"
                            autoCapitalize="none"
                        />
                    </View>
                    {/* <Text style={styles.headerText}>Checkout</Text> */}
                </View>



                <KeyboardAwareScrollView style={styles.container}>
                    <View>
                        <Text style={styles.txt1}>POPULAR</Text>

                        <FlatList
                            data={list}
                            contentContainerStyle={{
                                paddingBottom: 20, marginLeft: '8%', marginRight: '8%',
                                //   backgroundColor:'pink'
                            }}
                            numColumns={3}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <TouchableOpacity >
                                        <View style={{ backgroundColor: '#FFFFFF', marginTop: '12%', marginLeft: 5,elevation:10, marginRight: 10, elevation: 4, borderRadius: 5, padding: 3 }}>
                                            <Text style={{
                                                color: '#00000080', textAlign: 'center', fontSize: 10,
                                                fontFamily: 'Montserrat-Medium'
                                            }}>{item.category}</Text>

                                        </View>
                                        {/* <Image style={styles.imageThumbnail} source={{ uri: item.imageUrl }} /> */}
                                    </TouchableOpacity>
                                </View>
                            )}
                            //Setting the number of column
                            numColumns={3}
                            keyExtractor={(item, index) => index}
                        />

                        <Text style={styles.txt1}>RECENT VIEW</Text>

                        <FlatList
                            data={list}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: 20, marginTop: '5%', borderWidth: 2 }}
                            renderItem={({ item }) => (
                                <View style={{ marginTop: '5%' }}>
                                    <Image style={styles.img_grp3} source={item.imageUrl}></Image>

                                </View>
                            )}
                            //Setting the number of column
                            keyExtractor={(item, index) => index}
                        />

                        <Text style={styles.txt1}>RECOMENDATION</Text>

                        <FlatList
                            data={list}
                            contentContainerStyle={{ paddingBottom: 20, marginLeft: '3%', marginRight: '3%' }}
                            renderItem={({ item }) => (
                                <View style={{ marginTop: '3%',elevation:10,marginStart:20,marginEnd:20,borderRadius:10, backgroundColor: '#fff' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={styles.img_grp4} source={item.imageUrl}></Image>
                                        <View style={{}}>
                                            <Text style={{
                                                fontWeight: 'bold', margin: '8%', marginBottom: '2%', fontSize: 17, color: '#000', fontSize: 14,
                                                fontFamily: 'Montserrat-Regular'
                                            }}>Day Beauty Cream</Text>
                                            <Text style={{
                                                margin: '2%', marginLeft: '8%', fontSize: 12, color: '#000',
                                                fontFamily: 'Montserrat-Regular'
                                            }}>Naturals beauty</Text>
                                            <Text style={{
                                                fontWeight: '900', marginLeft: '8%', fontSize: 17, color: '#BA2026', fontSize: 14,
                                                fontFamily: 'Montserrat-Regular'
                                            }}>₹499.00</Text>

                                        </View>
                                    </View>
                                </View>
                            )}
                            //Setting the number of column
                            keyExtractor={(item, index) => index}
                        />

                    </View>
                </KeyboardAwareScrollView>
            </View>
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
        backgroundColor: '#F8F8F8'
    },

    dot1: {
        backgroundColor: '#3087FD',
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

        width: 30,
        alignItems: 'center',
        alignContent: 'center',

        marginStart: 10,
        height: 30,
    },
    img_grp3: {
        // top: '30%',
        resizeMode: 'contain',

        width: 130,
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center',

        marginStart: 10,
        height: 130,
    },
    img_grp4: {
        // top: '30%',
        resizeMode: 'contain',

        width: 90,
        margin: '2%',
        borderWidth: 1,
        alignItems: 'center',
        alignContent: 'center',
        marginStart: 10,
        height: 90,
    },
    img_grp1: {
        // top: '30%',
        resizeMode: 'contain',

        width: 15,
        alignItems: 'center',
        alignContent: 'center',

        marginStart: 10,
        height: 15,
        marginTop: '2.8%',
        marginBottom: '2.5%',
        alignSelf: 'center',

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
        width: width / 1.33,
        marginRight: '30%',
        marginStart: 10,
        fontSize: 12,
        alignSelf: 'center',
        color: '#000',
        borderRadius: 3,
        backgroundColor: '#ACACAC1A',
        fontSize: 10,
        fontFamily: 'Montserrat-Regular'
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
        fontSize: 15,

    },
    otptext1: {
        fontSize: 15,
        marginTop: '10%',
        alignSelf: 'center',
        color: '#000',
        fontWeight: '900',
        height: height / 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        borderRadius: 5

    },
    txt1: {
        fontSize: 17,
        marginTop: 22,
        marginStart: 30,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'

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
        height: height / 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        borderRadius: 5
    },
    header: {
        height: 60,
        marginTop: '9%',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingLeft: '3%',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
});

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(SearchScreen);