export function loginValidate() {

    if(localStorage && localStorage.community_token){

        return true;

    }else{
        return false;
    }
}