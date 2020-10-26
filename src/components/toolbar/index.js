import React from 'react';
import { Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native';

export default class ToolBar extends React.Component {

    render() {


        return (
            <View style={{ width: '100%', backgroundColor: 'white', flexDirection: 'row', alignItems: 'center',alignContent:'center',  height: 100, elevation: 10 }}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image source={require('../../assets/img/arrow_left_green.png')} style={{ height: 25, width: 25, marginTop: 20,marginStart:20 }} />

                </TouchableOpacity>
                <Text style={{ fontFamily: 'Montserrat-Regular', marginTop: 20, marginStart: 10,fontSize:16 }}>{this.props.title}</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconWrap: {
        marginTop: 2.5
    },
    icon: { width: 20, height: 20 },
    text: {
        marginTop: 5
    }
})
