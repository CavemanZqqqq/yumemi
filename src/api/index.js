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
//https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=11362&prefCode=11
//https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=11362&prefCode=11