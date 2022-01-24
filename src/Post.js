import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import InputOption from './InputOption';


function Post({Name , Description , Message , PhotoUrl}) {
  return <div className='post'>
      <div className='post__header'>
          <Avatar />
          <div className='post__info'>
              <h2>{Name}</h2>
              <p>{Description}</p>

          </div>
      </div>
      <div className='post__body'>
          <p>{Message}</p>
      </div>
      <div className='post__buttons'>
          <InputOption Icon = {ThumbUpAltOutlinedIcon} title = "like" Color = "gray" />
          <InputOption Icon = {ChatOutlinedIcon} title = "Commit" Color = "gray" />
          <InputOption Icon = {ShareOutlinedIcon} title = "Share" Color = "gray" />
          <InputOption Icon = {SendOutlinedIcon} title = "Send" Color = "gray" />

      </div>
  </div>;
}

export default Post;
