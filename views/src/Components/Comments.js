import { Typography, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const styles = {
    commentsCol: {
      maxHeight: 561,
      overflow: 'auto',
    },
    commentContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
    },
    commentHeader: {
      paddingBottom: '8px',
      paddingLeft: '8px',
    },
    commentZone: {
      flex: '1',
      overflow: 'auto',
      padding: '8px',
      paddingBottom: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    commentTextField: {
      padding: '8px',
      paddingBottom: '0',
      paddingTop: '0'
    },
};

function Comment(props){
    return(
        <Typography key={props.key} variant='body1' style={{marginTop:'0.5rem'}}>
            <span style={{opacity:'0.6'}}>{props.username}</span>&emsp;{props.comment}
        </Typography>
    );
}

function Textfield({label, change, value}){
    return(
        <TextField
            label={label}
            size='small'
            fullWidth
            variant="standard"
            style={{marginTop:'0.5rem'}}
            sx={{
                '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                '& .MuiInput-underline:after': { borderBottomColor: '#00aa5b' },
                '& .MuiInputLabel-root': { color: 'white !important' }
            }}
            InputProps={{
                style: {
                    color: 'white'
                },
            }}
            value={value}
            onChange={(e) => change(e.target.value)}
        />
    );
}

export default function Comments(){
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleClick = async () => {
        try {
            const response = await fetch(`http://localhost:3001/api/videos/${id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    comment: commentText,
                }),
            });

            if (response.ok) {
                const newComment = { username: username, comment: commentText };
                setComments([...comments, newComment]);
                setUsername('');
                setCommentText('');
            }
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    const handleEnter = e => {
      if (e.keyCode === 13) {
        handleClick();
      }
    };

    useEffect(() => {
        async function fetchComments() {
            try {
                const response = await fetch(`http://localhost:3001/api/videos/${id}/comments`);
                if(response.ok){
                    const data = await response.json();
                    setComments(data.comments);
                }
            } catch(error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchComments();
    }, [id]);

    return(
        <div style={styles.commentContainer}>
            <div style={styles.commentHeader}>
                <Typography variant="h1">Comments</Typography>
            </div>
            <div className='commentsScroll' style={styles.commentZone}>
                {comments.map((comment, index) => (
                    <Comment key={index} username={comment.username} comment={comment.comment}/>
                ))}
            </div>
            <div style={styles.commentTextField}>
                <Textfield label='Username' value={username} change={setUsername} onKeyPress={handleEnter}/>
                <Textfield label='Comment' value={commentText} change={setCommentText} onKeyPress={handleEnter}/>
                <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    color='success'
                    style={{marginTop:'8px'}}
                    sx={{
                        backgroundColor: '#00aa5b'
                    }}
                    onClick={handleClick}
                >send</Button>
            </div>
        </div>
    );
}