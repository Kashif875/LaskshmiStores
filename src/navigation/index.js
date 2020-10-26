import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import ScreenName from './screenNames';

import { Animated, Easing } from 'react-native'



export const MainStack = createStackNavigator(
    {
        HomeInitial: {
            screen: ScreenName.HomeInitial,
            navigationOptions: {
                header: null
            },
            path: 'HomeInitial'
        },
        CommonScreen: {
            screen: ScreenName.CommonScreen,
            navigationOptions: {
                header: null
            },
            path: 'CommonScreen'
        },
        MakeSuggestion: {
            screen: ScreenName.MakeSuggestion,
            navigationOptions: {
                header: null
            },
            path: 'MakeSuggestion'
        },
        OrderHistory: {
            screen: ScreenName.OrderHistory,
            navigationOptions: {
                header: null
            },
            path: 'OrderHistory'
        },
        Wishlist: {
            screen: ScreenName.Wishlist,
            navigationOptions: {
                header: null
            },
            path: 'Wishlist'
        },
        WriteReview: {
            screen: ScreenName.WriteReview,
            navigationOptions: {
                header: null
            },
            path: 'WriteReview'
        },
        WriteReview: {
            screen: ScreenName.WriteReview,
            navigationOptions: {
                header: null
            },
            path: 'WriteReview'
        },
        Notification: {
            screen: ScreenName.Notification,
            navigationOptions: {
                header: null
            },
            path: 'Notification'
        },
        AddShippingAddress: {
            screen: ScreenName.AddShippingAddress,
            navigationOptions: {
                header: null
            },
            path: 'AddShippingAddress'
        },
        ShippingAddress: {
            screen: ScreenName.ShippingAddress,
            navigationOptions: {
                header: null
            },
            path: 'ShippingAddress'
        },
        EditProfile: {
            screen: ScreenName.EditProfile,
            navigationOptions: {
                header: null
            },
            path: 'ShippingAddress'
        },
        OrderHistoryDetail: {
            screen: ScreenName.OrderHistoryDetail,
            navigationOptions: {
                header: null
            },
            path: 'OrderHistoryDetail'
        },
        AllProducts: {
            screen: ScreenName.AllProducts,
            navigationOptions: {
                header: null
            },
            path: 'AllProducts'
        },
        ProductDetail: {
            screen: ScreenName.ProductDetail,
            navigationOptions: {
                header: null
            },
            path: 'ProductDetail'
        }
        ,
        BeforeAfter: {
            screen: ScreenName.BeforeAfter,
            navigationOptions: {
                header: null
            },
            path: 'BeforeAfter'
        }
        ,
        AdditionalInfo: {
            screen: ScreenName.AdditionalInfo,
            navigationOptions: {
                header: null
            },
            path: 'AdditionalInfo',

        }
        ,
        AllReviews: {
            screen: ScreenName.AllReviews,
            navigationOptions: {
                header: null
            },
            path: 'AllReviews'
        },

        Checkout: {
            screen: ScreenName.Checkout,
            navigationOptions: {
                header: null
            },
            path: 'Checkout'
        },

        OrderSuccess: {
            screen: ScreenName.OrderSuccess,
            navigationOptions: {
                header: null
            },
            path: 'OrderSuccess'
        },

        SortingScreen: {
            screen: ScreenName.SortingScreen,
            navigationOptions: {
                header: null
            },

            path: 'SortingScreen',
            mode: 'modal',
            headerMode: 'none',
            cardStyle: {
                shadowColor: 'transparent'
            },
            transitionConfig: ({ scene }) => ({
                transitionSpec: {
                    duration: 0,
                    timing: Animated.timing,
                    easing: Easing.step0,
                },
                screenInterpolator: screenProps => {
                    return {}
                }
            })
        },

        FilterScreen: {
            screen: ScreenName.FilterScreen,
            navigationOptions: {
                header: null
            },
            path: 'FilterScreen'
        },

        ReadMore: {
            screen: ScreenName.ReadMore,
            navigationOptions: {
                header: null
            },
            path: 'ReadMore'
        }
    },
    {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTitleStyle: {
                fontWeight: '400',
                marginLeft: 0,
                flex: 1,
                textAlign: 'left',
            },
        },
        initialRouteName: "HomeInitial",
        cardStyle: {
            backgroundColor: 'white',
        },
        transitionConfig: () => ({
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [layout.initWidth, 0, 0]
                });
                const opacity = position.interpolate({
                    inputRange: [
                        index - 1,
                        index - 0.99,
                        index,
                        index + 0.99,
                        index + 1
                    ],
                    outputRange: [0, 1, 1, 0.3, 0]
                });
                return { opacity, transform: [{ translateX }] };
            }
        })
    }
);

export const LoginStack = createStackNavigator(
    {
        Splash: {
            screen: ScreenName.Splash,
            path: 'Splash',
            navigationOptions: {
                header: null
            },
        },
        Login: {
            screen: ScreenName.Login,
            path: 'Login',
            navigationOptions: {
                header: null
            },
        },
        Otp: {
            screen: ScreenName.Otp,
            path: 'Otp',
            navigationOptions: {
                header: null
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerBackTitle: null,
            headerTitleStyle: {
                fontWeight: '400',
                marginLeft: 0,
                flex: 1,
                textAlign: 'left',
            },
        },


        initialRouteName: "Splash",
        cardStyle: {
            backgroundColor: 'white'
        },
    }
);

export const AppNav = (props) => {
    return createAppContainer(createSwitchNavigator(
        {
            Login: LoginStack,
            Home: MainStack
        },
        {
            initialRouteName: props.initialRouteName,
        }
    ));
};
