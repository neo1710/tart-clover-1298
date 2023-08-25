import axios from 'axios';


export const loginReq=(data)=>(dispatch)=>{
dispatch({type:"LOGIN_REQUEST"});
axios.post(`https://ivory-ox-kilt.cyclic.cloud/user/login`,data).then((res)=>{
dispatch({type:"LOGIN_SUCCESS",payload:res.data.token});
localStorage.setItem("token",res.data.token);
localStorage.setItem("token",res.data.rtoken);
}).catch((err)=>{
dispatch({type:'LOGIN_FAILED'});
console.log(err);
})
}