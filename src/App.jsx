import { useState } from "react";

const App=()=>{

  const [input,setInput]=useState("")
  const [list,setList]=useState([])
  
  const handleInputAdd=(e)=>{
    console.log(e.target.value);
    setInput(e.target.value)
  }
  const handleAdd=()=>{
    if(input.trim()===""){
      return 
    }
    const updatedValue=[...list,input]
    setList(updatedValue)
   
    setInput("")
    console.log(updatedValue)
  }

  const handleRemove=(index)=>{
    const updatedList=list.filter((ele,id)=>{
     return  index!=id
    })
    setList(updatedList)
  }

  return (
    <div>
      <div>
        <h2>To Do App</h2>
        <input type="text" value={input} onChange={handleInputAdd}/>
        <button onClick={handleAdd}> Add</button>
      </div>
      <ul>
        {
          list.map((ele,index)=>{
            return <li key={index}>{ele} <button onClick={()=>handleRemove(index)}>Remove</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default App;


// import { useState } from 'react'
// import './App.css'

// const App=()=>{
//   const [add,setAdd]=useState("")
//   const [list,setList]=useState([])

//   const handleOnChange=(e)=>{
//     setAdd(e.target.value)
//   }

//   const handleAdd=()=>{
//     if(add.trim()===""){//to remove the white space
//       return
//     }
//     setList([...list,add])
//     setAdd("")
//   }

//   const handleDelete=(i)=>{
//     const updatedList=list.filter((ele,id)=>{
//       return i!=id
//     })
//     setList(updatedList)
//   }

//   return (
//   <>
//   <h2>Todo Apps</h2>
//   <input type="text" placeholder='Enter Todo' value={add} onChange={handleOnChange}/>
//   <button onClick={handleAdd}>Add</button>
//   <div>
//     <ul>
//       {
//         list !=[] && list.map((ele,i)=>{
//           return <li key={i}>{ele} <button onClick={()=>handleDelete(i)}>Delete</button></li> 
//         })
//       }
//     </ul>
//   </div>
//   </>
//   )
// }

// export default App



