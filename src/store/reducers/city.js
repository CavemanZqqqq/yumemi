/*
reducer
1.初始化数据
2.分支判断，处理数据
3.返回新状态
*/

function city(prevState = new Object(),action){
    let {type,payload} = action;
    let newState = prevState;

    switch (type) {
        case 'set_city':
            newState[payload[0]] = payload[1];

            return newState;
        case 'del_city':
            
            delete newState[payload];
            return newState;
            
        default:
            return prevState;   
    }
}

export default city;