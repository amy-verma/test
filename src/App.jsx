import { useState } from 'react'
import './App.css'

const App=()=>{
  const [add,setAdd]=useState("")
  const [list,setList]=useState([])

  const handleOnChange=(e)=>{
    setAdd(e.target.value)
  }

  const handleAdd=()=>{
    if(add.trim()===""){//to remove the while space
      return
    }
    setList([...list,add])
    setAdd("")
  }

  const handleDelete=(i)=>{
    const updatedList=list.filter((ele,id)=>{
      return i!=id
    })
    setList(updatedList)
  }

  return (
  <>
  <h2>Todo Apps</h2>
  <input type="text" placeholder='Enter Todo' value={add} onChange={handleOnChange}/>
  <button onClick={handleAdd}>Add</button>
  <div>
    <ul>
      {
        list !=[] && list.map((ele,i)=>{
          return <li key={i}>{ele} <button onClick={()=>handleDelete(i)}>Delete</button></li> 
        })
      }
    </ul>
  </div>
  </>
  )
}

export default App
