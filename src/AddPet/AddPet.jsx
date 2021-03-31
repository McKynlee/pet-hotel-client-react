import React, { useState } from 'react';

function AddPet() {

  const [petName, setPetName] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [ownerName, setOwnerName] = useState('');






  const handleSubmit = () => {
    console.log("submit clicked")
  }





  return (
    <>
      <div>
        <h2>Add Pet</h2>
        <form>

          <input
            type="text"
            placeholder="Pet Name"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
          />

          <input
            type="text"
            placeholder="Pet Color"
            value={petColor}
            onChange={(event) => setPetColor(event.target.value)}
          />
          <input
            type="text"
            placeholder="Pet Breed"
            value={petBreed}
            onChange={(event) => setPetBreed(event.target.value)}
          />

          <select
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
          >
            <option>Name 1</option>
            <option>Name 2</option>
            <option>Name 3</option>
          </select>

          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>


    </>
  )
}


export default AddPet;