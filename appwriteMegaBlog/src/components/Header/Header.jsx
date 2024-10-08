import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Container , LogoutBtn , Logo} from "../index.js"

function Header() {
  const authStatus = useSelector((state) => state.authStatus)

  const navigate = useNavigate();

  const navItems = [
    {
      name : 'Home',
      slug : '/',
      active : true
    },
    {
      name : 'Login',
      slug : '/login',
      active: !authStatus
    },
    {
      name : 'Signup',
      slug : '/signup',
      active : !authStatus
    },
    {
      name : 'All Post',
      slug : '/all-post',
      active : authStatus
    },
    {
      name : 'Add Post',
      slug : '/add-post',
      active : authStatus,
    }
  ]

  return (
   <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav  className='flex'>
          <div className='mr-4'>
            <Link to="/"><Logo width='70px'/></Link>
            </div>

            <ul className='flex ml-auto'>
              {navItems.map((item) => (
                item.active ? (
                <li key={item.name}>
                  <button className= "inline-block px-6 py-2 duration-200 hover:bg-blue-100 ronded-full"
                  onClick={() => navigate(item.slug)}>
                    {item.name}</button>
                </li>
                ) : null
              )
            )}
            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
            </ul>
       
        </nav>
      </Container>
   </header>
  )
}

export default Header
