import * as React from 'react';
import { Button, View, StyleSheet, Text, SafeAreaView, Image, FlatList, ScrollView } from 'react-native';
import StatusBar from '../../components/statusBar';
import ToolBar from '../../components/toolbar'

import { connect } from "react-redux";


class AdditionalInfo extends React.Component {
    4

    constructor() {
        super()

        this.state = {
            resultsData: [{
                title: "Skin-Friendly",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            },
            {
                title: "No Chemicals",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            },
            {
                title: "Safe Use",
                description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
            }
            ],
            directionData: [
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                },
                {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                }, {
                    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                }
            ],
            faqData : [
                {
                    title: "Lorem ipsum dolor sit amet,",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                },
                {
                    title: "Lorem ipsum dolor sit amet,",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                },
                {
                    title: "Lorem ipsum dolor sit amet,",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                },
                {
                    title: "Lorem ipsum dolor sit amet,",
                    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
                },
            ]
        }
    }


    async componentDidMount() {
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9' }}>

                <ToolBar onPress={() => this.props.navigation.goBack()} title={`Additional Information`} />

                <ScrollView>


                    <View style={{ backgroundColor: '#F5F5F5', paddingBottom: 20 }}>
                        <Text style={styles.title}>Results Of PINK LIPSTICK</Text>

                        <FlatList
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ marginTop: 20, marginStart: 20, marginEnd: 20 }}>
                                        <Text style={styles.resultsTitle}>{item.title}</Text>
                                        <Text style={styles.resultsDescription}>{item.description}</Text>
                                    </View>

                                )
                            }}
                            data={this.state.resultsData} />

                    </View>

                    <View style={{ backgroundColor: 'white', paddingBottom: 20 }}>
                        <Text style={styles.skinTypes}>Skin Types</Text>
                        <Text style={styles.skinTypesDesc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.{"\n\n"}Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Text>
                    </View>

                    <View style={{ backgroundColor: '#F5F5F5', paddingBottom: 20 }}>
                        <Text style={styles.skinTypes}>Key Ingredients</Text>
                        <FlatList
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ marginTop: 30, marginStart: 20, marginEnd: 20 }}>
                                        <Image style={{ width: 70, height: 70 }} source={require('../../assets/img/maskGroup.png')} />
                                        <Text style={[styles.resultsDescription, { marginTop: 20 }]}>{item.description}</Text>
                                    </View>

                                )
                            }}
                            data={this.state.resultsData} />
                    </View>
                    <View style={{ backgroundColor: '#F3F5D1', paddingBottom: 20 }}>
                        <Text style={styles.skinTypes}>Directions of usage</Text>
                        <FlatList
                            style={{ marginTop: 10 }}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20, flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.step}>Step {index + 1}:</Text>
                                        <Text style={[styles.resultsDescription, { marginTop: 0, marginStart: 5 }]}>{item.title}</Text>
                                    </View>

                                )
                            }}
                            data={this.state.directionData} />
                    </View>

                    <View style={{ backgroundColor: '#F5F5F5', paddingBottom: 20 }}>
                        <Text style={styles.skinTypes}>FAQs</Text>
                        <FlatList
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ marginTop: 10, marginStart: 20, marginEnd: 20 }}>
                                        <Text style={styles.faqTitle}>{item.title}</Text>
                                        <Text style={styles.faqDescription}>{item.description}</Text>
                                    </View>

                                )
                            }}
                            data={this.state.faqData} />
                    </View>
                </ScrollView>

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
    faqTitle: {
        color: "#282828",
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        marginTop: 20,
    },
    faqDescription: {
        color: "#797979",
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        lineHeight:20,
        marginTop: 10,
    },
    step: {
        color: "#797979",
        fontFamily: 'Montserrat-Bold',
        fontSize: 10,
    },
    skinTypes: {
        color: "#01572C",
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        marginTop: 20,
        marginStart: 20
    },
    skinTypesDesc: {
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: 20,
        marginStart: 20
    },
    resultsDescription: {
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        fontSize: 10,
        marginTop: 5
    },
    resultsTitle: {
        color: "#000000",
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        marginTop: 20
    },
    title: {
        color: "#01572C",
        fontFamily: 'Montserrat-Regular',
        marginStart: 20,
        fontSize: 20,
        marginTop: 20
    },
    container: {
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



export default connect(mapStateToProps, null)(AdditionalInfo);