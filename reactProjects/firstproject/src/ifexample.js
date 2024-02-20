function Admin(){
    return <h1>This is Admin Component</h1>
}
function User(){
    return <h1>This is User Component </h1>
}

export function Check(props){
    let isUser =props.isUser;
    if(isUser){
        return <Admin/>
    }
    return <User/>

}