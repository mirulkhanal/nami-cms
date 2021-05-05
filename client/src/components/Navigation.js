import React, { useContext } from 'react'
import {
  NavActionButton,
  NavActions,
  NavContainer,
  NavElement,
  NavLinks,
  NavLogo,
} from './StyledComponents'
import { FaBook, FaRegNewspaper } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
import { GiLifeBar } from 'react-icons/gi'
import '../styles/icons.css'
// import AuthContext from '../context/AuthContext'
const Navigation = () => {
  // const { loggedIn } = useContext(AuthContext)
  return (
    <NavContainer>
      <NavLogo>BadNAMI</NavLogo>
      <NavLinks>
        <NavElement to='/'>
          <MdHome className='icon' />
          <p>Home</p>
        </NavElement>
        <NavElement to='/courses'>
          <FaBook className='icon' />
          Courses
        </NavElement>
        <NavElement to='/news'>
          <FaRegNewspaper className='icon' />
          <p>News</p>
        </NavElement>
        <NavElement to='/life'>
          <GiLifeBar className='icon' />
          <p>Life at BadNAMI</p>
        </NavElement>
      </NavLinks>
      <NavActions>
        {!true ? (
          <NavActionButton to='/login'>
            <span>
              Login
              <FiLogIn style={{ paddingTop: '3px' }} />
            </span>
          </NavActionButton>
        ) : (
          <NavActionButton to='/logout'>
            <span>
              Log out
              <FiLogIn style={{ paddingTop: '3px' }} />
            </span>
          </NavActionButton>
        )}
        <NavActionButton to='/apply'>Apply</NavActionButton>
      </NavActions>
    </NavContainer>
  )
}

export default Navigation
