import React from 'react'
const ReadOnlyRowMatch = ({ match,setEditedMatch}) => {

  const editMatches=(event)=>{


    //console.log('ricky',typeof player);
    console.log('array',match);
    setEditedMatch(match);
    
    
    };

  return (
    <tr key = {match.matchID}>
    <td>
      <input type = "radio" value={match.matchID} name="radioButton"></input>
    </td>
    <td> {match.matchID} </td>
    <td> {match.matchType} </td>
    <td> {match.player1Name} </td>
    <td> {match.player2Name} </td>
    <td> {match.status} </td>
    <td> {match.court} </td>
    <td> {match.player1Score} </td>
    <td> {match.player2Score }</td>                                    
  </tr>
  );
};

export default ReadOnlyRowMatch;
