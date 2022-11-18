import React, { useState } from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {
    const [message, setMessage] = useState('');

    function sendMessage(e) {
        e.preventDefault();

        const {uid} = auth.currentUser;
        // const {photoURl} = auth.currentUser.photoURL === undefined ? 'https://illustration-free.net/thumb/svg/ifn0438.svg' : auth.currentUser.photoURL;
        // console.log(photoURl);

        db.collection('messages').add({
            text: message,
            // photoURl,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setMessage('');
    }

    return (
        <div>
        <form onSubmit={(e) => sendMessage(e)}>
            <div className='sendMsg'>
                <Input 
                    placeholder='メッセージを入力してください' 
                    type='text' 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <SendIcon />
            </div>
        </form>
        </div>
    )
    }

export default SendMessage
