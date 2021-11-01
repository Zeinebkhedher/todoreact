import React from 'react'
import InputTodo from './InputTodo'
function List(props) {
    return (
        <div>
            {
                props.itemList.map(itemObj =>{
                  
                        <div className="Item">
                            <p>{itemObj.item}</p>
                            <button>Delete</button>

                        </div>
                    


                }

                )
            }
            
        </div>
    )
}

export default List
