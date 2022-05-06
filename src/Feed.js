import React, { useState, useEffect } from 'react'
import './Feed.css'
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal'
import TweetBox from './TweetBox'
import Post from './Post'
import { db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState('')

  const colRef = collection(db, 'posts')

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
      setId(snapshot.docs.map((doc) => doc.id))
    })
  }, [])

  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2>Home</h2>
        <AutoFixNormalIcon fontSize='large' />
      </div>

      <TweetBox />
      <FlipMove>
        {posts.map(
          ({ displayName, username, verified, text, avatar, image }) => (
            <Post
              key={id}
              displayName={displayName}
              username={username}
              verified={verified}
              text={text}
              avatar={avatar}
              image={image}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
