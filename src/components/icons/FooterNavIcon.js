import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default class FooterNavIcon extends React.Component {

    render() {
        let iconStyle = this.props.iconStyle;
        let iconStyles = [{...styles.icon, ...iconStyle}]
        let textStyles = [styles.text]
        const focused = this.props.focused;
        if (focused) {
            iconStyles.push({tintColor: "#BA2026"});
            textStyles.push({color: "#BA2026"});
        }

        return (
            <View style={{width: '100%', paddingHorizontal: 15, alignItems: this.props.align}} accessibilityLabel={`home_footer_${this.props.text || 'icon'}`}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconWrap}>
                        <Image
                            style={[iconStyles]}
                            source={this.props.iconSource}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={textStyles}>{this.props.text}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

FooterNavIcon.defaultProps = {
    text: "",
    iconSource: null,
    focused: false,
    iconStyle: {}
};

const styles = StyleSheet.create({
    iconContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconWrap: {
        marginTop: 2.5
    },
    icon: {width: 20, height: 20},
    text: {
        marginTop:5
    }
})
