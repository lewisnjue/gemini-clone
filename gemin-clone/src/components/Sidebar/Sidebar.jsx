import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
  <div className='sidebar'>
  <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chart">
          <img src={assets.plus_icon} alt="" />
          <p>New Chart</p>
        </div>
      </div>
      <div className="recent">
        <p className="recent-title">Recent</p>
        <div className="recent-entry">
          <img src={assets.message_icon} alt="" />
          <p>What is react ... </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry" >
          <img src={assets.question_icon} alt="" />
          <p>Help</p>
        </div>
        <div className="bottom-item recent-entry" >
          <img src={assets.history_icon} alt="" />
          <p>activity</p>
        </div>
        <div className="bottom-item recent-entry" >
          <img src={assets.setting_icon} alt="" />
          <p>settings</p>
        </div>
        
        </div> 
    </div>

  )
}

export default Sidebar;
