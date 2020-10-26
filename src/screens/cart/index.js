import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Dimensions, Text, SafeAreaView, Image, FlatList } from 'react-native';
import StatusBar from '../../components/statusBar';
import LargeButton from '../../components/LargeButton';
const { width, height } = Dimensions.get('window');

import { connect } from "react-redux";
class Cart extends React.Component {



    constructor() {
        super()
        this.state = {
            data: [
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
            ]
        }

    }





    static navigationOptions = ({ navigation }) => {
        return {
            header: null

        }
    };


    async componentDidMount() {

        this.calculateTotalAmount()
    }


    onPressMinus = (item, index) => {
        let list = [...this.state.data]
        if (list[index].count == 1) {
            this.onPressDelete(item, index)


        } else {
            list[index].count--

            this.setState({
                data: list
            }, () => {
                this.calculateTotalAmount()
            })
        }

    }

    onPressAdd = (item, index) => {
        let list = [...this.state.data]
        list[index].count++

        this.setState({
            data: list
        }, () => {
            this.calculateTotalAmount()
        })

    }

    onPressDelete = (item, index) => {
        let list = [...this.state.data]

        list.splice(index, 1)

        this.setState({
            data: list
        })
    }

    calculateTotalAmount = () => {
        let total = 0
        for (let index = 0; index < this.state.data.length; index++) {
            const element = this.state.data[index];
            let amt = element.amount * element.count;

            total += amt
        }

        this.setState({
            totalAmount: total
        })
    }


    renderItem = ({ item, index }) => {
        return (
            <View style={styles.card}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={item.image} />
                    <View>
                        <Text style={styles.productName}>{item.title}</Text>
                        <Text style={styles.productRate}>₹{item.amount}</Text>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginEnd: 20 }}>
                        <TouchableOpacity onPress={() => this.onPressMinus(item, index)} style={{ backgroundColor: '#F8F8F8', padding: 5, paddingTop: 0, paddingBottom: 0 }}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.count}>{item.count}</Text>
                        <TouchableOpacity onPress={() => this.onPressAdd(item, index)} style={{ backgroundColor: '#F8F8F8', padding: 5, paddingTop: 0, paddingBottom: 0 }}>
                            <Text>+</Text>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => this.onPressDelete(item, index)}>
                        <Image source={require('../../assets/img/delete.png')} />
                    </TouchableOpacity>
                </View>

            </View>
        )
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ width: '100%', height: 60, backgroundColor: 'white', elevation: 10, marginTop: 25 }}>
                    <Text style={styles.title}>My Bag</Text>
                </View>

                {
                    this.state.data.length > 0 ?


                        <View style={{flex:1}}>
                            <View>

                                <FlatList
                                    style={{ backgroundColor: '#F9F9F9', marginTop: 10 }}
                                    renderItem={this.renderItem}
                                    data={this.state.data} />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginStart: 20, marginEnd: 20, marginTop: 20 }}>
                                <Text style={styles.totalAmount}>Total Amount</Text>
                                <Text style={styles.totalAmountValue}>₹{this.state.totalAmount}</Text>
                            </View>
                            <View style={{position:'absolute',bottom:0}}>
                                <LargeButton
                                    backgroundColor={'#BA2026'}
                                    width={width - 40}
                                    height={50}
                                    margin={'5%'}
                                    textStyles={{ fontFamily: 'Montserrat-Regular' }}
                                    color={'#fff'}
                                    buttonText={'Checkout'}
                                    customClick={() => this.props.navigation.push('Checkout')}
                                />

                                <TouchableOpacity>
                                    <Text style={styles.continue}>Continue Shopping</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        :
                        <View>
                            <Image style={{width:'90%',height:250,marginTop:100,alignSelf:'center'}} resizeMode="contain" source={require('../../assets/img/empty_cart.png')}/> 
                            <Text style={styles.empty}>Cart is Empty</Text>
                            <Text style={styles.emptyItem}>You havent add any item yet</Text>
                        </View>
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
    empty:{
        textAlign:'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#000000',
        marginTop:40
    },
    emptyItem:{
        textAlign:'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#707070',
        marginTop:20
    },
    continue : {
        fontFamily: 'Montserrat-Medium',
        fontSize: 12,
        color: '#727C8E',
        textAlign:'center',
        marginBottom:20
    },
    totalAmount: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#707070'
    },
    totalAmountValue: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        color: '#000'
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
    count: {
        marginStart: 10,
        marginEnd: 10,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#707070'
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        elevation: 10,
        marginTop: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignSelf: 'center'
    },
    title: {
        marginTop: 20,
        marginStart: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    container: {
        flex: 1
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



export default connect(mapStateToProps, null)(Cart);