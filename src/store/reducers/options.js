
function options(preState,action){
    let {type,payload} = action;
    let newState = preState;

    switch(type) {
        case 'add_option':
            newState.push(payload);
            return newState;
        case 'del_option':
            newState = [];
            preState.forEach(element => {
                if (element !== payload) {
                    newState.push(element)
                }
            });
            return newState;
        default:
            return newState;
    }
}
export default options