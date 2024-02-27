import { useEffect, useState } from "react";


export default function ExmpuseeffectFetch() {
  const [users, setUsers] = useState([])
  const [status, setStatus] = useState(false)

  const fetchURL = "https://jsonplaceholder.typicode.com/todos"

  useEffect(() => {
    console.log('Hello', status)
    if (status && users.length === 0) {
      fetchData();
    }
  }, [status])

  const fetchData = async () => {
    try {
      const response = await fetch(fetchURL)
      // console.log({ response })
      const jsonData = await response.json()
      setUsers(jsonData)
      // console.log({ json })
    } catch (error) {
      console.log("error", error)
    }
  }

  let usersList = users.map((item, index) => (
    <div key={index}>
      <p>{item.id} {item.title} {item.completed}</p>
    </div>
  ))

  return (
    <>
    <button onClick={() => setStatus(true)}>Call API</button>
    {usersList}
    </>
  )
}

// export function Exmpuseeffect() {
//   let initData = [
//     {
//       id: "1",
//       productname: "abc",
//       price: "200"
//     },
//     {
//       id: "2",
//       productname: "bbbb",
//       price: "400"
//     },
//     {
//       id: "3",
//       productname: "ccc",
//       price: "300"
//     },
//     {
//       id: "4",
//       productname: "ddd",
//       price: "500"
//     },
//   ]
//   let [count, setCount] = useState(0);
//   let [calculation, setCalculation] = useState(0);

//   const [products, setProducts] = useState([])
//   const [name, setName] = useState("React")

//   console.log("products", products)

//   let Add = () => {
//     setCount((count) => count + 1);
//   }
//   // useEffect(() => {
//   //     setCalculation(()=>count*2);     
//   //   }, [count]);

//   useEffect(() => {
//     setProducts(initData)
//   }, [])

//   let productsData = products.map((item, index) => (
//     <div key={index}>
//       <p>{item.id} {item.productname} {item.price}</p>
//     </div>
//   ))

//   const nameChange = () => {
//     setName("Python")
//     // setProducts(initData)
//   }

//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={Add}>+</button>
//       <p>Calculation:{calculation}</p>
//       {productsData}
//       {name}
//       <button onClick={nameChange}>change Name</button>
//     </>
//   );
// }