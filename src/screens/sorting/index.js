import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'
import { connect } from "react-redux";


class SortingScreen extends React.Component {


    constructor() {
        super()
        this.state = {
            data : [{
                title : 'Default',
                status : true
            },
            {
                title : 'Popularity',
                status : false
            },
            {
                title : 'Newness',
                status : false
            },
            {
                title : 'Price - Low to High',
                status : false
            },
            {
                title : 'Price - high to Low',
                status : false
            }]
        }
    }
    async componentDidMount() {
    }

    onPressItem = (i)=>{
        let list = [...this.state.data]

        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.status = false 
        }

        list[i].status = true

        this.setState({
            data : list
        },()=>{
            this.props.navigation.goBack()
        })
    }

    renderItem = ({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>this.onPressItem(index)} style={{flexDirection:'row',marginTop:
            30,justifyContent:'space-between',marginEnd:20,marginStart:20}}>
                <Text style={styles.title}>{item.title}</Text>
                {item.status ? <Image source={require('../../assets/img/radio_on.png')} style={{height:20,width:20}}/> : <View style={styles.radioOff}/>}
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{}}>

                <ToolBar onPress={() => this.props.navigation.goBack()} title={`Sort By`} />

                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                />


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
    radioOff : {
        width:20,
        height:20,
        borderWidth:2,
        borderColor:'#BA2026',
        borderRadius:50
    },
    title: {
        fontSize: 14,
        width: '70%',
        fontFamily: 'Montserrat-Regular',
        color: '#707070'
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



export default connect(mapStateToProps, null)(SortingScreen);