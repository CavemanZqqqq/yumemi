import {useEffect, useState,useCallback } from 'react';
import { getPrefCode, getCityCode, getPopulation} from '../../api';
import React from 'react'
import Topbar from '../../components/Topbar'
import Checkboxs from '../../components/Checkboxs'
import Chart from '../../components/Chart'


import './index.less'
import { connect } from 'react-redux';

 function Layout(props) {
  
  const [prefCode,setPrefCode] = useState([])
  const [checkcity,setCheckcity] = useState(new Array(47).fill(0))
  const [pplist,setPplist] = useState([])
  useEffect(()=> {

      getPref()
      for (let i = 1; i < 48; i++) {
        getPopulations(i);
      }

  },[])

  const selectedCity = (pref)=>{//0 北海道
    let list = checkcity;
    let optionlist = []
    list[pref] = 1;
    setCheckcity(list);
    props.setCity([
      prefCode[pref].prefName,
      pplist[pref]
    ]);
  }

  const cancelCity = (pref)=>{
    let list = [];
    list = checkcity;
    list[pref] = 0;
    setCheckcity(list);
    //console.log(prefCode[pref].prefName)
    props.delCity(prefCode[pref].prefName)
    //console.log(checkcity)
    // setOption(optionlist)
  }

    async function getPopulations(prefcode){
      try{
        var data = await getPopulation(prefcode)
        //console.log(data.data[0].data)
        var tmpList = []
        data.data[0].data.forEach(element => {
          tmpList.push(parseInt(element.value) )
        });
        //console.log(tmpList)
        var tmp = pplist
        tmp.push(tmpList)
        setPplist(tmp);
      }catch(error) {
        console.log("error: ",error)
      }
    }


    async function getPref(){
        try{
          var data = await getPrefCode();
          setPrefCode(data);
          //console.log(prefCode)
        } catch (error) {
          console.log(error)
        }
    }
    


  return (
    <div className="warp" id='main'>
        {/* topBar */}
        <Topbar></Topbar>
        {/* checkbox */}
        <div className="checkBox_outer">
          <Checkboxs prefCodeTocity = {prefCode} select = {selectedCity} cancel = {cancelCity} check = {checkcity}/>
        </div>
        {/* router output */}
        <Chart checked = {checkcity} perfCodes = {prefCode}></Chart>
    </div>
    
  )
}

const mapStateToProps = (state)=>{
  return {
    cityName:state.city
  }
}

const mapDispatchToprops=(dispatch)=>{
  return {
    setCity:(name)=>{dispatch({type:'set_city',payload:name})},
    delCity:(name)=>{dispatch({type:'del_city',payload:name})}
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(Layout)