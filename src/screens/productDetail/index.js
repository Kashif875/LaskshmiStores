import * as React from 'react';
import { Button, Dimensions, FlatList, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LargeButton from '../../components/LargeButton';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-banner-carousel';
import StatusBar from '../../components/statusBar';
import { connect } from "react-redux";


const { width, height } = Dimensions.get('window');
const list = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/cream.png'),
        title: "ORIGINAL PRODUCT",
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/cream.png'),
        title: "FREE SHIPPING",
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/cream.png'),
        title: "FAST DELIVERY",
    },
]
class ProductDetail extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = {
            starCount: 4.1,
            combodata: [
                {
                    id: 0,
                    title: "DAY BEAUTY CREAM",
                    borderval: false
                },
                {
                    id: 1,
                    title: "DAY BEAUTY CREAM + DEAD SEA MUD SOAP",
                    borderval: true

                },

            ]
        };
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    // singleItem=(id)=>{
    //     this.props.navigation.navigate('SingleProduct')
    //  }
    renderCard({ item, index }) {
        return (
            <TouchableOpacity
            // onPress={()=>this.singleItem(item.id)}
            >
                <View style={{
                    // width: '42%',
                    // margin: '6%',
                    // height: '50%',
                    // padding:'2%',
                    margin: 8,
                    backgroundColor: '#FFF',
                    flexDirection: 'column',
                }}>

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



                </View>
            </TouchableOpacity>
        )
    }





    renderPage(image, index) {
        return (
            <View key={index}>
                <Image source={image.imageUrl}></Image>
                {/* <Text light  center style={styles.txt2}>{image.subtitle}</Text> */}
            </View>

        );
    }
    renderComboRow({ item, index }) {
        return (
            <View style={[styles.Row, { justifyContent: 'space-between', alignItems: 'center' }]}>

                <TouchableOpacity
                    style={{ height: height / 18, width: item.borderval ? width / 1.2 : width / 2, marginRight: item.borderval ? null : 10, backgroundColor: item.borderval ? '#fff' : '#01572C', borderWidth: item.borderval ? 1 : 0, borderColor: item.borderval ? '#01572C' : '#01572C', alignItems: 'center', justifyContent: 'center', borderRadius: 10, }}>
                    <Text style={{
                        alignSelf: 'center', paddingLeft: '3%', paddingRight: '3%',
                        //   margin:'5%',
                        fontFamily: 'Montserrat-Bold', color: item.borderval ? '#B7B7B7' : '#fff'
                    }}>{item.title}</Text>

                </TouchableOpacity>
                {/* <TouchableOpacity
            style = {{height:height/18,borderRadius:7,backgroundColor:'#fff',borderWidth:1,borderColor:'#01572C',fontSize:10,fontweight:'bold',}}>
                <Text style={{  alignSelf:'center',
        //   margin:'5%',
          fontFamily:'Montserrat-Bold',color:'#B7B7B7'}}>{item.title}</Text>
              
            </TouchableOpacity> */}
                {/* <LargeButton
                                    backgroundColor={'#01572C'}
                                    // width={width / 2 - 40}
                                    // height={height / 18}
                                    margin={'0%'}
                                    color={'#fff'}
                                    buttonText={item.title}
                                    borderRadius={7}
                                    textSize={8}
                                //   customClick={ () => this.props.navigation.navigate('Otp3')}
                                />
                                <LargeButton
                                    backgroundColor={'#fff'}
                                    // width={width / 2}
                                    // height={height / 18}
                                    margin={'0%'}
                                    color={'#B7B7B7'}
                                    buttonText={item.title}
                                    borderRadius={7}
                                    borderColor={'#01572C'}
                                    borderWidth={1}
                                    textSize={8}
                                /> */}
            </View>

        )
    }
    render() {
        return (
            //Header view
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />

                <View style={styles.header}>
                    <View style={styles.backBtn}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../assets/img/arrow-left.png')} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo} >

                        <Image source={require('../../assets/img/logo.png')}
                            style={{ width: 75, height: 50, resizeMode: 'contain' }} />
                    </View>

                    <View style={styles.searchBox} >
                        <Image source={require('../../assets/img/search.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </View>
                </View>
                <ScrollView >
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        //showsPageIndicator={styles.dot2}
                        pageIndicatorContainerStyle={styles.dot}
                        index={0}
                        pageIndicatorStyle={{ backgroundColor: '#16191C26' }}
                        activePageIndicatorStyle={styles.dot1}
                        pageSize={width}>
                        {list.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                    <View style={styles.contents}>
                        <Text style={styles.bigText}>Day Beauty Cream</Text>
                        <View style={[styles.Row, { alignItems: 'center' }]}>
                            <StarRating
                                disabled={false}
                                emptyStar={'star-o'}
                                fullStar={'star'}
                                halfStar={'star-half-o'}
                                iconSet={'FontAwesome'}
                                maxStars={5}
                                starSize={16}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                fullStarColor={'#BA2026'}
                            />
                            <Text style={{ margin: '2%' }}>{this.state.starCount}</Text>
                            <Text style={[styles.smallText, { color: '#7E7E7E', fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>(4450 Ratings)</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("WriteReview")}>
                                <Text style={[styles.smallText, { color: '#3BB8EA', fontFamily: 'Montserrat-Regular', fontSize: 8 }]}>Write Review</Text></TouchableOpacity>
                        </View>

                        <View style={styles.Row}>
                            <Text style={[styles.mediumText, { fontSize: 10, color: '#7E7E7E', marginRight: 0, fontFamily: 'Montserrat-Medium' }]}>MRP:</Text>
                            <Text style={[styles.mediumText, { fontSize: 10, color: '#7E7E7E', fontFamily: 'Montserrat-Medium', textDecorationLine: 'line-through', textDecorationStyle: 'solid' }]}>₹599</Text>
                            <Text style={[styles.mediumText, { color: '#01572C', fontFamily: 'Montserrat-Bold', fontSize: 14 }]}>₹499.00</Text>
                            <Text style={[styles.mediumText, { color: '#BA2026', fontFamily: 'Montserrat-Regular', fontSize: 14 }]}>25%off</Text>
                        </View>
                        <Text style={[styles.smallText, { color: '#BEBEBE', margin: '0%', fontFamily: 'Montserrat-Medium', fontSize: 6 }]}>Inclusive of all taxes</Text>
                        <View style={styles.comboSection}>
                            <Text style={{ color: '#000', marginBottom: '2%', fontFamily: 'Montserrat-Regular', fontSize: 14 }}>Combo *</Text>
                            <FlatList
                                data={this.state.combodata}
                                contentContainerStyle={{ justifyContent: 'space-between', alignItems: 'center' }}
                                renderItem={this.renderComboRow.bind(this)}
                                keyExtractor={(item, index) => index.toString}
                                horizontal={true}
                                // style={{margin:'1%'}}
                                showsHorizontalScrollIndicator={false}

                            />

                            {/* <View style={[styles.contents, { marginLeft: 20, marginTop: 0 }]}> */}

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("AdditionalInfo")}>
                                <View style={[styles.Row, { justifyContent: 'space-between', alignItems: 'center', padding: '5%', marginRight: 20, backgroundColor: '#fff', height: 45, marginTop: 10 }]}>
                                    <Text style={[styles.mediumText, { color: '#282828', fontFamily: 'Montserrat-Regular', fontSize: 14 }]}>Additional information</Text>
                                    <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={require('../../assets/img/right-arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("AllReviews")}>
                                <View style={[styles.Row, { justifyContent: 'space-between', alignItems: 'center', padding: '5%', marginRight: 20, backgroundColor: '#fff', height: 45, marginTop: 10 }]}>
                                    <Text style={[styles.mediumText, { color: '#282828', fontFamily: 'Montserrat-Regular', fontSize: 14 }]}>Reviews (5)</Text>
                                    <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={require('../../assets/img/right-arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => this.props.navigation.push("BeforeAfter")} style={[styles.Row, { justifyContent: 'space-between', alignItems: 'center', padding: '5%', marginRight: 20, backgroundColor: '#fff', marginTop: 12, height: 45 }]}>
                                <Text style={[styles.mediumText, { color: '#282828', fontFamily: 'Montserrat-Regular', fontSize: 14 }]}>Before after</Text>
                                <Image style={{ resizeMode: 'contain', width: 15, height: 15 }} source={require('../../assets/img/right-arrow.png')} />
                            </TouchableOpacity>
                            <View style={[styles.Row, { justifyContent: 'space-between', alignItems: 'center', margin: '3%', marginLeft: 0 }]}>
                                <Text style={[styles.mediumText, { color: '#000', fontFamily: 'Montserrat-Regular', fontSize: 14 }]}>Related Product</Text>
                                <TouchableOpacity><Text style={[styles.mediumText, { color: '#BA2026', fontFamily: 'Montserrat-Regular', fontSize: 10 }]}>SEE ALL</Text></TouchableOpacity>
                            </View>
                            <FlatList
                                data={list}
                                renderItem={this.renderCard.bind(this)}
                                keyExtractor={(item, index) => index.toString}
                                horizontal={true}
                                // style={{margin:'1%'}}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        {/* </View> */}

                    </View>
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
                </ScrollView>
                <View style={styles.fixedBottom}>
                    <View style={styles.box}>
                        <Image source={require('../../assets/img/redheart.png')} />
                    </View>
                    <LargeButton
                        backgroundColor={'#BA2026'}
                        width={width / 1.3}
                        height={45}
                        margin={'0%'}
                        color={'#fff'}
                        buttonText={'Add to Bag'}
                        borderRadius={7}
                        textSize={17}
                        customClick={() => this.props.navigation.navigate('CheckOut1')}
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        flex: 1,
        height: '100%'
    },
    comboSection: {
        margin: '3%',
        marginLeft: '0%'
    },
    backBtn: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        height: 65,
        marginTop: '9%'
    },
    contents: {
        marginTop: 15,
        marginLeft: 25
    },
    Row: {
        flexDirection: 'row'
    },
    smallText: {
        fontSize: 13,
        margin: '2%'
    },
    box: {
        width: 45,
        height: 45,
        borderWidth: 1,
        borderColor: '#BA2026',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // margin:'5%',
        marginLeft: '0%'
    },
    bigText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    mediumText: {
        fontSize: 18,
        margin: '2%',
        marginLeft: '0%'
    },
    logo: {
        margin: '2%',
        backgroundColor: '#fff',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    searchBox: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    banner: {
        width: '85%',
        marginLeft: '8%',
        height: 175,
        backgroundColor: '#FFF',

    },
    bottom: {
        width: width,
        // bottom:0,
        // left:0,
        // right:0,
        height: 221,

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
    fixedBottom: {
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '3%',
        marginLeft: '0%',
        marginRight: '0%',
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row'
    }
})


const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(ProductDetail);