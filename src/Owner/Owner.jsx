/* Import Libraries */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Owner() {
  useEffect(() => {
    dispatch({ type: "FETCH_OWNERS" });
  }, []);

  const dispatch = useDispatch();
  const [newOwner, setNewOwner] = useState("");
  const owners = useSelector((store)=>store.owners)
  console.log('owners is', owners)
  console.log('owners at ', owners[0][1])
  console.log('Mac is', owners[1][1])
  //let owner1= owners[0]
  //let name = owner1[0]
  //console.log('name is', name)
  const addOwner = (event) => {
    event.preventDefault();
    console.log("*** <Owner /> -> addOwner() ***");
    console.log("newOwner:", newOwner);
    dispatch({
      type: "CREATE_OWNER",
      payload: {
        name: newOwner,
      },
    });
  };

  return (
    <>
      <h2>Add Owner</h2>
      <form onSubmit={addOwner}>
        <input
          type="text"
          placeholder="Owner Name"
          value={newOwner}
          onChange={(event) => setNewOwner(event.target.value)}
        />
        <button> Submit </button>
      </form>
      
        
            
        
     <div>
      <ul>

        {owners.map((owner) => {
    return(
      <li key={owner[0]}>
      <h2>Name of the owner: {owner[1]}  </h2>
      </li>
      )
        })}
       </ul>
            
       </div>
    </>
  );
}

export default Owner;
