import React,{useState,useEffect} from 'react'
import MatchService from '../services/MatchService';
import ReadOnlyRowMatch from '../components/ReadOnlyRowMatch';

import EditMatch  from '../pages/EditMatch';
import AddMatch from '../pages/AddMatch';

const Matches=()=>{ 

  const [matches,setMatches]=useState([]);
  const [editedMatch, setEditedMatch] = useState([]);
  const [showEdit,setShowEdit] =useState(false);
  const [showAdd,setShowAdd] =useState(false);
  
  
  

const handleEdit=()=>{


setShowEdit(true);
setShowAdd(false);

}

const handleAdd=()=>{


  setShowAdd(true);
  setShowEdit(false);

 }
  useEffect(()=>{
      MatchService.getMatches().then((response) => {
         
          setMatches(response.data);
      });

  },[showEdit,showAdd]);
  

      return(
          <div>
              {!showEdit && !showAdd? <h1 className = "text-center">Matches List</h1>:''}
              {!showAdd && !showEdit?<button type="button" className = "btn btn-primary mb-2 player-right player-left" onClick={handleAdd}> Add Match </button>:''}
              {!showEdit && !showAdd? <button type="button" className = "btn btn-primary mb-2 player-right" onClick={handleEdit}>Edit Match</button> :''}
              {!showEdit && !showAdd?
              <table className = "table table-striped">
                  <thead>
                    <tr>
                        <td> Select </td>
                        <td> Match ID </td>
                        <td> Type </td>
                        <td> Player 1</td>
                        <td> Player 2</td>
                        <td> Status</td>
                        <td> Court </td>
                        <td> Player 1 Score</td>
                        <td> Player 2 Score</td>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          matches.map(
                              match =>
                             <ReadOnlyRowMatch match={match} setEditedMatch={setEditedMatch}/>
                          )
                      }
                  </tbody>
              </table>:''}

              { showAdd && !showEdit?                
              <AddMatch  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}    showAdd={showAdd}/>:''}
             {showEdit  && !showAdd?<EditMatch  editedMatch={editedMatch}  setShowEdit={setShowEdit}  setShowAdd={setShowAdd}  showEdit={showEdit}/>:''}
          </div>
      )
  


}

export default Matches;
