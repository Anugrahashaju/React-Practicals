import React,{useState} from "react";
import { Destination } from "./Destination";


export function Trip(){
    const[destinations,setDestinations] = useState([
        {id:1,name:"paris"},
        {id:2,name:"New york"},
        {id:3,name:"Tokyo"}
    ]);

    const [newDestination,setNewDestination] = useState('');

    //adding new destination
    const addDestination = ()=>
    {
        if(newDestination.trim()==='')return;
        const newId = Date.now();
        setDestinations([...destinations,{id:newId,name:newDestination}]);
        setNewDestination('');
    };

    const removeDestination=(id)=>{
        setDestinations(destinations.filter(destinations=>destinations.id !== id));
    }

    return(
        <div>
            <h2>Trip itenerary</h2>
            <input 
            type="text" 
            name="destination"
            placeholder="Add Destination"
            value={newDestination}
            onChange={(e)=>setNewDestination(e.target.value)} 
            />

            <button onClick={addDestination}>Add</button>

            {destinations.length===0?(
                <p>no destination added</p>
            ):(
                destinations.map(destinations=>(<Destination
                key={destinations.id}
                id={destinations.id}
                name={destinations.name}
                onRemove={removeDestination}/>
            ))
            )}
        </div>
    );
}