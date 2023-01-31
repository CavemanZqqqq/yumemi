import React from 'react'
import './index.less'
import {v4} from 'uuid'

export default function index(props) {
    const prefCodeTocity = props.prefCodeTocity;


  return (
    <div className="checkbox-outer">
        {
            prefCodeTocity.map(item => {
                return(
                  <div className= {item.prefName} key={v4()}>
                    <input type={'checkbox'} id={item.prefCode} onChange={(e)=>{
                        let now = document.getElementById(item.prefCode)
                        if (now.checked) {
                            console.log("fan", item)
                            props.select(item.prefCode - 1)
                        } else {
                            //console.log(item)
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
