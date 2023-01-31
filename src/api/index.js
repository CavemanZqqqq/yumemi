import Axios from "./ajax";
import base from './base'
import Qs from 'qs'
import { parse, stringify } from 'qs'

export const getBanner = (cityCode,preCode,addArea) => {
    
    Axios.get(base.banner,{params:{
        cityCode,
        preCode:
        addArea
        } } 
       ).then((res)=>console.log(res,'22222'))
}   
    

export const getPrefCode = ()=> Axios.get(base.getPrefectures)
