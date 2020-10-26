import * as React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import StarRating from 'react-native-star-rating';
import { connect } from "react-redux";

class AllReviews extends React.Component {

    constructor() {
        super()
        this.state = {
            filterArray:[
                {title : 'All'},
                {title : '5'},
                {title : '4'},
                {title : '3'},
                {title : '2'},
                {title : '1'},
                {title : '0'}
            ],
            data: [{
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 4
             },
             {
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 2
             },
             {
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 1.5
             }, {
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 4
             }, {
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 5
             }, {
                title: 'Its good service from, the packing nice and delivery on time …',
                starCount : 3
             }]
        }

    }

    async componentDidMount() {
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.push('OrderHistoryDetail')} activeOpacity={0.6} style={styles.card}>

            <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
               <Image resizeMode="contain" source={require('../../assets/img/Oval.png')} style={styles.icon} />
               <View>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  

                  <View style={{width:'20%'}}>
                  <StarRating
                     disabled={true}
                     emptyStar={'star-o'}
                     fullStar={'star'}
                     halfStar={'star-half-o'}
                     iconSet={'FontAwesome'}
                     containerStyle={{marginStart:10,marginTop:5}}
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

    renderItemFilter = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => { }} activeOpacity={0.6} style={[styles.card,{width:60,marginStart:5,marginEnd:5, height:20,alignItems:'center',justifyContent:'center'}]}>
                {
                    index != 0 && <Image  style={{height:15,width:15}} source={require('../../assets/img/star.png')}/>
                }
                <Text style={styles.all}>{item.title}</Text>

            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ToolBar onPress={() => this.props.navigation.goBack()} title={`All Review`} />

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[styles.all,{fontSize:14,marginStart:20,marginTop:5}]}>Filter</Text>
                    <FlatList
                        style={{  marginTop: 10,marginStart:10 }}
                        renderItem={this.renderItemFilter}
                        showsHorizontalScrollIndicator={false}

                        horizontal
                        data={this.state.filterArray} />
                </View>
                <FlatList
                    style={{ backgroundColor: '#F9F9F9', marginTop: 10 }}
                    renderItem={this.renderItem}
                    data={this.state.data} />
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
    all : {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#00000080',
        marginStart:5
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
    cardTitle: {
        marginStart: 10,
        fontSize: 14,
        width:'60%',
        lineHeight:30,
        fontFamily: 'Montserrat-Regular',
        color: '#00000080'
    },
    cardDescription: {
        marginStart: 10,
        fontFamily: 'Montserrat-Regular',
        marginTop: 5,
        fontSize: 10,
        color: '#707070'
    },
    icon: {
        height: 30,
        width: 30,
        marginTop:8
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



export default connect(mapStateToProps, null)(AllReviews);