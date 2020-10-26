import React, {
    Component,
  } from 'react';
  import {
    View,
    StatusBar,
    Dimensions,Platform,StyleSheet
  } from 'react-native';
  import PropTypes from "prop-types";

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 10 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


  const MyStatusBar = ({backgroundColor,barStyle, ...props}) => (
    // <View style={[styles.statusBar,{ backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} barStyle={barStyle} {...props} />
    // </View>
  );
const styles = StyleSheet.create({
    statusBar: {
      height: STATUSBAR_HEIGHT,
    }
})
MyStatusBar.defaultProps = {
    backgroundColor:'#F3F5D1',
    barStyle:'dark-content'
}

MyStatusBar.propTypes = {
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.string,
};
  export default MyStatusBar;
  