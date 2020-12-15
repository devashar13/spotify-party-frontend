import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import './CreateRoom.css';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function CreateRoom() {
    let history=useHistory();
    const[votesToSkip,setVotesToSkip]=useState(2);
    const[guestCanPause,setGuestCanPause]=useState(true);
    const handleRoomButtonPressed=()=>{
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            guest_can_pause: guestCanPause,
            votes_to_skip: votesToSkip,
          }),
          
        };
        fetch("http://localhost:8000/api/create-room", requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data));
      }

   
    return (
        <div className="createRoom">
            <div className="createRoom__header">
                <h1>Create A Room</h1>
            </div>
           <FormControl component="fieldset">
               <FormHelperText >
                   <div align="center">Guest Control of playback state</div>
               </FormHelperText>
               <RadioGroup row defaultValue="true" onChange={(e)=>{
                    setGuestCanPause(
                        e.target.value==='true'?true:false,
                    )
               }}>
                   <FormControlLabel
                    value="true"
                    control={<Radio color="primary"/>}
                    label="Play/Pause"
                    labelPlacement="bottom"
                   />
                   <FormControlLabel
                    value="false"
                    control={<Radio color="secondary"/>}
                    label="No Control"
                    labelPlacement="bottom"
                   />
               </RadioGroup>
           </FormControl>
           <div className="createRoom__novotes">
               <FormControl>
                   <TextField
                   onChange={(e)=>{
                    setVotesToSkip(
                        e.target.value,
                    )
                   }}
                   required={true}
                   type="number"
                   defaultValue={votesToSkip}
                   inputProps={{
                       min:1,
                       style:{
                            textAlign:"center"
                       }
                   }}
                   />
                   <FormHelperText>
                       <div className="createRoom__formHelper" align="center">
                           Votes Required to Skip Song
                       </div>
                   </FormHelperText>
               </FormControl>
               
           </div>
           <div className="createRoom__button">
           <Button
            onClick={handleRoomButtonPressed}
            variant="contained"
            color="primary">Create A room
           </Button>
           <Button
            variant="contained"
            color="secondary">Back
           </Button>
            
           </div>
           
        </div>
    )
}

export default CreateRoom
