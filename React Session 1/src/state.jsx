import { useState } from "react";

function State () {
    const [name, setName] = useState("Karan");
    const [age, setAge] = useState(21);

    function text (e) {
        const val = e.target.value;
        setName(val);
    }

    return (
        <div>
            <p>My name is {name}, I am {age} years old.</p>
            <input value={name} onChange={text}></input>
            <button onClick={()=>setAge(age + 1)}>+</button>
        </div>
    )
}

export default State; 