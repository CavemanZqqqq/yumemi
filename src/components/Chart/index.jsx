import React from 'react'
import { useState,useEffect } from 'react'
import Highcharts from 'highcharts'

import './index.less'
import { connect } from 'react-redux'

function Chart(props) {
  const [count,setcount] = useState(1)
  const [option,setOption] = useState({
    accessibility: {
      enabled: false
    },
    chart:{
      type:'line'
    },
    title:{
      text:'都道府県別の総人口推移グラフ'
    },
    xAxis: {
      title:{
        text:'年度'
      },
      categories:['1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2025','2030','2035','2040','2045']
    },
    yAxis:  {
      title:{text:'人口数'}

    },
    series:[
    ]
  })
  

  useEffect(()=>{
    var newOption = option
        newOption['series'] = update(props.cityName)
        setOption(newOption)
        var chart = Highcharts.chart('container',option)
 
  },[count])

  const update = (obj)=>{
    var res = []
    Object.keys(obj).forEach((key)=>{
      var tmp = {
        'name':key,
        'data':obj[key]
      }
      res.push(tmp)
    })
    return res;
  }

  function updateMap(){
    setcount(count+ 1)
  }

  return (
    <div>
        <button id='bn1' onClick={updateMap}>確認</button>
        <div className="chart-outer" id = 'container'>
         
        </div>
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

export default connect(mapStateToProps,mapDispatchToprops)(Chart)