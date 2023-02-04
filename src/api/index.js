import Axios from "./ajax";
import base from './base'


export const getPrefCode = ()=> Axios.get(base.getPrefectures)

export const getCityCode = (params)=>Axios.get(base.getPrefName,{params:{
    perfCode:params
}})

export const getPopulation = (param)=>Axios.get(base.getPopulation,{
    params:{
        cityCode : '-',
        prefCode : param
    }
})