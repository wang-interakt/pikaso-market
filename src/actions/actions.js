import axios from "axios";

export async function postMethod(baseUrl, data) {
    var getAuth = localStorage.getItem("jwtToken");
	try{
        var response = await axios.post(baseUrl, data,  {headers: {
            'Content-Type': 'application/json',
            'Authorization': getAuth
        }});
        return response;
    }catch(err){
        return "";
    }
}

export async function getMethod(baseUrl) {
    var getAuth = localStorage.getItem("jwtToken");
	try{
        var response = await axios.get(baseUrl,{headers: {
            'Content-Type': 'application/json',
            'Authorization': getAuth
        }});
        return response;
    }catch(err){
        return "";
    }
}