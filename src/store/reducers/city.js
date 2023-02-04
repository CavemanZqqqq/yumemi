 // eslint-disable-next-line 
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