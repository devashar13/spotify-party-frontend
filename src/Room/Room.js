import React, { useEffect, useState } from 'react';
import './Room.css';
import axios from 'axios';

const  Room=(props)=> {
    const[votesToSkip,setVotesToSkip]=useState(2);
    const[guestCanPause,setGuestCanPause]=useState(true);
    const[isHost,setIsHost] = useState(false);
    const roomCode =props.match.params.roomCode;
   
    useEffect(async ()=>{
        const result = await axios(
            'http://127.0.0.1:8000/api/get-room'+'?code='+roomCode,
          );
          setVotesToSkip(
            result.data.votes_to_skip
        )
        setGuestCanPause(
            result.data.guest_can_pause.toString()
        )
        setIsHost(
            result.data.is_host.toString()
        )
    })
    
    return (
        
        <div className="room">
            <h3>{roomCode}</h3>
            <p>votes to skip:{votesToSkip}</p>
            <p>guset Can pause:{guestCanPause}</p>
            <p>is host:{isHost}</p>
        </div>
    )
}

export default Room
