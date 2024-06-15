import React, { useEffect, useState } from 'react'

function Todo() {

    const [inputText,setInputText]= useState('')
    const [lists,setLists]=useState(()=>{
      const saveTodo = localStorage.getItem('todos')
      return saveTodo?  JSON.parse(saveTodo): []
    })

    const changeHandler = (e)=>{
         setInputText(e.target.value)
    }
    const clickHandler = (inputText)=>{
      if(inputText == ""){
        alert("Please type Something in Todo ")
      }else{

      
          setLists(list=>[...lists,inputText])
          
          setInputText("")

        }
    }
    const del= (index)=>{
      
      let updateList = lists.filter((e,i)=>{
      return i !== index
      })
      
      setLists(updateList)

    }
   useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(lists))
   },[lists])   
  return (
    <div className='container'>
        <h1>ToDo-List</h1>
      <div className="todo-container">
        
        <div className="input-container">
            <input value={inputText} onChange={changeHandler} type="text" className='input-box' />
            <button onClick={()=>clickHandler(inputText)} className='btn'>Add</button>
        </div>
        <div className="lists-container">
          <ol>{lists.length<1 && <p>Nothing To Show</p>}
           {lists.map((list,index)=> 
        <li key={index}> {index+1}: {list} <button onClick={()=>del(index)} className='btn del'><i className="fa-solid fa-trash"></i></button></li>
        )}
        </ol>
        </div>
      </div>
    </div>
  )
}

export default Todo
