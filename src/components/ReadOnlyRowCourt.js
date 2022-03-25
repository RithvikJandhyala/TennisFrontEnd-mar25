import React from 'react'
const ReadOnlyRowCourt = ({ court,setEditedCourt}) => {

  const editCourts=(event)=>{


    //console.log('ricky',typeof player);
    console.log('array',court);
    setEditedCourt(court);
    
    
    };

  return (
    <tr key = {court.courtid}>
        <td>
          <input type = "radio" value={court.courtid} name="radioButton" onClick={editCourts}></input>
        </td>
        <td> {court.currentMatch} </td>
        <td> {court.location} </td>
        <td> {court.status} </td>                    
    </tr>
  );
};

export default ReadOnlyRowCourt;
