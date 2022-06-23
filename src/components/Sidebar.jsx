import { Avatar } from '@mui/material'
import React from 'react'
import '../myStyle/Sidebar.css'
import back from '../img/back.avif'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src={back} alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Nikola Zivkovic</h2>
            <h4>gileer404@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>
                    2,987
                </p>
            </div>
            <div className="sidebar_stat">
            <p>Views on post</p>
            <p className='sidebar_statNumber'>
                3,174
            </p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar