import React, {useState} from 'react'
import '../myStyle/Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import InputOption from './InputOption'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import Post from './Post'

function Feed() {
  const [posts, setPosts] = useState([])

  const sendPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form action="">
                    <input type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOption">
              <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
              <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
              <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
              <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
            </div>
        </div>

        {posts.map((post) => (
          <Post />
        ))}
        <Post name='Nikola Zivkovic' description='This is a test' message='Messageeeeee'/>
    </div>
  )
}

export default Feed