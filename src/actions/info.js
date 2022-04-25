import axios from "axios";
import config from './config';

export const BalUpdate = async (data) => {
        // var tokenCounts = data.tokenCounts;
        // var tokenOwner = data.tokenOwner;
        try {
                let respData = await axios({
                        'method': 'post',
                        'url': `${config.baseUrl}api/balupdate`,
                        data
                });
                return {
    
                        data: respData.data
                }
        }
        catch (err) {
                return {
                        // error: err.response.data
                }
        }
    }
    
    export const ownerAddMultipleSingle = async (data) => {
        try {
                let respData = await axios({
                        'method': 'post',
                        'url': `${config.baseUrl}api/ownerAddMultiple`,
                        data
                });
                return {
    
                        data: respData.data
                }
        }
        catch (err) {
                return {
                        // error: err.response.data
                }
        }
    }
    
    
    export const qtyUpdate = async (data) => {
        try {
                let respData = await axios({
                        'method': 'post',
                        'url': `${config.baseUrl}api/qtyUpdate`,
                        data
                });
                return {
    
                        data: respData.data
                }
        }
        catch (err) {
                return {
                        // error: err.response.data
                }
        }
    }
    
    export const bidDeleteForSale = async (data) => {
        try {
                let respData = await axios({
                        'method': 'post',
                        'url': `${config.baseUrl}api/deleteallmultibid`,
                        data
                });
                return {
    
                        data: respData.data
                }
        }
        catch (err) {
                return {
                        // error: err.response.data
                }
        }
    }


    export const deleteBidaccept = async (data) => {
       
        try {
                let respData = await axios({
                        'method': 'post',
                        'url': `${config.baseUrl}api/deletemultibid`,
                        data
                });
                return {

                        data: respData.data
                }
        }
        catch (err) {
                return {
                        // error: err.response.data
                }
        }
}