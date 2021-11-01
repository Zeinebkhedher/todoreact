import React,{useState} from 'react'
import List from './List'



function InputTodo() {

    
const [input,setInput]= useState()
const [itemList,setItemList]=useState([])


const handleSubmit=(e)=>{
    e.preventDefault()
    setInput("")
}


const handleChange=(e)=>{
    setInput(e.target.value)
}

const handleAdd=()=>{
    setInput([...itemList,{item:input,key:Date.now()}])
    setItemList("")
}
    return (
        <form onSubmit={handleSubmit}>
          <div>  
            <input type="text"
                placeholder="add one task"
                value={input}
                onChange={handleChange}
            />

            <button onClick={handleAdd}>Add</button>
      </div>
      <div className="list">
            <List itemList={itemList}/>
      </div>
        </form>

    )
}

export default InputTodo; 
