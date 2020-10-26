import axios from 'axios';
import NetInfo from "@react-native-community/netinfo";
import ModalAlert from '../utils/modal'
import Config from 'react-native-config';
import {getFormatterError} from '../utils/getFormatterMessage'
import { Platform, AsyncStorage } from 'react-native';

import {getToken} from '../redux/client'

export function getBaseUrl(status){
    return "";
}






const request = async function (options, raiseFullError = false) {


   return AsyncStorage.getItem('token').then(res=>{
        const client = axios.create({
            baseURL: getBaseUrl(true),
            
            headers: {
               "Accept":"application/json",
               "device-type": Platform.OS,
               "Authorization": "Bearer "+res
            },
        });
    
        console.log("Base URL::::>",getBaseUrl(true))
        console.log("Request Data:::>",options)
        // console.log("Request Token:::>","Bearer "+res)
    
    
        const onSuccess = function (response) {
            console.log("Response Data:::>",response)
            if(response.data.status){
                return Promise.resolve(response.data);
            }else{
                return Promise.reject(response);
            }
        };
    
        const onError = function (error) {
            console.log(error)
            
            return Promise.reject(error.data);
        };

        return NetInfo.fetch().then(state => {
            if (state.isConnected) {
                return client(options).then(onSuccess).catch(onError);
            } else {
                ModalAlert.error('Please check your internet connection.')
                return
            }
        });
    })

    

   
};




export function cancelAll(message) {
    source.cancel(message);
    source = axios.CancelToken.source();
}

// export default request;
export default request;


