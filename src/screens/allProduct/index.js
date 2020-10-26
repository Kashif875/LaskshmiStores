import * as React from 'react';
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from "react-redux";
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const list = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/item2.png'),
        title: "ORIGINAL PRODUCT",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FREE SHIPPING",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/item3.png'),
        title: "FAST DELIVERY",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/item4.png'),
        title: "FAST DELIVERY",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FAST DELIVERY",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/product.png'),
        title: "FAST DELIVERY",
        subtitle: "Collection publication you like Pin important phrases Bookmark to read later"
    },
]


class AllProducts extends React.Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        this.state = {
            show: "grid",
        }
    }

    renderPage(image, index) {
        return (
            <View style={styles.banner} key={index}>

                <Image style={styles.img_grp} source={image.imageUrl}></Image>
                {/* <Text light  center style={styles.txt2}>{image.subtitle}</Text> */}


            </View>

        );
    }
    renderCard({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={0.6} style={{
                // width: '42%',
                // margin: '6%',
                // height: '50%',
                elevation: 5,
                borderRadius: 8,
                // padding:'2%',
                margin: 8,
                marginBottom: 10,
                backgroundColor: '#FFF',
                flexDirection: 'column',
            }} onPress={() => this.props.navigation.navigate("ProductDetail")}>

                {/* product image */}

                <Image source={require('../../assets/img/product.png')}
                    style={{ width: 155, height: 237, alignSelf: 'center', backgroundColor: '#fff' }} />

                {/* product Name */}

                <View style={{ marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
                    <Text style={{ color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }}>Summer Mirage</Text>

                    {/* product Category */}


                    <Text style={{ color: '#000000', fontSize: 9, fontFamily: 'Montserrat-Regular', marginTop: 3 }}>Naturals beauty</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: '#BA2026', fontSize: 14, marginTop: 12, fontFamily: 'Montserrat-Bold' }}>₹320.00</Text>

                        <Image source={require('../../assets/img/heart.png')}
                            style={{ width: 18, height: 16, resizeMode: 'contain', marginTop: 12 }} />

                    </View>
                </View>
                {/* product price and whistlist */}



            </TouchableOpacity>
        )
    }

    renderproduct(item) {
        return (


            <View key={item} style={{
                width: width / 2.3,
                height: '30%',
                flexDirection: 'column',
                marginTop: '3%',
                marginLeft: '5%',
                marginBottom: "2%"
            }}>

                {/* product image */}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                }} >
                    <ImageBackground source={require('../../assets/img/product.png')}
                        style={{ width: width / 2.3, height: 230, resizeMode: 'contain' }} >
                        <View style={{ backgroundColor: '#F3F5D1', width: width / 5.5, justifyContent: 'center', alignItems: 'center', marginTop: '4%' }}>


                            <Text style={{ color: '#01572C', paddingLeft: '3%', paddingRight: '3%', paddingTop: '3%', paddingBottom: '3%', fontSize: 13 }}>Latest

                        </Text>
                        </View>
                    </ImageBackground>


                </View>

                {/* product Name */}
                <View style={{
                    width: width / 2.3, paddingLeft: '7%', marginLeft: '3%', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    backgroundColor: '#fff',
                    marginTop: '10%',
                    elevation: 3,
                }}>
                    <View style={{ paddingTop: '3%', marginTop: '4%' }}>

                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: "bold" }}>Summer Mirage</Text>
                    </View>

                    {/* product Category */}

                    <View style={{ marginTop: '2%' }}>

                        <Text style={{ color: '#000000', fontSize: 13 }}>Naturals beauty</Text>
                    </View>

                    {/* product price and whistlist */}

                    <View style={{
                        flexDirection: 'row', width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start', marginTop: '5.5%', marginBottom: '5%'

                    }}>
                        <View style={{
                            margin: '1%',
                            flexDirection: 'row'

                        }} >

                            <Text style={{ color: '#BA2026', fontSize: 17, fontWeight: "bold" }}>₹320.00</Text>


                        </View>

                        <View style={{
                            margin: '2%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >

                            <Image source={require('../../assets/img/heart.png')}
                                style={{ width: 18, height: 18, marginRight: '10%', resizeMode: 'contain' }} />
                        </View>

                    </View>
                </View>
            </View>







        );
    }

    onfunction() {

        if (this.state.show == 'grid') {
            this.setState({
                show: 'list'
            })
        } else {
            this.setState({
                show: 'grid'
            })
        }
    }
    render() {
        return (
            //Header view
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />







                <View>
                    <View style={styles.header}>
                        <View style={styles.logo1} >

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                                <Image source={require('../../assets/img/arrow-left.png')} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.logo} >

                            <Image source={require('../../assets/img/logo.png')}
                                style={{ width: 70, height: 40, resizeMode: 'contain' }} />
                        </View>

                        <View style={styles.searchBox} >
                            <Image source={require('../../assets/img/search.png')}
                                style={{ width: 20, height: 20, }} />
                        </View>

                    </View>

                    <View style={[styles.header]}>
                        <View style={styles.logo1} >

                            <Text style={{ fontSize: 14, fontFamily: 'Montserrat-Bold' }}>All Products</Text>
                        </View>


                        <View style={styles.searchBox} >
                            <TouchableOpacity onPress={() => this.onfunction()}>
                                {this.state.show == 'grid' ?
                                    <Image source={require('../../assets/img/gird1.png')}
                                        style={{ width: 25, height: 25, resizeMode: 'contain' }} /> : <Image source={require('../../assets/img/list.png')}
                                            style={{ width: 25, height: 25, }} />}
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[styles.Row, { alignItems: 'center', justifyContent: 'space-around', margin: 5 }]}>
                        <TouchableOpacity onPress={() => this.props.navigation.push('SortingScreen')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/sort.png')} style={{ margin: 10, resizeMode: "contain", width: 20, height: 20 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular' }}>Sort By</Text>
                                <Text style={{ fontSize: 10, fontFamily: 'Montserrat-Regular', color: '#BEBEBE' }}>Popularity</Text>
                            </View>

                        </TouchableOpacity>
                        <View style={{ width: 0.5, backgroundColor: '#BEBEBE', height: 40 }} />
                        <TouchableOpacity onPress={() => this.props.navigation.push('FilterScreen')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/img/filter.png')} style={{ margin: 10, resizeMode: "contain", width: 20, height: 20 }} />
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Regular' }}>Filter</Text>
                                <Text style={{ fontSize: 10, fontFamily: 'Montserrat-Regular', color: '#BEBEBE' }}>Apply Filters</Text>
                            </View>

                        </TouchableOpacity>

                    </View>



                    {/* sub Header */}
                    <ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#fafafa' }} >


                        {this.state.show == 'grid' ?
                            <View>
                                <FlatList
                                    data={list}
                                    contentContainerStyle={{
                                        marginLeft: 5, marginRight: 5,
                                        alignItems: 'center'
                                    }}
                                    renderItem={({ item }) => (
                                        this.renderCard(item)
                                    )}
                                    //Setting the number of column
                                    numColumns={2}
                                    key={2}
                                    keyExtractor={(item, index) => index}
                                />
                            </View> : <View><FlatList
                                data={list}
                                contentContainerStyle={{ paddingBottom: 20, marginLeft: '3%', marginRight: '3%' }}
                                renderItem={({ item }) => (
                                    <View style={{ marginTop: '3%', backgroundColor: '#fff', elevation: 5, borderRadius: 10, marginLeft: 15, marginRight: 15 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image style={styles.img_grp4} source={item.imageUrl}></Image>
                                            <View style={{}}>
                                                <Text style={{ fontWeight: 'bold', margin: '8%', marginTop: 20, marginBottom: '2%', fontSize: 14, color: '#000', fontFamily: 'Montserrat-Regular' }}>Day Beauty Cream</Text>
                                                <Text style={{
                                                    margin: '2%', marginTop: 0, marginLeft: '8%', fontSize: 12, color: '#000',
                                                    fontFamily: 'Montserrat-Regular'
                                                }}>Naturals beauty</Text>
                                                <View style={{ flexDirection: 'row', marginStart: 10, justifyContent: 'space-between', width: '62%' }}>
                                                    <Text style={{ fontWeight: '900', marginLeft: '8%', fontSize: 14, color: '#BA2026', fontFamily: 'Montserrat-Regular' }}>₹499.00</Text>
                                                    <Image source={require('../../assets/img/heart.png')}
                                                        style={{ width: 18, height: 16, resizeMode: 'contain', marginLeft: 10 }} />
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                )}
                                //Setting the number of column
                                keyExtractor={(item, index) => index}
                            /></View>}




                        <View style={styles.bottom}>
                            <View style={[styles.Row]}>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/shopping-cart.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>Free Shipping</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>On Order Above Rs. 399</Text>
                                </View>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/money.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>COD Available</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>@ Rs. 40 On Per Order</Text>
                                </View>
                            </View>
                            <View style={styles.Row}>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/mail.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15, marginLeft: 0, marginRight: 0, textAlign: 'center' }]}>lakshmikrishnahomemade@gmail.com</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>Have query? Mail us.</Text>
                                </View>
                                <View style={styles.imgContainer}>
                                    <Image source={require('../../assets/img/phone.png')} />
                                    <Text style={[styles.smallText, { color: '#797979', fontFamily: 'Montserrat-Bold', fontSize: 8, marginTop: 15 }]}>+91 9344569982</Text>
                                    <Text style={[styles.smallText, { color: '#797979', margin: 0, fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>24/7 available</Text>
                                </View>
                            </View>
                        </View>



                        {/* below cursol View  */}
                        {/* <View style={styles.productView} > */}


                        {/* Product image and details */}



                        {/* Product Category*/}




                    </ScrollView>





                </View>




            </View>
        );
    }
}



const styles = StyleSheet.create({
   
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        flex: 1,
        height: '100%'
    },
    header: {
        marginTop: '9%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        alignItems: 'center',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    header1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: '#fff'

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
    logo: {
        margin: '5%',
        marginLeft: '-20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo1: {
        margin: '5%',
        marginTop: '1%',
        marginRight: '-5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchBox: {
        margin: '8%',
        marginTop: '0%',
        justifyContent: 'center',
        marginBottom: '2%',
        alignItems: 'center'
    },
    banner: {
        width: '85%',
        marginLeft: '8%',
        height: 175,
        backgroundColor: '#FFF',

    },

    productView: {
        width: '100%',
        height: '100%',
        marginTop: '5%',
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        backgroundColor: '#FFF',

    },
    banner: {
        width: width,
        height: 175,

    },
    img_grp: {
        // top: '30%',

        width: '100%',
        height: '90%',
    },
    image: {
        width: 125,
        height: 125,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#D7E0E6",
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%'
    },
    dot1: {
        backgroundColor: '#3087FD',
        borderColor: 'white',
    },
    dot: {
        alignItems: 'center',
    },
    bottom: {
        width: width,
        // bottom:0,
        // left:0,
        // right:0,
        height: 221,
        marginBottom: 10,
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imgContainer: {
        width: width / 2,
        height: height / 6,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Row: {
        flexDirection: 'row'
    },
    smallText: {
        fontSize: 13,
        margin: '2%'
    },
})

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(AllProducts);