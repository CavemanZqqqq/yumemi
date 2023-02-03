import React from 'react'
import './index.less'
import {v4} from 'uuid'
import { useState,useEffect } from 'react'



export default function Checkboxs(props) {
    
    const [prefCodeTocity,setPreCodeTocity] = useState([]);
    const [checked,setchecked] = useState(new Array(47).fill(0))
    useEffect(()=>{
        setPreCodeTocity(props.prefCodeTocity)
        setchecked(props.check)
    })


  return (
    <div className="checkbox-outer">
        {
            prefCodeTocity.map((item,index) => {
                return(
                  <div className= {item.prefName} key={v4()}>
                    <input type={'checkbox'} id={item.prefCode}  onChange={(e)=>{
                        let now = document.getElementById(item.prefCode)
                        if (now.checked) {
        
                            props.select(item.prefCode - 1)
                        } else {
        
                            props.cancel(item.prefCode - 1)
                        }
                    }}></input>
                    {item.prefName}
                  </div>
                )
              })

        }
    </div>
)
}
