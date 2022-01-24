import { useEffect, useState } from 'react';
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { Description } from '@material-ui/icons';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection("posts").onSnapshot((snapshot) => 
        setPosts(
          snapshot.docs.map((doc => ({
            id: doc.id,
            data: doc.data(),
          }))
      )
    )
  }, []);

   const sendPost = (e) => {
    e.preventDefualt();

    db.collection('posts').add({
      Name: 'Farhan Maqsood',
      Description: 'this is a test',
      Message: 
    })
  };
 

  return <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type="text"></input>
                <button onClick={sendPost} type="submit">
                  Send
                </button>
            </form>
        </div>

        <div className='feed__inputOptions'>
            <InputOption Icon = {ImageIcon} title = 'Photo' color = '#70B5F9'/>
            <InputOption Icon = {SubscriptionsIcon} title = 'Video' color = '#E7A33E'/>
            <InputOption Icon = {EventNoteIcon} title = 'Event' color = '#C0CBCD'/>
            <InputOption Icon = {CalendarViewDayIcon} title = 'Write Article' color = '#7FC15E'/>
        </div>

      </div>
      {/* Post */}
      { {posts,map(() => (
        <Post />
      ))} }
      <Post Name = 'Farhan Maqsood' 
      Description = 'This is a test' 
      Message = 'Message Goes Here' />
  </div>;
}

export default Feed;
