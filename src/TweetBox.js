import React, { useState } from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import { db } from './firebase'
import { collection, addDoc, updateDoc } from 'firebase/firestore'

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState('')
  const [tweetImage, setTweetImage] = useState('')
  const colRef = collection(db, 'posts')

  const handleSubmit = (e) => {
    e.preventDefault()

    addDoc(colRef, {
      displayName: 'Somebody Else',
      username: 'damneddestiny',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfeEG9hTj3HEl2bZZjYL-4HFmMcq7hpHZ5Q&usqp=CAU',
    })

    setTweetMessage('')
    setTweetImage('')
  }
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar />
          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            type='text'
            placeholder="What's happening?"
          />
        </div>
        <div className='tweetBox__container'>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            type='text'
            placeholder='Optional: Enter image URL'
            className='tweetBox__imageInput'
          />
          <Button onClick={handleSubmit} className='tweetBox__tweetButton'>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TweetBox
