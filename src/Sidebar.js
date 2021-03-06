import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
 return <div className="sidebar">
           <div className='sidebar__top'>
               <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjAfDBBMHxleHBsb3JlLWZlZwR8MXx8fGVufD88fHw%3D&w=1000&q=80" alt=""/>
          <Avatar className='sidebar__avatar' />
          <h2>Farhan Maqsood</h2>
          <h4>farhan@gmail.com</h4>
            </div>
          <div className='sidebar__stats'>

            <div className='sidebar__stat'>
              <p>Who Viewed You</p>
              <p className='sidebar__statNumber'>2543</p>
             </div>
          <div className='sidebar__stat'>
              <p>Who Viewed You</p>
              <p className='sidebar__statNumber'>2448</p>
          </div>
          </div>
          <div className='sidebar__button'>
              <p>Recent</p>
              {recentItem("reactjs")}
              {recentItem("programming")}
              {recentItem("softwareengineering")}
              {recentItem("design")}
              {recentItem("developer")}
          </div>
      </div>
}

export default Sidebar;
