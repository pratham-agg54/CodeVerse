import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ClientComp from '../components/ClientComp';
import EditorComp from '../components/EditorComp';
import { socket } from '../socket';
import '../styles/EditorPage.css';

const EditorPage = () => {
    const [clients, setClients] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { roomID } = useParams();
    const [code, setCode] = useState('');
    const username = location.state?.username;

    useEffect (() => {
        const handleConnect = () => {
            socket.emit ("join-event", 
                roomID, 
                username
            );
        };

        const handleUserJoined = (username) => {
            toast.success(`${username} has joined the room`);
        };

        const handleConnectedUsers = (users) => {
            setClients(users);
        };

        const handleUserLeft = (username) => {
            toast.success (`${username} has left the room`);

        };

        const handleCodeUpdate = (newCode) => {
            setCode(newCode);
        };

        socket.on ("connect", handleConnect);
        socket.on ('user-joined', handleUserJoined);
        socket.on ('connected-users', handleConnectedUsers);
        socket.on ('user-left', handleUserLeft);
        socket.on ('code-update', handleCodeUpdate);

        socket.emit ('join-event', roomID, username);

        return () => {
            socket.off ("connect", handleConnect);
            socket.off ("user-joined", handleUserJoined);
            socket.off ("connected-users", handleConnectedUsers);
            socket.off ("user-left", handleUserLeft);
            socket.off ("code-update", handleCodeUpdate);
        }
    }, [roomID, username])

    const leaveRoom = () => {
        socket.emit('leave-room', roomID, username);
        navigate("/");
    };

    const copyRoomId = async () => {
        try {
            await navigator.clipboard.writeText(roomID);
            toast.success('Copied the Room ID!');
        } catch (err) {
            toast.error('Could not copy the Room ID');
            console.error(err.message);
        }
    };

    const handleCodeChange = (newCode) => {
        setCode (newCode);
        socket.emit ('code-change', roomID, newCode);
    };

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img
                            className="logoImage"
                            src="/Codeverse.png"
                            alt="logo"
                        />
                    </div>
                    <h3>Connected Members</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <ClientComp
                                key={client.id}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <div className="btnContainer">
                    <button className="btn copyBtn" onClick={copyRoomId}>
                        Copy ROOM ID
                    </button>
                    <button className="btn leaveBtn" onClick={leaveRoom}>
                        Leave
                    </button>
                </div>
            </div>
            <div className="editorWrap">
                <EditorComp 
                    roomID = {roomID}
                    code = {code}
                    onCodeChange = {handleCodeChange}
                />
            </div>
        </div>
    );
};

export default EditorPage;
