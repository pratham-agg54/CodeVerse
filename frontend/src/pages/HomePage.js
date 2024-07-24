import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import '../styles/HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState("");
  const [username, setUsername] = useState("");

  const joinRoom = (event) => {
    event.preventDefault();
    if (username && roomID) {
      toast.success ('Room Joined Successfully!');
      navigate (`/editor/${roomID}`);
    }
    else if (!username) {
      toast.error ('Enter a username');
      return;
    }
    else if (!roomID) {
      toast.error ('Generate New or Enter Existing Room ID');
    }
  };

  const generateRoomID = () => {
    const newRoomID = uuidv4();
    setRoomID(newRoomID);
    toast.success ('New Room ID Generated!');
  }

  return (
    <div className="homePageWrapper">

      <header className="header">
        <img src="/Codeverse.png" alt="Logo"></img>
      </header>

      <div className="container">
        <form className="form" onSubmit={joinRoom}>

          <div className="row">
            <span className="label">Want to create a new room?</span>
            <button type="button" className="generateBtn" onClick={generateRoomID}>
              Generate New Room ID
            </button>
          </div>

          <input type="text" className="inputBox" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username} />
          <input type="text" className="inputBox" placeholder="Room ID" onChange={(e)=>setRoomID(e.target.value)} value={roomID}/>
          <button type="submit" className="joinBtn">
            Join Room
          </button>

        </form>
      </div>

      <footer className="footer">
        <span className="footerText">
          &copy; 2024, &nbsp;
          <a href="https://github.com/pratham-agg54/" className="footerLink">
            Pratham
          </a>
        </span>
      </footer>
      
    </div>
  );
}

export default HomePage;