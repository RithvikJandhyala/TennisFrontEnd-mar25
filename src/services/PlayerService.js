import axios from 'axios'

const PLAYERS_REST_API_URL ='http://localhost:9090/api/players';

class PlayerService {
    getPlayers(){
       return  axios.get(PLAYERS_REST_API_URL);
    }
    createPlayer(player){
        return axios.post(PLAYERS_REST_API_URL,player)
    }
}

export default new PlayerService()