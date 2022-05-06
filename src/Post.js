import React, { forwardRef } from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar'
import VerifiedIcon from '@mui/icons-material/Verified'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import RepeatIcon from '@mui/icons-material/Repeat'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PublishIcon from '@mui/icons-material/Publish'

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className='post' ref={ref}>
        <div className='post__avatar'>
          <Avatar src={avatar} />
        </div>
        <div className='post__body'>
          <div className='post__header'>
            <div className='post__headerText'>
              <h3>
                {displayName}{' '}
                <span className='post__headerSpecial'>
                  {verified && <VerifiedIcon className='post__badge' />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className='post__headerDescription'>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt='image' />
          <div className='post__footer'>
            <ChatBubbleOutlineIcon fontSize='small' />
            <RepeatIcon fontSize='small' />
            <FavoriteBorderIcon fontSize='small' />
            <PublishIcon fontSize='small' />
          </div>
        </div>
      </div>
    )
  }
)

export default Post
