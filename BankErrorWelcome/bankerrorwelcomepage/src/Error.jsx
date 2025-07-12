import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Error() {
  const location = useLocation();
  const navigate = useNavigate();

  const errors = location.state?.errors||{};
  
  return (
    <>
        <div>Form Submission Error</div>
        <div>
          {Object.keys(errors).length===0 ?(
            <p>Unknown Error is occured</p>
          ):(
            <ul>
              {Object.entries(errors).map(([field,message])=>(
                <li key={field}>
                  <strong>{field}:</strong>{message}
                </li>
              ))}
            </ul>
          )}
        </div>

    </>
);
}
