import * as React from 'react';
import { Button, View, TouchableOpacity, FlatList, StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import StatusBar from '../../components/statusBar';

import { connect } from "react-redux";
class MoreScreen extends React.Component {

    constructor() {
        super()
        this.state = {
            data: [
                {
                    title: 'Privacy Policy',
                    icon: require('../../assets/img/shield.png'),
                    status: 1
                },
                {
                    title: 'Legal Information',
                    icon: require('../../assets/img/check_form.png'),
                    status: 2
                },
                {
                    title: 'Make a Suggesstion',
                    icon: require('../../assets/img/suggest.png'),
                    status: 3
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
    }

    onPressItem = (status)=>{

        if(status == 3){
            this.props.navigation.push('MakeSuggestion');
        }else{
            this.props.navigation.push('CommonScreen',{status : status});
        }

    } 


    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=> this.onPressItem(item.status)} activeOpacity={0.6} style={styles.card}>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image resizeMode="contain" source={item.icon} style={styles.icon} />
                    <Text style={styles.cardTitle}>{item.title}</Text>

                </View>

                <Image style={{ height: 10, width: 10 }} source={require('../../assets/img/right_arrow.png')} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <View style={{ width: '100%', height: 60, backgroundColor: 'white', elevation: 10, marginTop: 25 }}>
                    <Text style={styles.title}>More</Text>
                </View>

                <FlatList
                    style={{ flex: 1, height: '100%', backgroundColor: '#F9F9F9', marginTop: 10 }}
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
    cardTitle: {
        marginStart: 10,
        fontFamily: 'Montserrat-Regular',
        color:'#01572C'
    },
    card: {
        flexDirection: 'row',
        width: '90%',
        padding: 15,
        justifyContent:'space-between',
        backgroundColor: 'white',
        elevation: 10,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#F9F9F9',
        flexDirection: 'column',
        flex: 1,
    },
    title: {
        marginTop: 20,
        marginStart: 20,
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
    },
    paragraph: {
        textAlign: 'center',
        marginTop: 0,
        fontSize: 24,
        color: 'black',
        fontWeight: '600'
    },

    icon: {
        height: 20,
        width: 20
    }
})



export default connect(mapStateToProps, null)(MoreScreen);