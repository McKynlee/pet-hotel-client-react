/* Import Libraries */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Owner() {
  const [newOwner, setNewOwner] = useState('');

  const addOwner = (event) => {
    event.preventDefault();
    console.log('*** <Owner /> -> addOwner() ***');
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Pets </th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default Owner;
