import React, { useState } from 'react'
import './Reminderself.css'

function Reminderself() {
    const [reminder, setreminder] = useState([])
    const [newReminder,setNewReminder]= useState("")

    const handletextvalue=(e)=>{
        setNewReminder(e.target.value)

    }

    const handlebtnclick=()=>{
        (newReminder.trim()==="")?(window.confirm("Please enter the reminder")):
        setreminder([...reminder,newReminder])
        setNewReminder("")
    }
    const handledeletebtn=(index)=>{
       setreminder(reminder.filter((item,itemindex)=>itemindex!==index)
       ) 
    }

  return (
    <div className='container'>
        <h1>Reminder App</h1>

        <div className='input-container'>
            <input type='text' value={newReminder} placeholder='Enter the reminder' onChange={handletextvalue}></input>
            <button className='addreminder-btn' onClick={handlebtnclick}>Add Reminder</button>
        </div>
        {
            reminder.length>0?(<ul>
                {
                    reminder.map((reminder1,index)=>
                    
                        <li>
                            {reminder1}
                            <button className='delete-btn'onClick={()=>handledeletebtn(index)}>Delete</button>
                        </li>
                    
                    )
                    
                }
            </ul>
            ):
            <p>No Reminder</p>
        
        }

    </div>
  )
}

export default Reminderself