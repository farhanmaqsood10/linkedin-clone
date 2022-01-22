import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';


function header() {
  return <div className='header'>

    <div className='header__left'>

    <img
     src="https://img.icons8.com/fluency/174/000000/linkedin.png" alt=""
     />

        <div className='header__Search'>
             <SearchIcon/>
             <input type="text"/>
        </div>

    </div>

    <div className='header__right'>
      <HeaderOption Icon = {HomeIcon} title="Home"/>
      <HeaderOption Icon = {SupervisorAccountIcon} title="My Network"/>
      <HeaderOption Icon = {BusinessCenterIcon} title="Job"/>
      <HeaderOption Icon = {ChatIcon} title="Messaging"/>
      <HeaderOption Icon = {NotificationsIcon} title="Notifaction"/>
      <HeaderOption avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_sonny.jpeg" title = "me"/>
    </div>

  </div>;
}

export default header;
