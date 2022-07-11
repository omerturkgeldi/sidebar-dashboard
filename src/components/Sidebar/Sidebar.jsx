import React, { useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'
import * as BsIcons from 'react-icons/bs'
import SidebarListItem from './SidebarListItem'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
  useEffect(() => {
    let btn = document.querySelector('#btn')
    let searchInput = document.querySelector('#search-input')
    let sidebar = document.querySelector('.sidebar')
    let searchBtn = document.querySelector('.search-icon')
    let homeContent = document.querySelector('.home_content')

    btn.onclick = function () {
      sidebar.classList.toggle('active')
      homeContent.classList.toggle('home_active')
    }

    searchBtn.onclick = function () {
      sidebar.classList.toggle('active')
      homeContent.classList.toggle('home_active')
    }

    // function chbg(color) {
    //   document.getElementById('b').style.backgroundColor = color
    // }

    // searchInput.onmouseover = function () {
    //   console.log('sdjdgkldgk')
    //   searchBtn.style.color = '#343243'
    // }
    // searchInput.onmouseout = function () {
    //   console.log('sdjdgkldgk')
    //   searchBtn.style.color = '#fff'
    // }
    // searchBtn.onmouseover = function () {
    //   console.log('sdjdgkldgk')
    //   searchBtn.style.color = '#343243'
    // }
    // searchBtn.onmouseout = function () {
    //   console.log('sdjdgkldgk')
    //   searchBtn.style.color = '#fff'
    // }
  })

  return (
    <div className="sidebar">
      <div className="logo_content">
        <div className="logo">
          <FaIcons.FaReact />
          <div className="logo_name">CV Panel</div>
        </div>
        <BiIcons.BiMenu id="btn" />
      </div>
      <ul className="nav_list">
        <li className="li_search">
          <BiIcons.BiSearch className="search-icon" />
          <input id="search-input" type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>

        {SidebarData.map((item) => {
          return (
            <SidebarListItem
              subNavList={item.subNav}
              key={item.id}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          )
        })}

        {/* 
        <SidebarListItem icon={<TbIcons.TbLayoutGrid />} title="Dashboard" />

        <SidebarListItem icon={<AiIcons.AiOutlineUser />} title="User" />
        <SidebarListItem icon={<BiIcons.BiChat />} title="Messages" />
        <SidebarListItem icon={<BiIcons.BiPieChartAlt2 />} title="Analytics" />
        <SidebarListItem icon={<BiIcons.BiFolder />} title="File Manager" />
        <SidebarListItem icon={<BsIcons.BsCart2 />} title="Order" />
        <SidebarListItem icon={<FiIcons.FiHeart />} title="Saved" />
        <SidebarListItem icon={<BiIcons.BiCog />} title="Settings" /> */}
      </ul>

      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img
              src="https://avatars.githubusercontent.com/u/55360597?v=4"
              alt=""
            />
            <div className="name_job">
              <div className="name">Ömer Türkgeldi</div>
              <div className="job">Web Developer</div>
            </div>
          </div>
          <BiIcons.BiLogOut id="log_out" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
