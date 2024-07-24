import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import ClientComp from '../components/ClientComp';
import EditorComp from '../components/EditorComp';
import '../styles/EditorPage.css';

const EditorPage = () => {
    const [clients, setClients] = useState([
        { socketID: 1, username: 'Pratham' },
        { socketID: 2, username: 'XYZ' }
    ]);
    const navigate = useNavigate();
    const { roomID } = useParams();

    const returnHomePage = () => {
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
                                key={client.socketID}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <div className="btnContainer">
                    <button className="btn copyBtn" onClick={copyRoomId}>
                        Copy ROOM ID
                    </button>
                    <button className="btn leaveBtn" onClick={returnHomePage}>
                        Leave
                    </button>
                </div>
            </div>
            <div className="editorWrap">
                <EditorComp 
                    roomID = {roomID}
                />
            </div>
        </div>
    );
};

export default EditorPage;
