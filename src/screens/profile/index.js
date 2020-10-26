import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, Dimensions, FlatList, TouchableOpacity, Image
} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import LargeButton from '../../components/LargeButton';
import OtpInputs from 'react-native-otp-inputs';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../../components/statusBar';
import { connect } from "react-redux";

const { width, height } = Dimensions.get('window');
class ProfileScreen extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: 'Edit Profile',
                    icon: require('../../assets/img/profile_green.png'),
                    path: 'EditProfile'
                },
                {
                    title: 'Shipping Address',
                    icon: require('../../assets/img/shipments.png'),
                    path: 'ShippingAddress'
                },
                {
                    title: 'Wishlist',
                    icon: require('../../assets/heart.png'),
                    path: 'Wishlist'
                },
                {
                    title: 'Order History',
                    icon: require('../../assets/img/clock.png'),
                    path: 'OrderHistory'
                },
                {
                    title: 'Notification',
                    icon: require('../../assets/img/notification_green.png'),
                    path: 'Notification'
                }
                ,
                {
                    title: 'Invite Friends',
                    icon: require('../../assets/img/invite.png'),
                    path: ''
                }
            ]
        }

    }

    static navigationOptions = ({ navigation }) => {
        return {
            header: null

        }
    };

    onPressItem = (item,index) =>{

        this.props.navigation.push(item.path)
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.onPressItem(item)} activeOpacity={0.6} style={[styles.card, { marginTop: index == 5 ? 50 : 5 }]}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image resizeMode="contain" source={item.icon} style={styles.icon} />
                    <Text style={styles.cardTitle}>{item.title}</Text>

                </View>

                <Image style={{ height: 10, width: 10 }} source={require('../../assets/img/right_arrow.png')} />
            </TouchableOpacity>
        )
    }



    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#01572C' }}>




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, alignItems: 'center', marginStart: 20, marginEnd: 20 }}>


                    <Text style={styles.textStyle}>Profile</Text>

                    <TouchableOpacity>
                        <Image

                            source={require('../../assets/img/chat.png')} style={{
                                resizeMode: 'contain', width: 25, height: 25,
                            }} />
                    </TouchableOpacity>
                </View>



                <ScrollView contentContainerStyle={{ flex: 1 }}>



                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image source={require('../../assets/img/Oval.png')} style={{ marginLeft: '3%', marginTop: '6%', width: 100, height: 100 }} />
                        <Text style={styles.subText}>Maxwell Edition</Text>

                    </View>



                    <View style={{ width: width, marginTop: '7%', flex: 1, backgroundColor: '#F9F9F9', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>


                        <FlatList
                            style={{ flex: 1, marginTop: 10 }}
                            renderItem={this.renderItem}
                            data={this.state.data} />

                        <TouchableOpacity>
                        <Text style={styles.logout}>Log Out</Text>
                        </TouchableOpacity>




                    </View>

                </ScrollView>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    cardTitle: {
        marginStart: 10,
        fontFamily: 'Montserrat-Regular',
        color: '#01572C'
    },
    logout:{
        textAlign:'center',

        fontFamily: 'Montserrat-Regular',
        color: 'red',
        marginBottom:20
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 5,
        marginTop: 5,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#01572C',
        flex: 1
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
    textStyle: {
        color: '#fff',
        fontSize: 18,
        marginLeft: '3%',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },
    textStyle2: {
        color: '#000',
        width: width / 2,
        marginLeft: '3%',
        // textAlign:'center',
        // backgroundColor:'pink',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },
    subText: {
        color: '#fff',
        marginTop: 15,
        paddingLeft: '5%',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },
    bottom: {
        bottom: '10%',
        left: 0,
        right: 0,
        position: 'absolute'
    },
    icon: {
        height: 20,
        width: 20
    }

})

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(ProfileScreen);