import React, {Component} from "react";
import {Animated, Dimensions, Modal, PanResponder, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import FooterPlusIcon from "../../components/icons/FooterPlusIcon";
import {getInset} from 'react-native-safe-area-view'

const {width} = Dimensions.get("screen");
const bottomOffset = getInset('bottom');
const topOffset = getInset('top');

class BottomSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animatedHeight: new Animated.Value(0),
            pan: new Animated.ValueXY(),
        };

        this.expanding = false;

        this.createPanResponder(props);
    }

    componentDidMount() {
        this.open();
    }

    setModalVisible(visible) {
        const {height, minClosingHeight, duration, onClose, onOpen} = this.props;
        const {animatedHeight, pan} = this.state;
        if (visible) {
            Animated.timing(animatedHeight, {
                toValue: height,
                duration
            }).start(() => {
                if (typeof onOpen === "function") onOpen();
            });
        } else {
            Animated.timing(animatedHeight, {
                toValue: minClosingHeight,
                duration: duration / 2
            }).start(() => {
                pan.setValue({x: 0, y: 0});
                this.setState({
                    animatedHeight: new Animated.Value(0)
                }, () => {
                    this.forceUpdate();
                });

                if (typeof onClose === "function") onClose();
            });
        }
    }

    createPanResponder(props) {
        const {closeOnDragDown, height} = props;
        const {pan} = this.state;
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => closeOnDragDown,
            onPanResponderMove: (e, gestureState) => {
                if (gestureState.dy > 0) {
                    Animated.event([null, {dy: pan.y}])(e, gestureState);
                } else {
                    this.expandFull();
                }
            },
            onPanResponderRelease: (e, gestureState) => {
                if (height / 4 - gestureState.dy < 0) {
                    this.setModalVisible(false);
                } else {
                    Animated.spring(pan, {toValue: {x: 0, y: 0}}).start();
                }
            }
        });
    }

    expandFull = () => {
        const {maxHeight, duration} = this.props;
        if (!this.expanding && this.state.animatedHeight._value < maxHeight) {
            this.expanding = true;
            Animated.timing(this.state.animatedHeight, {
                toValue: maxHeight,
                duration: duration / 2
            }).start(() => {
                this.expanding = false;
            });
        }
    };

    open = () => {
        this.setModalVisible(true);
    };

    close = () => {
        this.setModalVisible(false);
    };

    render() {
        const {closeOnPressMask, children} = this.props;
        const {animatedHeight, pan} = this.state;
        const panStyle = {
            transform: pan.getTranslateTransform()
        };

        return (
            <View style={[styles.wrapper]}>
                <TouchableOpacity
                    style={styles.mask}
                    activeOpacity={1}
                    onPress={() => (closeOnPressMask ? this.close() : {})}
                />
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[panStyle, styles.container, {
                        height: animatedHeight
                    }]}
                >
                    {children}
                </Animated.View>

                <FooterPlusIcon
                    customStyle={styles.closeButton}
                    iconSource={require("@assets/icons/white_close.png")}
                    onPress={this.close}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    mask: {
        flex: 1,
        backgroundColor: "transparent"
    },
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: 0,
        maxHeight: "100%",
        overflow: "hidden",
    },
    closeButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        width: 58,
        height: 58,
        bottom: bottomOffset - 9.5,
        left: (width / 2) - (58 / 2),
        right: 0,
        shadowOpacity: 0.4,
        shadowRadius: 16,
        shadowColor: '#333',
        elevation: 2,
        shadowOffset: {
            height: 2,
            width: 2
        },
    }
});

BottomSheet.defaultProps = {
    animationType: "none",
    height: 260,
    minClosingHeight: 0,
    duration: 300,
    closeOnDragDown: false,
    closeOnPressMask: true,
    customStyles: {},
    onClose: null,
    children: <View/>
};

export default BottomSheet;
