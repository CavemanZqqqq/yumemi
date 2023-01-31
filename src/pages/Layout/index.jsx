import {useEffect, useState } from 'react';
import { getPrefCode } from '../../api';
import React from 'react'
import Topbar from '../../components/Topbar'
import Checkboxs from '../../components/Checkboxs'
import Chart from '../../components/Chart'


import './index.less'

export default function Layout() {
  
  const [prefCode,setPrefCode] = useState([])
  const [checkcity,setCheckcity] = useState(new Array(48).fill(0))
  let list = [];

  function selectedCity(pref){//0 北海道
    list = checkcity;
    list[pref] = 1;
    setCheckcity(list);
    for (let i = 0; i <= 48; i++) {
      if (checkcity[i] === 1) console.log(prefCode[i])
    }
  }

  function cancelCity(pref) {
    list = checkcity;
    list[pref] = 0;
    for (let i = 0; i <= 48; i++) {
      if (checkcity[i] === 1) console.log(prefCode[i])
    }
    setCheckcity(list);
  }

  useEffect(()=>
      getPref()
      //console.log(prefCode)
      // eslint-disable-next-line 
      ,[]);

  
    async function getPref(){
        try{
          var data = await getPrefCode();
          setPrefCode(data);
          console.log(prefCode)
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
          <Checkboxs prefCodeTocity = {prefCode} select = {selectedCity} cancel = {cancelCity}/>
        </div>
        {/* router output */}
        <div className="chartWindow">
          <Chart></Chart>
        </div>
    </div>
    
  )
}
