import * as React from 'react';
import { Button, View, StyleSheet, Text,BackHandler , ScrollView, TextInput, SafeAreaView, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import { connect } from "react-redux";
import LargeButton from '../../components/LargeButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


var lastIndex = 0

class Checkout extends React.Component {

    constructor() {
        super()
        this.state = {
            step: 1,
            deliveredData: [
                {
                    title: "Reguler Delivery",
                    description: "Order will be delivered between 3 - 5 business days",
                    status: true
                },
                {
                    title: "Express Delivery",
                    description: "Place your order before 6 pm and your items will be delivered",
                    status: false
                }
            ],
            cartList: [
                {
                    image: require('../../assets/img/cream.png'),
                    title: 'Day Beauty Cream',
                    amount: 449.51,
                    count: 1
                },
                {
                    image: require('../../assets/img/cream.png'),
                    title: 'Day Beauty Cream',
                    amount: "449",
                    count: 1
                }
            ],
            currentAddress: false
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    handleBackButtonClick() {
        if(this.state.step == 1){
            this.props.navigation.goBack();
            return true;
        }else{
            this.setState({
                step : this.state.step - 1
            })
        return true;

        }
    }


    async componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    renderStages = () => {
        switch (this.state.step) {
            case 1: return this.renderDelivered()
            case 2: return this.renderAddress()
            case 3: return this.renderPayment()

        }
    }


    onPressDelivery = (index) => {
        let list = [...this.state.deliveredData]

        if (lastIndex == index) {
            return
        }

        list[index].status = true
        list[lastIndex].status = false
        lastIndex = index

        this.setState({
            deliveredData: list
        })
    }
    renderDeliveredItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.onPressDelivery(index)} style={styles.card}>

                <Text style={styles.title}>{item.title}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Text style={styles.description}>{item.description}</Text>
                    <Image style={styles.radioOff} source={item.status ? require('../../assets/img/radio_on.png') : require('../../assets/img/radio_off.png')} />


                </View>

            </TouchableOpacity>
        )
    }

    renderDelivered = () => {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>

                <FlatList
                    renderItem={this.renderDeliveredItem}
                    data={this.state.deliveredData} />

                <View>
                    <LargeButton
                        backgroundColor={'#BA2026'}
                        width={width - 40}
                        height={50}
                        margin={'5%'}
                        textStyles={{ fontFamily: 'Montserrat-Regular' }}
                        color={'#fff'}
                        buttonText={'Submit'}
                        customClick={() => this.setState({ step: this.state.step + 1 })}
                    />
                </View>

            </View>
        )
    }

    renderAddress = () => {
        return (
            <ScrollView style={{ backgroundColor: '#F9F9F9' }}>
                <TouchableOpacity style={styles.card2}>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image resizeMode="contain" source={require('../../assets/img/location.png')} style={styles.downloadIcon} />
                            <Text style={styles.userName}>John Due</Text>
                        </View>
                        <Image style={[styles.radioOff, { marginTop: 0 }]} source={this.state.currentAddress ? require('../../assets/img/radio_on.png') : require('../../assets/img/radio_off.png')} />
                    </View>
                    <Text style={[styles.userData, { marginTop: 20 }]}>9876543210</Text>
                    <View style={styles.line} />
                    <Text style={styles.userData}>demo@mail.com</Text>
                    <View style={styles.line} />
                    <Text style={styles.userData}>street amstrong 15, Tamilnadu, Coimbatore</Text>
                </TouchableOpacity>

                <Text style={styles.or}>Or</Text>
                <Text style={styles.placeHolder}>Name</Text>
                <TextInput
                    style={styles.textInput}
                />
                <Text style={styles.placeHolder}>Phone Number</Text>
                <TextInput
                    style={styles.textInput}
                />
                <Text style={styles.placeHolder}>Email</Text>
                <TextInput
                    style={styles.textInput}
                />
                <Text style={styles.placeHolder}>PIN Code</Text>
                <TextInput
                    style={styles.textInput}
                />

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                    <View style={{ width: '45%' }}>
                        <Text style={[styles.placeHolder, { marginStart: 8 }]}>City/District</Text>
                        <TextInput
                            style={[styles.textInput, { width: '100%' }]}
                        />
                    </View>
                    <View style={{ width: '45%' }}>
                        <Text style={[styles.placeHolder, { marginStart: 8 }]}>State</Text>
                        <TextInput
                            style={[styles.textInput, { width: '100%' }]}
                        />
                    </View>
                </View>

                <Text style={styles.placeHolder}>Address (House No, Building, Street, Area) *</Text>
                <TextInput
                    style={[styles.textInput, { height: 150 }]}
                />

                <Text style={styles.placeHolder}>Locality / Town</Text>
                <TextInput
                    style={styles.textInput}
                />

                <Text style={styles.placeHolder}>Additional information</Text>
                <TextInput
                    style={[styles.textInput, { height: 150 }]}
                />
                <LargeButton
                    backgroundColor={'#BA2026'}
                    width={width - 40}
                    height={50}
                    margin={'5%'}
                    textStyles={{ fontFamily: 'Montserrat-Regular' }}
                    color={'#fff'}
                    buttonText={'Next'}
                    customClick={() => this.setState({ step: this.state.step + 1 })}
                />

            </ScrollView>
        )
    }


    renderCartItem = ({ item, index }) => {
        return (
            <View style={styles.card}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={item.image} />
                    <View>
                        <Text style={styles.productName}>{item.title}</Text>
                        <Text style={styles.productRate}>₹{item.amount}</Text>
                    </View>
                </View>

            </View>
        )
    }

    onBackPress=()=>{
        if(this.state.step == 1){
            this.props.navigation.goBack();
        }else{
            this.setState({
                step : this.state.step - 1
            })
        }
    }

    renderPayment = () => {
        return (
            <ScrollView style={{flex:1, backgroundColor: '#F9F9F9' }}>
                <View>

                    <FlatList
                        style={{ backgroundColor: '#F9F9F9', marginTop: 10 }}
                        renderItem={this.renderCartItem}
                        data={this.state.cartList} />

                </View>

                <View style={styles.card2}>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: "center" }}>
                            <Image resizeMode="contain" source={require('../../assets/img/location.png')} style={styles.downloadIcon} />
                            <Text style={styles.userName}>John Due</Text>
                        </View>
                        <TouchableOpacity><Text style={styles.change}>Change</Text></TouchableOpacity>
                    </View>
                    <Text style={[styles.userData, { marginTop: 20 }]}>9876543210</Text>
                    <View style={styles.line} />
                    <Text style={styles.userData}>demo@mail.com</Text>
                    <View style={styles.line} />
                    <Text style={styles.userData}>street amstrong 15, Tamilnadu, Coimbatore</Text>
                </View>

               

                <View style={styles.card2}>
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
                        <Text style={[styles.priceDetails, { color: '#01572C' }]}>(Express Delivery) ₹100.00</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={styles.totalPrice}>Total Amount</Text>
                        <Text style={[styles.totalPrice]}>₹1128.00</Text>
                    </View>
                    <View style={styles.line} />
                </View>

                <View style={{flex: 1,marginBottom:50, width: '100%' }}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.push('OrderSuccess')}
                        style={styles.payNow}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-evenly" }}>
                            <Text style={[styles.textStyle]}>Pay</Text>
                            <Text style={[styles.textStyle]}>₹1128.00</Text>


                        </View>

                    </TouchableOpacity>
                </View>

                

            </ScrollView>
        )
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ToolBar onPress={() => this.onBackPress()} title={`Checkout`} />

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, alignItems: 'center', marginEnd: 20, marginStart: 20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/img/checked.png')} style={{ height: 40, width: 40 }} />
                            <View style={{ height: 2, width: 20, backgroundColor: '#DDDDDD' }} />
                        </View>
                        <Text style={[styles.header, { marginStart: -10 }]}>Delivered</Text>
                    </View>


                    <View style={{ height: 2, width: 60, marginTop: -26, backgroundColor: '#DDDDDD' }} />

                    <View style={{ alignItems: 'center' }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 2, width: 20, backgroundColor: '#DDDDDD' }} />
                            {
                                this.state.step > 1 ? <Image source={require('../../assets/img/checked.png')} style={{ height: 40, width: 40 }} /> : <View style={styles.unChecked} />
                            }
                            <View style={{ height: 2, width: 20, backgroundColor: '#DDDDDD' }} />
                        </View>
                        <Text style={[styles.header]}>Address</Text>
                    </View>

                    <View style={{ height: 2, width: 60, marginTop: -26, backgroundColor: '#DDDDDD' }} />

                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 2, width: 20, backgroundColor: '#DDDDDD' }} />
                            {
                                this.state.step > 2 ? <Image source={require('../../assets/img/checked.png')} style={{ height: 40, width: 40 }} /> : <View style={styles.unChecked} />
                            }
                        </View>

                        <Text style={[styles.header, { marginEnd: -20 }]}>Payment</Text>
                    </View>

                </View>


                {
                    this.renderStages()
                }




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
    priceTitle: {
        color: '#01572C',
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Montserrat-Regular',
    },
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
    payNow: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center',
        flex: 1,
        backgroundColor: "#BA2026"

    },
    textStyle: {
        color: '#000',
        alignSelf: 'center',
        color: 'white',
        margin: '5%',
        fontFamily: 'Montserrat-Bold'
    },
    change: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        color: '#01572C'
    },
    productName: {
        marginStart: 15,
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#00000080'
    },
    productRate: {
        marginStart: 15,
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        marginTop: 5,
        color: '#BA2026'
    },
    placeHolder: {
        color: '#00000080',
        fontFamily: 'Montserrat-Regular',
        marginStart: 24,
        marginTop: 20
    },
    textInput: {
        height: 50, marginTop: 5, textAlignVertical: 'top', fontFamily: 'Montserrat-Regular', lineHeight: 10, padding: 10, borderStyle: 'solid', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10, textAlign: 'left', borderWidth: 2, borderColor: '#ACACAC1A', alignSelf: 'center'
    },
    or: {
        marginTop: 30,
        marginStart: 20,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: '#414B5A',
    },
    title: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: '#414B5A',
        marginTop: 5
    },
    description: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: '#414B5A',
        opacity: 0.5,
        lineHeight: 20,
        width: '80%',
        marginTop: 10
    },
    radioOff: {
        width: 16,
        height: 16,
        marginTop: 10
    },
    header: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#282828',
        marginTop: 10
    },
    unChecked: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#DDDDDD'
    },
    container: {
    },
    icon: {
        height: 200,
        width: 200, position: 'absolute',
        alignSelf: 'center',
        top: 100
    },
    downloadIcon: {
        height: 20,
        width: 20
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
    },
    card: {
        width: '90%',
        padding: 15,
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'center'
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
    line: {
        height: 1,
        backgroundColor: '#F4F4F4',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10
    },
})



export default connect(mapStateToProps, null)(Checkout);