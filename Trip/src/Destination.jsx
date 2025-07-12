import React, { useEffect, useState } from "react";

export function Destination({id,name,onRemove}){
    const [data,setData] = useState(null);

    useEffect(()=>{
            setData({info:`Information about ${name}`});
    },[name]);
    return(
        <div>
            <h4>{name}</h4>
            {data?<p>{data.info}</p>:<p>loading...</p>}
            <button onClick={()=>onRemove(id)}>Remove</button>
        </div>
    );

}