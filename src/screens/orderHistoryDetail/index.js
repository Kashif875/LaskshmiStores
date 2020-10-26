import * as React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image, ScrollView } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import StarRating from 'react-native-star-rating';
import { connect } from "react-redux";

class OrderHistoryDetail extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [{
                title: 'Lorem Ipsum is simply dummy of the',
                description: 'Lorem Ipsum is simply dummy',
                starCount: 4
            },
            {
                title: 'Lorem Ipsum is simply dummy',
                description: 'Lorem Ipsum is simply dummy',
                starCount: 2
            }]
        }

    }

    async componentDidMount() {
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { }} activeOpacity={0.6} style={{ marginTop: 15, backgroundColor: 'white' }}>

                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <Image resizeMode="contain" source={require('../../assets/img/cream.png')} style={styles.icon} />
                    <View>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View style={styles.delivered} /><Text style={styles.deliveredText}>Delivered</Text>
                        </View>

                        <View style={{ width: '20%' }}>
                            <StarRating
                                disabled={true}
                                emptyStar={'star-o'}
                                fullStar={'star'}
                                halfStar={'star-half-o'}
                                iconSet={'FontAwesome'}
                                containerStyle={{ marginStart: 10, marginTop: 5 }}
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

    renderOrderStatus = () => {
        return (
            <View style={{ marginTop: 40 }}>
                <View style={{ alignSelf: 'flex-start' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.greenCircle}>
                            <Image style={styles.orderStatusImg} resizeMode="contain" source={require('../../assets/img/ordered.png')} />
                        </View>
                        <View style={{ marginStart: 10, marginTop: 10 }}>
                            <Text style={{ color: '#01572C', fontSize: 10, fontFamily: 'Montserrat-Regular', }}>Order Placed</Text>
                            <Text style={{ color: '#707070', fontSize: 8, fontFamily: 'Montserrat-Regular', }}>Dec 04, 2019, 1:00 am</Text>
                        </View>
                    </View>


                    <View style={styles.orderLine} />

                </View>
                <View style={{ alignSelf: 'flex-start' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.greenCircle}>
                            <Image style={styles.orderStatusImg} resizeMode="contain" source={require('../../assets/img/packed.png')} />
                        </View>
                        <View style={{ marginStart: 10, marginTop: 10 }}>
                            <Text style={{ color: '#01572C', fontSize: 10, fontFamily: 'Montserrat-Regular', }}>Packed</Text>
                            <Text style={{ color: '#707070', fontSize: 8, fontFamily: 'Montserrat-Regular', }}>Dec 04, 2019, 1:00 am</Text>
                        </View>
                    </View>


                    <View style={styles.orderLine} />

                </View>
                <View style={{ alignSelf: 'flex-start' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.greenCircle}>
                            <Image style={styles.orderStatusImg} resizeMode="contain" source={require('../../assets/img/shipped.png')} />
                        </View>
                        <View style={{ marginStart: 10, marginTop: 10 }}>
                            <Text style={{ color: '#01572C', fontSize: 10, fontFamily: 'Montserrat-Regular', }}>Shipped</Text>
                            <Text style={{ color: '#707070', fontSize: 8, fontFamily: 'Montserrat-Regular', }}>Dec 04, 2019, 1:00 am</Text>
                        </View>
                    </View>


                    <View style={styles.orderLine} />

                </View>
                <View style={{ alignSelf: 'flex-start' }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.greenCircle}>
                            <Image style={styles.orderStatusImg} resizeMode="contain" source={require('../../assets/img/delivered.png')} />
                        </View>
                        <View style={{ marginStart: 10, marginTop: 10 }}>
                            <Text style={{ color: '#01572C', fontSize: 10, fontFamily: 'Montserrat-Regular', }}>Delivered</Text>
                            <Text style={{ color: '#707070', fontSize: 8, fontFamily: 'Montserrat-Regular', }}>Dec 04, 2019, 1:00 am</Text>
                        </View>
                    </View>



                </View>

            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ToolBar onPress={() => this.props.navigation.goBack()} title={`Order History`} />
                <ScrollView>
                    <View>


                        <View style={styles.card2}>
                            <Text style={styles.orderId}>ORDER ID 0000000</Text>
                            <Text style={styles.orderDetails}>Order can be tracked by 9876543210 Tracking link is shared via SMS</Text>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={styles.signupbtn}>
                                <Text style={styles.otptext}>Delivered</Text>
                            </TouchableOpacity>
                            <Text style={styles.orderTrack}>Order track 3rd party link</Text>
                        </View>
                        <View style={[styles.card2]}>
                            <FlatList
                                style={{ backgroundColor: '#F9F9F9', marginTop: 10 }}
                                renderItem={this.renderItem}
                                data={this.state.data} />

                            {this.renderOrderStatus()}
                        </View>

                        <TouchableOpacity onPress={() => { }} activeOpacity={0.6} style={[styles.card, { marginTop: 0 }]}>

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image resizeMode="contain" source={require('../../assets/img/invoice.png')} style={styles.downloadIcon} />
                                <Text style={styles.cardTitle}>Download Invoice</Text>

                            </View>

                        </TouchableOpacity>

                        <View style={styles.card2}>
                            <Text style={styles.title}>SHIPPING DETAIL</Text>
                            <View style={styles.line} />
                            <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10 }}>
                                <Image resizeMode="contain" source={require('../../assets/img/location.png')} style={styles.downloadIcon} />
                                <Text style={styles.userName}>John Due</Text>
                            </View>
                            <Text style={[styles.userData, { marginTop: 20 }]}>9876543210</Text>
                            <View style={styles.line} />
                            <Text style={styles.userData}>demo@mail.com</Text>
                            <View style={styles.line} />
                            <Text style={styles.userData}>street amstrong 15, Tamilnadu, Coimbatore</Text>
                        </View>
                        <View style={styles.card2}>
                            <Text style={styles.title}>PRICE DETAILS</Text>
                            <View style={styles.line} />
                            <Text style={styles.priceTitle}>PRICE DETAIL</Text>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.priceDetails}>Price (2 item)</Text>
                                <Text style={styles.priceDetails}>₹998.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.priceDetails}>Shipping Charge</Text>
                                <Text style={styles.priceDetails}>₹30.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.priceDetails}>Delivery</Text>
                                <Text style={[styles.priceDetails,{color:'#01572C'}]}>(Express Delivery) ₹100.00</Text>
                            </View>
                            <View style={styles.line} />
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.totalPrice}>Total Amount</Text>
                                <Text style={[styles.totalPrice]}>₹1128.00</Text>
                            </View>
                            <View style={styles.line} />
                        </View>
                    </View>

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
    totalPrice:{
        color: '#707070',
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
    },
    priceDetails: {
        color: '#707070',
        fontSize: 10,
        marginTop: 10,
        fontFamily: 'Montserrat-Regular',
    },
    priceTitle: {
        color: '#01572C',
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Montserrat-Regular',
    },
    title: {
        color: '#707070',
        fontSize: 10,
        fontFamily: 'Montserrat-Bold',
    },
    userName: {
        color: '#01572C',
        fontSize: 14,
        marginStart: 10,
        fontFamily: 'Montserrat-Regular',
    },
    userData: {
        color: '#00000080',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        marginTop: 10
    },
    line: {
        height: 1,
        backgroundColor: '#F4F4F4',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },
    orderId: {
        color: '#707070',
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
    },
    orderTrack: {
        color: '#707070',
        fontSize: 10,
        marginTop: 10,
        fontFamily: 'Montserrat-Bold',
    },
    orderDetails: {
        color: '#707070',
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        marginTop: 10
    },
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
    otptext: {
        color: '#F3F5D1',
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',


    },
    signupbtn: {
        elevation: 5,
        backgroundColor: '#01572C',
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
        borderRadius: 10,
    },
    greenCircle: {
        height: 40,
        alignItems: 'center',
        width: 40,
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: '#01572C'
    },
    orderStatusImg: {
        height: 20,
        width: 20
    },
    orderLine: {
        backgroundColor: '#01572C',
        height: 28,
        width: 4,
        marginStart: 19
    },
    card2: {
        width: '90%',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 20,
        borderRadius: 5,
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
    downloadIcon: {
        height: 20,
        width: 20
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



export default connect(mapStateToProps, null)(OrderHistoryDetail);