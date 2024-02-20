function Employee(props){
    return <li>Im {props.desgn}</li>
}

 export default function Information(){
let desgination=[
    
  { id:1 ,desg: "Manager"},
  {id:2,desg:"Junior Js developer"},
  {id:3,desg :"Senoir app developer"},
 { id:4, desg:"clerk"}
];
return (
    <>
     <h1>Welcome To Our Portal</h1>
<ul>
    {
        desgination.map((des) => <Employee desgn ={des.desg} />)
    }
</ul>
    </>

);


}