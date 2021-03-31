import React from 'react';
import AddPet from '../AddPet/AddPet';
import History from '../History/History';

function Dashboard() {


  return (
    <>
      <div>
        <AddPet />
      </div>


      <div>
        <History />
      </div>

    </>
  )
}


export default Dashboard;