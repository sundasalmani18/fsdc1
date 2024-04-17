import { useMemo, useRef, useState } from "react";


 export default function Searchaddtask(){
   const [items,setItems]=useState([]);
   const [query ,setQuery]=useState("");
  const inputRef= useRef();

  const filtereditems=useMemo(()=>{
    // console.log(query)
  return items.filter(item=>{
    return item.toLowerCase()
    .includes(query.toLowerCase())


})

 },[items,query])

     function addItems(e){
      e.preventDefault();
       const value = inputRef.current.value
      if( value === "")return
        setItems(prev => {
            return [ ...prev,value]
        })
        inputRef.current.value=""
    }


  //  function onChnageItem(event){
  //   const value=event.target.value
  //   setItems(prev=>{ 
  //    return prev.filter(item=>item.toLowerCase().includes(value.toLowerCase()))

  //   })

  //  }

    return(
  <>
<label> Search Items  </label>
<input type ="search" value={query} onChange={e=>setQuery(e.target.value)}/><br/><br/>
<form  onSubmit={addItems}>
  <label>Add New Item </label>
  <input type ="text" ref={inputRef}/>
  <button type="submit" >Add</button>
  </form>
  <h5>New Items </h5>
  {filtereditems.map(item=>(
<div>{item}</div>
))}
  </>
     );
}
 