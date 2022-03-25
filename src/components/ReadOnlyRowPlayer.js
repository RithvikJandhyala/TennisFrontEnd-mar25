import React from 'react'
const ReadOnlyRowPlayer = ({ player,setEditedPlayer}) => {

  const editPlayers=(event)=>{


    //console.log('ricky',typeof player);
    console.log('array',player);
    setEditedPlayer(player);
    
    
    };

  return (
    <tr key = {player.playerID}>
        <td>
          <input type = "radio" value={player.playerID} name="radioButton" onClick={editPlayers}></input>
        </td>
        <td> {player.playerID} </td>
        <td> {player.name} </td>
        <td> {player.school} </td>
        <td> {player.ranking} </td>
        <td> {player.status }</td>               
        <td> {player.gender }</td>                       
    </tr>
  );
};

export default ReadOnlyRowPlayer;
