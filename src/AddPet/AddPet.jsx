import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddPet() {
  useEffect(() => {
    getOwners();
  }, []);

  const dispatch = useDispatch();

  const [petName, setPetName] = useState('');
  const [petColor, setPetColor] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [ownerName, setOwnerName] = useState(0);

  const owners = useSelector((store) => store.owners);

  /* 
    Function gets list of all owners from db for 
    dropdown population
  */
  const getOwners = () => {
    dispatch({
      type: 'FETCH_OWNERS',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit clicked');

    dispatch({
      type: 'ADD_PET',
      payload: {
        owners_id: ownerName,
        name: petName,
        breed: petBreed,
        color: petColor,
      },
    });
  };

  return (
    <>
      <div>
        <h2>Add Pet</h2>
        <form onSubmit={handleSubmit}>
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
            <option value="1">Owner 1</option>
            <option value="2">Owner 2</option>
            {/* {owners.map((owner, i) => {
              return (
                <option key={i} value={owner.id}>
                  {owner.name}
                </option>
              );
            })} */}
          </select>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default AddPet;
