import axios from 'axios';

// import action
// import { decodeJwt } from './jsonWebToken';

// import lib
import config from './config';
import setAuthToken from '../lib/setAuthToken';

import {
    SET_CURRENT_USER,
    TOKEN_ID,
    PAYMENT_MDL,
    TOKEN_BIT_ID,
    BIT_MODEL,
    REPORT_ID,
    REPORT_MODEL
} from '../constant';



// import constant
// import {
//     SET_CURRENT_USER
// } from '../constant';

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

export const setPayment = details => {
  return {
      type: TOKEN_ID,
      payload: details
  };
};

export const openModal = details => {
  return {
      type: PAYMENT_MDL,
      payload: details
  };
};

export const setBitPayment = details => {
  return {
      type: TOKEN_BIT_ID,
      payload: details
  };
};

export const openBitModal = details => {
  return {
      type: BIT_MODEL,
      payload: details
  };
};

export const setReport = details => {
  return {
      type: REPORT_ID,
      payload: details
  };
};

export const openReportModal = details => {
  return {
      type: REPORT_MODEL,
      payload: details
  };
};



export const login = async (data, dispatch) => {
    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.baseUrl}communityapi/login`,        
            data
        });
        
        localStorage.setItem('community_token', respData.data.token);
        //setAuthToken(respData.data.token)
       // decodeJwt(respData.data.token, dispatch)
        
        return {
            loading: false,
            active: respData.data.active,
            success: respData.data.success,
            token: respData.data.token
        }

    }
    catch (err) {
        var sendErr = '';
        if (err) {
            sendErr = err;
            if (err.response) {
                sendErr = err.response;
                if (err.response.data) {
                    sendErr = err.response.data;
                    if (err.response.data.errors) {
                        sendErr = err.response.data.errors;
                    }
                }
            }
        }
        return {
            loading: false,
            error: sendErr
        }
    }
}

export const register = async (data) => {

    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.baseUrl}communityapi/communityregister`,
            data
        });
        
        return {
            loading: true,
            result: respData.data.result
        }

    }
    catch (err) {
     
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

export const forgotpassword = async (data) => {

  try {
      let respData = await axios({
          'method': 'post',
          'url': `${config.baseUrl}communityapi/forgotpassword`,
          data
      });
      
      return {
          loading: true,
          result: respData.data.result
      }

  }
  catch (err) {
   
      return {
          loading: false,
          error: err.response.data.errors
      }
  }
}

export const logout = (history) => {
    localStorage.removeItem('community_token');
    history.push('/community')
    setAuthToken('')
  }


    
  export const currentUser = async (token, dispatch) => {


    // try {
    //   let respData = await axios({
    //     method: "get",
    //     'url': `${config.baseUrl}communityapi/currentUser`,
    //     headers: {
    //       Authorization: token,
    //     },
    //   });
     
    //   return true;
    // } catch (err) {
    //   return false;
    // }
  };


  export const createtopic = async (data) => {

    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.baseUrl}communityapi/createtopic`,
            'headers': {
              'Authorization': localStorage.community_token
          },
            data
        });
        
        return {
            loading: true,
            result: respData.data.result
        }

    }
    catch (err) {
     
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}


export const activateuser = async (data) => {
  try {
      let respData = await axios({
          'method': 'post',
          'url': `${config.baseUrl}communityapi/activateuser`,   
          'headers': {
              'Authorization': localStorage.user_token
          },        
          data: data
      });
      return {
          loading: false,
          result:respData
      }
  }
  catch (err) {
      return {
          loading: false,
          error: err.response.data.errors
      }
  }
}


export const updateFaq = async (data) => {

    try {
        let respData = await axios({
            'method': 'post',
            'url': `${config.baseUrl}adminapi/updateFaq`,
            headers: {
                'Authorization': localStorage.admin_token
            },
            data
        });
        return {
            loading: true,
            result: respData.data.categories
        }

    }
    catch (err) {
        return {
            loading: false,
            error: err.response.data.errors
        }
    }
}

export const getcategory = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/getcategory`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        result: respData.data.categories
    }
    } catch (err) {
      return false;
    }
  };


  export const lastesttopic = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/lastettopic`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };


  export const toptopic = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/toptopic`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };


  export const lastesttopicbycategory = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/lastettopic`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };


  export const toptopicbycategory = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/toptopic`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };

  export const topicdetail = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/topicdetails`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        result: respData.data.result,
        details: respData.data.details,
        count: respData.data.count,
        like: respData.data.like
    }
    } catch (err) {
      return false;
    }
  };

  export const paginatediscussion = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/next-details`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
       
      return {
        loading: true,
        details: respData.data.details,
        skip:respData.data.page,
    }
    } catch (err) {
      return false;
    }
  };

  export const replytopic = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/reply-topic`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
       
      return {
        loading: true,
        result: respData.data.result,
        count:respData.data.count,
    }
    } catch (err) {
      return false;
    }
  };

  export const likeCommunity = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/like-community`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
       
      return {
        loading: true,
        status: respData.data.status
    }
    } catch (err) {
      return false;
    }
  };

  export const discussionCategory = async () => {

    try {
      let respData = await axios({
        method: "get",
        'url': `${config.baseUrl}communityapi/discussion-category`,
        headers: {
          Authorization: localStorage.community_token,
        },
      });
      return {
        loading: true,
        categories: respData.data.categories
    }
    } catch (err) {
      return false;
    }
  };

  export const updateViewCount = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/update-view`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        categories: respData.data.categories
    }
    } catch (err) {
      return false;
    }
  };

  export const lastestdiscussion = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/latest-community`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list
    }
    } catch (err) {
      return false;
    }
  };

  export const topdiscussion = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/top-community`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list
    }
    } catch (err) {
      return false;
    }
  };
  
  export const comunityCategory = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/community-category`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list
    }
    } catch (err) {
      return false;
    }
  };

  export const latestComunityCategory = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/latest-category-community`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list
    }
    } catch (err) {
      return false;
    }
  };
  

  export const getTopices = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/topic-list`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list,
        skip:respData.data.skip,
    }
    } catch (err) {
      return false;
    }
  };

  export const mostLikes = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/most-likes`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        list: respData.data.list,
        skip:respData.data.skip,
    }
    } catch (err) {
      return false;
    }
  };

  export const communityProfile = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/get-community-profile`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };

  export const updateCommunity = async (data) => {

    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/update-community-profile`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        result: respData.data.result
    }
    } catch (err) {
      return false;
    }
  };

  export const newsletter = async (data) => {
    try {
      let respData = await axios({
        method: "post",
        'url': `${config.baseUrl}communityapi/newsletter`,
        headers: {
          Authorization: localStorage.community_token,
        },
        data
      });
      return {
        loading: true,
        result: respData.data,
        status: respData.data.success
    }
    } catch (err) {
      return false;
    }
}

  