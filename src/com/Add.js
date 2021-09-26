import React ,{useState} from 'react'
import Header from './Header';

export default function Add({addtodo}) {
    const [desc, setDesc] = useState("");
    const [time, setTime] = useState("");

    function Submit()
    {
        addtodo(desc,time)
        setDesc("")
        setTime("")
        alert("Added")
    }

    return (
        <div>
            <Header />
            <h3>work</h3>
            <input type="text" value={desc} onChange={(e)=> {setDesc(e.target.value)}} required/>
            <h3>time</h3>
            <input type="time" value={time} onChange={(e)=> {setTime(e.target.value)}} required/>
            <button onClick={Submit}>submit</button>
        </div>
    )
}
