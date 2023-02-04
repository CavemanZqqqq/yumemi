
import Axios from "axios";
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
import qs from 'query-string'

const service = Axios.create({
    baseURL:'https://opendata.resas-portal.go.jp',
    headers:{
        "X-API-KEY":"qGf8nhtLtHZXOJl3ESn7spOW1cz009mnGs4fwHnG"
    },
    timeout:50000
})


service.interceptors.request.use(config=>{
    nProgress.start();
    if(config.method==='post') {
        config.data=qs.stringify(config.data)
    }
    return config;
})


service.interceptors.response.use(res=>{   
    nProgress.done();
    return res.data.result;    
},err=>{
    return Promise.reject(err);
})


export default service