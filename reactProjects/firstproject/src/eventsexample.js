 export function Calculator(){
    let add=(a,b)=>{
        alert("Addition is " +(a+b));
    }
    return(<button onClick={() => add(3,4)}>Perform adding here</button>

    );
    
}