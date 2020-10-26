import React, {Component} from 'react';
import {BackHandler, Dimensions, Keyboard, SafeAreaView, StyleSheet, View} from "react-native";
import BottomSheet from "./bottomSheet";

let $this;

class BottomSheetModal extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress() {
        if ($this.modals.length) {
            let topModal = $this.modals[$this.modals.length - 1];
            if (topModal) {
                if (topModal.onBackClose()) {
                    // alert("Comes");
                    topModal.close();
                }
                return true;
            }
        }
        return false;
    }

    static show = (children, onBackClose = true) => {

        const {height} = Dimensions.get("screen");

        class ModalComponent {

            onBackClose = () => {
                return onBackClose;
            };

            close = () => {
                this.bottomSheet.close();
            };

            expandFull = () => {
                this.bottomSheet.expandFull();
            };

            setOnOpenListener = (listener) => {
                this.openListener = listener;
            };

            getComponent = () => {
                return <BottomSheet
                    ref={ref => this.bottomSheet = ref}
                    closeOnDragDown={true}
                    height={height - 120}
                    maxHeight={height}
                    duration={600}
                    children={children}
                    onClose={() => {
                        BottomSheetModal.hide(this);
                    }}
                    onOpen={() => {
                        this.openListener && this.openListener();
                    }}
                />;
            };
        }

        let comp = new ModalComponent();

        Keyboard.dismiss();
        $this.modals.push(comp);
        $this.forceUpdate();

        return comp;
    };

    static hide(comp) {
        if (comp) {
            let index = $this.modals.indexOf(comp);
            if (index > -1) {
                $this.modals.splice(index, 1);
                $this.forceUpdate();
            }
        } else {
            $this.modals.pop();
            $this.forceUpdate();
        }
    }

    static hideAll() {
        $this.modals = [];
        $this.forceUpdate();
    }

    constructor(props) {
        super(props);
        $this = this;

        this.modals = [];
    }

    render() {
        if (!this.modals.length) {
            return null;
        }

        return (
            <View style={styles.wrapper}>
                {this.modals[this.modals.length - 1].getComponent()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 0,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        flex: 1
    }
});

export default BottomSheetModal;
