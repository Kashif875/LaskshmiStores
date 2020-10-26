import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements";
import Carousel from 'react-native-banner-carousel';
import md5 from 'md5';
import { connect } from "react-redux";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const image = { uri: "https://reactjs.org/logo-og.png" };
import StatusBar from '../../components/statusBar';

const list = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "ORIGINAL PRODUCT",
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "FREE SHIPPING",
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "FAST DELIVERY",
    },
]

const list1 = [
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "ORIGINAL PRODUCT",
    },
    {
        id: 1,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "FREE SHIPPING",
    },
    {
        id: 2,
        title: "Carousel",
        description: "A handy component for React Native",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "FAST DELIVERY",
    },
    {
        id: 0,
        bgcolor: "#569BE0",
        imageUrl: require('../../assets/img/homeon.png'),
        title: "ORIGINAL PRODUCT",
    },
]


class HomeScreen extends React.Component {
    static navigationOptions = { header: null };

    constructor(props) {
        super(props);
        //initial value of Text
        this.state = {
            text: 'LKNaturals@TT)(*&^!@2020',
        };
    }

    renderPage(image, index) {
        return (
            <View style={[styles.banner,{marginBottom:20}]} key={index}>

                <Image style={styles.img_grp} source={image.imageUrl}></Image>
                {/* <Text light  center style={styles.txt2}>{image.subtitle}</Text> */}


            </View>

        );
    }


    renderPage2(image, index) {
        return (
            <ImageBackground source={require('../../assets/img/backr.png')} style={{
                resizeMode: "cover",
                justifyContent: "center", height: 500
            }}>
                <View
                    style={{
                        width: '100%',
                        height: 400,
                        justifyContent: 'center', alignItems: 'center'
                    }}>






                    <Text style={{ color: '#01572C', fontSize: 20, fontFamily: 'Montserrat-Regular' }} >Real People, Real Results</Text>

                    <Image source={require('../../assets/icon.png')}
                        style={{ width: 150, height: 150, marginTop: '5%' }} />

                    <Text style={{ width: '80%', marginTop: '5%', textAlign: 'center', fontFamily: 'Montserrat-Regular', fontSize: 10 }} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text>


                    <Text style={{ color: '#01572C', fontSize: 20, marginTop: '5%', fontFamily: 'Montserrat-Bold', fontSize: 14 }} >Parvathy</Text>
                    <Text style={{ color: '#01572C', fontStyle: 'italic', fontFamily: 'Montserrat-Italic' }} >Video Jockey</Text>

                </View>
            </ImageBackground>
        );
    }

    renderPage3(image, index) {
        return (
            <View style={{
                width: '42%',
                margin: '3%',
                marginLeft: '5%',
                height: '50%',
                flexDirection: 'column',
            }}>

                {/* product image */}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                }} >
                    <Image source={require('../../assets/One.png')}
                        style={{ width: 160, height: 117, borderRadius: 10, resizeMode: 'contain' }} />
                </View>




                {/* Product type */}
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', }}>
                    <View style={{ marginTop: '5%', }} >

                        <Text style={{ color: '#797979', fontFamily: 'Montserrat-Regular', fontSize: 10 }}>
                            Lipstick
           </Text>
                    </View>

                    <View style={{
                        margin: '5%',

                    }} >
                        <Text style={{ color: '#797979', fontFamily: 'Montserrat-Regular', fontSize: 10 }}>
                            By Janny Joe
               </Text>
                    </View>

                </View>






                {/* product Name */}

                <View style={{ marginTop: '1%', }}>

                    <Text style={{ color: '#01572C', fontSize: 10, fontFamily: 'Montserrat-Bold' }}>The Cosmetics World</Text>
                </View>

                {/* product Category */}

                <View style={{ marginTop: '2%', }}>

                    <Text style={{ color: '#797979', fontSize: 8, fontFamily: 'Montserrat-Regular' }}>Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei.Et</Text>
                </View>



                <View style={{ marginTop: '5%', flexDirection: 'row', alignItems: 'flex-start', }}>
                    <View style={{ marginTop: '5%', }} >

                        <View
                            style={{
                                backgroundColor: '#000',
                                height: 2,

                                width: 15
                            }}
                        />
                    </View>

                    <TouchableOpacity onPress={()=> this.props.navigation.push('ReadMore')} style={{
                        marginLeft: '5%'

                    }} >
                        <Text style={{ color: '#000', textTransform: 'uppercase', fontFamily: 'Montserrat-Regular', fontSize: 10 }}>
                            Read More
               </Text>
                    </TouchableOpacity>

                </View>


            </View>
        );
    }



    singleItem = (id) => {
        this.props.navigation.navigate('ProductDetail')
    }





    renderCard({ item, index }) {
        return (
            <TouchableOpacity style={{
                elevation:10,
                borderRadius:10,
                marginTop:10,
                width:'45%',
                marginStart:10,
                marginEnd:10,
                backgroundColor: '#FFF',
                flexDirection: 'column',
            }} onPress={() => this.singleItem(item.id)}>

                {/* product image */}

                <Image source={require('../../assets/img/product.png')}
                    style={{ width: 155, height: 237,borderRadius:10, alignSelf: 'center', backgroundColor: '#fff' }} />

                {/* product Name */}

                <View style={{ marginTop: 20, marginLeft: 15, marginRight: 15, marginBottom: 20 }}>
                    <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 10, fontFamily: 'Montserrat-Bold' }}>Summer Mirage</Text>

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



    onLoginPress() {


        const formData = new FormData()
        formData.append('auth_token', md5(this.state.text));
        var json = JSON.stringify({
            'auth_token': md5(this.state.text),
        });

        fetch("http://dev.technotackle.com/lkn/wp-json/all_banners", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'multipart/form-data'
            },
            body: json,
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                })

                console.log(json);

                console.log(formData + "");

                console.log(this.state.data);

                let v = this.state.data.message;


            })
            .catch((error) => {
                console.log(error);
            });

    }
    render() {
        return (
            //Header view
            <View style={styles.container}>
                <StatusBar backgroundColor='#F3F5D1' barStyle='dark-content' />
                <View style={styles.header}>
                    <View style={styles.logo} >

                        <Image source={require('../../assets/img/logo.png')}
                            style={{ width: 75, height: 50, resizeMode: 'contain' }} />
                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={styles.searchBox} >
                        <Image source={require('../../assets/img/search.png')}
                            style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>

                </View>





                {/* sub Header */}
                <ScrollView
                // style={{ width: '100%', height: '100%' }} 
                >


                    {/* cursol view */}
                    <View >
                        <Carousel
                            autoplay
                            autoplayTimeout={5000}
                            loop
                            pageIndicatorContainerStyle={styles.dot}
                            index={0}
                            pageIndicatorStyle={{ backgroundColor: '#16191C26' }}
                            activePageIndicatorStyle={styles.dot1}
                            pageSize={width}>
                            {list.map((image, index) => this.renderPage(image, index))}
                        </Carousel>

                    </View>





                    {/* below cursol View  */}
                    <View style={styles.productView} >


                        {/* Deals and see more view */}

                        <View style={styles.header}>
                            <View style={styles.logo} >

                                <Text style={{ fontSize: 14, marginLeft: '5.5%', fontFamily: 'Montserrat-Regular' }}>


                                    DAILY DEALS!
                           </Text>
                            </View>

                            <View style={{
                                margin: '5%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('AllProducts')}>
                                    <Text style={{ color: "#BA2026", fontSize: 12, marginRight: '5.5%', fontFamily: 'Montserrat-Medium' }}>
                                        SEE ALL
                               </Text>
                                </TouchableOpacity>
                            </View>

                        </View>



                        <FlatList
                            data={list1}
                            contentContainerStyle={{ paddingBottom: 20, width:'90%',alignSelf:'center' }}
                            renderItem={this.renderCard.bind(this)}
                            numColumns={2}

                            key={2}
                            keyExtractor={(item, index) => index}
                        />

                        {/* Product Category*/}

                        <View style={{
                            margin: '2%',
                            flexDirection: 'row',
                        }} >



                            {/* One  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/hair.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Hair Care
                                        </Text>
                            </View>



                            {/* Two  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/body.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Body Care
                                        </Text>
                            </View>

                            {/* Three  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/face.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Face Care
                                        </Text>
                            </View>



                        </View>

                        <View style={{
                            margin: '2%',
                            flexDirection: 'row',
                        }} >



                            {/* One  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/hair.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Hair Care
                                        </Text>
                            </View>



                            {/* Two  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/body.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Body Care
                                        </Text>
                            </View>

                            {/* Three  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/face.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Face Care
                                        </Text>
                            </View>



                        </View>


                        <View style={{
                            margin: '2%',
                            flexDirection: 'row',
                        }} >



                            {/* One  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/hair.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Hair Care
                                        </Text>
                            </View>



                            {/* Two  */}
                            <View style={{ marginLeft: '5%', justifyContent: 'center', alignItems: 'center' }} >
                                <Avatar
                                    size={95}

                                    rounded
                                    source={require('../../assets/img/body.png')}

                                />

                                <Text style={{ marginTop: '8%', color: '#000000', fontSize: 10, fontFamily: 'Montserrat-Bold' }} >
                                    Body Care
                                        </Text>
                            </View>

                            {/* Three  */}




                        </View>


                        <View>







                            <Carousel
                                autoplay
                                autoplayTimeout={5000}
                                loop
                                //showsPageIndicator={styles.dot2}
                                pageIndicatorContainerStyle={styles.dott}
                                index={0}
                                pageIndicatorStyle={{ backgroundColor: '#16191C26' }}
                                activePageIndicatorStyle={styles.dot1}
                                pageSize={width}>
                                {list.map((image, index) => this.renderPage2(image, index))}
                            </Carousel>
                            {/* <View style={styles.banner}></View> */}






                        </View>




                        {/* Deals and see more view */}

                        <View style={styles.header}>
                            <View style={styles.logo} >

                                <Text style={{ fontSize: 14, marginLeft: '5.5%', fontFamily: 'Montserrat-Regular' }}>


                                    Latest Essentials                        </Text>
                            </View>

                            <View style={{
                                margin: '5%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')}>
                                    <Text style={{ color: "#BA2026", fontSize: 12, marginRight: '5.5%', fontFamily: 'Montserrat-Medium' }}>
                                        SEE ALL
                               </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {/* Product image and details */}

                        <FlatList
                            data={list1}
                            contentContainerStyle={{ paddingBottom: 20, marginLeft: '3%', marginRight: '3%' }}
                            renderItem={this.renderCard.bind(this)}
                            numColumns={2}
                            key={2}
                            //Setting the number of column
                            keyExtractor={(item, index) => index}
                        />




                        {/* Find Your Beauty Match and see more view */}

                        <View style={styles.header}>
                            <View style={styles.logo} >

                                <Text style={{ fontSize: 14, marginLeft: '5.5%', fontFamily: 'Montserrat-Medium', }}>


                                    Find Your Beauty Match         </Text>
                            </View>

                            <View style={{
                                margin: '5%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} >
                                <TouchableOpacity
                                // onPress={()=>this.props.navigation.navigate('Product')}
                                >
                                    <Text style={{ color: "#BA2026", fontSize: 12, marginRight: '5.5%', fontFamily: 'Montserrat-Medium' }}>
                                        SEE ALL
                               </Text>
                                </TouchableOpacity>
                            </View>

                        </View>



                        {/* Product image and details */}

                        {/* <View style={styles.header}>

                           

                        </View> */}
                        <FlatList
                            data={list1}
                            contentContainerStyle={{ paddingBottom: 20, marginLeft: '3%', marginRight: '3%' }}
                            renderItem={this.renderPage3.bind(this)}
                            numColumns={2}
                            key={2}
                            //Setting the number of column
                            keyExtractor={(item, index) => index}
                        />



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


                    </View>

                </ScrollView>






            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F5D1',
        flexDirection: 'column',
        flex: 1,
        // height: '100%'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        shadowColor: "#000",
        height: 65,
        marginTop: '9%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

    },
    logo: {
        margin: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBox: {
        margin: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Row: {
        flexDirection: 'row'
    },
    imgContainer: {
        width: width / 2,
        height: height / 6,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner: {
        width: '85%',
        marginLeft: '8%',
        height: 175,
        backgroundColor: '#FFF',

    },

    productView: {
        // width: '100%',
        // height: '100%',
        marginTop: '5%',
        borderTopEndRadius: 35,
        borderTopStartRadius: 35,
        backgroundColor: '#FAFAFA',


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
        backgroundColor: '#00000040',

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
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 20,
        justifyContent: 'space-around'
    },
    dott1: {
        backgroundColor: '#3087FD',
        borderColor: 'white',
    },
    dott: {
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const mapStateToProps = state => {
    return {
        userData: state.user.userData
    }
};

export default connect(mapStateToProps, null)(HomeScreen);