export const addmoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"deposit",
            payload:amount
        })
    }

}
export const differmoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}