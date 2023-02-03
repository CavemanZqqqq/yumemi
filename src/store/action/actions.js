

//option
export const setOption = (index)=>({type:'add_option',payload:index})

//设置当前城市
export const setCityAction= (name)=>({type:'set_city',payload:name})


export const delCity = (index)=>({type:'del_city',payload:index})