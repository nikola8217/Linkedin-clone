import React from 'react'
import '../myStyle/Header.css'
import SearchIcon from '@mui/icons-material/Search'
import logo from '../img/linkedinLogo.png'
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationIcon from '@mui/icons-material/Notifications'
import user from '../img/user.png'

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <img src={logo} alt="logo" />
            <div className="header_search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationIcon} title='Notification' />
            <HeaderOption title='Me' avatar={user}/>
        </div>
    </div>
  )
}

export default Header