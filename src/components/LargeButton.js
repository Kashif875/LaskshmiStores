import React,{Component} from 'react';
import { View, StyleSheet,TouchableOpacity,Text,Dimensions} from 'react-native';
import PropTypes from "prop-types";

const {width1,height1} = Dimensions.get('window');

export default class LargeButton extends Component{

    constructor(props){
        super(props);

    }

    getRef = (ref) => {
        if (this.props.getRef)
            this.props.getRef(ref)
    }

    render(){
        const { width,buttonText, height,color,margin, backgroundColor,customClick } = this.props;

        return(
            <TouchableOpacity
            onPress={customClick} 
            style = {[styles.container,{backgroundColor:backgroundColor,width:width,height:height,margin:margin,},this.props.styles]}>
                <Text style={[styles.textStyle,{color:color},this.props.textStyles]}>{buttonText}</Text>
              
            </TouchableOpacity>
        );
    }
     }

     const styles=StyleSheet.create({
        container:{
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'center',
            borderRadius:5
        
        },
        textStyle:{
          color:'#000',
          alignSelf:'center',
          margin:'5%',
          fontFamily:'Montserrat-Bold'  
        },
        leftTextStyle:{
          color:'#000',
          alignSelf:'center',
          margin:'8%',
          marginTop:'10%',
          fontSize: 39,
          fontWeight:'bold',
          fontFamily:'Montserrat-Bold'  
 
        },
        smallText:{
          color:'#000',
          textAlign:'center',
          marginLeft:'8%',
          marginRight:'8%',
          marginBottom:'3%',
          fontSize: 20,
          fontWeight:'bold',
          fontFamily:'Montserrat-Bold'  
 
        }
      })
      LargeButton.defaultProps = {
    width: width1-60,
    height:height1/18,
    color:'#fff',
    backgroundColor: "#BA2026",
    margin:'2%',
    buttonText:'Next',
    // fontWeight:'200',
}

LargeButton.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    margin: PropTypes.string,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    // fontWeight:PropTypes.string,
    color:PropTypes.string,
    backgroundColor: PropTypes.string,
    buttonText: PropTypes.string,


};

