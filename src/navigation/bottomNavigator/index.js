import React from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FooterNavIcon from "../../components/icons/FooterNavIcon";


import HomeComponent from '../../screens/home'
import MoreComponent from '../../screens/more'
import ProfileComponent from '../../screens/profile'
import SearchComponent from '../../screens/search'
import CartComponent from '../../screens/cart'

// REDUX START
const mapStateToProps = state => {
    return {
        
    }
};

const Actions = {
   
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
};

export const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);

export const More = connect(
    mapStateToProps,
    mapDispatchToProps
)(MoreComponent);

export const Profile = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileComponent);

export const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchComponent);





const HomeTabNavigator = createBottomTabNavigator(
    {
        Home: createStackNavigator({
            screen: Home
        }),
        Search: createStackNavigator({
            screen: Search
        }),
        Cart: createStackNavigator({
            screen: Cart
        }),
        Profile: createStackNavigator({
            screen: Profile
        }),
        More: createStackNavigator({
            screen: More,
            
        })
    },
    {
        defaultNavigationOptions: ({navigation, screenProps}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === "Home") {
                    return (
                        <FooterNavIcon
                            align={"flex-end"}
                            text={"Home"}
                            iconSource={require("../../assets/img/home.png")}
                            focused={focused}
                        />
                    );
                } else if (routeName === "Search") {
                    return (
                        <FooterNavIcon
                            align={"flex-start"}
                            text={"Search"}
                            iconSource={require("../../assets/img/menu_search.png")}
                            focused={focused}
                            isHome={!focused}
                        />
                    );
                }

                else if (routeName === "Cart") {
                    return (
                        <FooterNavIcon
                            align={"flex-start"}
                            text={"Cart"}
                            iconSource={require("../../assets/img/menu_cart.png")}
                            focused={focused}
                            isHome={!focused}
                        />
                    );
                }

                else if (routeName === "Profile") {
                    return (
                        <FooterNavIcon
                            align={"flex-start"}
                            text={"Profile"}
                            iconSource={require("../../assets/img/menu_profile.png")}
                            focused={focused}
                            isHome={!focused}
                        />
                    );
                }

                else if (routeName === "More") {
                    return (
                        <FooterNavIcon
                            align={"flex-start"}
                            text={"More"}
                            iconSource={require("../../assets/img/menu_more.png")}
                            focused={focused}
                            isHome={!focused}
                        />
                    );
                }

                
            }
        }),
        
        tabBarOptions: {
            showLabel: false,
            activeTintColor: "#BA2026",
            inactiveTintColor: "#727C8E",
            style: {
                backgroundColor: 'white',
                height: 66
                // borderWidth: 1,
            }
        }
    }
);


const HomeDrawerNavigation = createDrawerNavigator(
    {
        TabsNavigator: {
            screen: HomeTabNavigator,
           
        }
    }
);

export default HomeDrawerNavigation;
