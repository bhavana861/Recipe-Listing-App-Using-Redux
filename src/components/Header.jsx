import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchCuisine } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <div >
    <nav className='flex bg-yellow-600 fixed w-full p-5 text-white'>
      <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-bowl-food me-1"></i>Recipe Listing App</Link>
      <ul className='flex-1 text-right'>
   { insideHome &&  <li className='list-none inline-block px-5 font-bold'><input onChange={e=>dispatch(searchCuisine(e.target.value.toLowerCase()))} className='text-black' style={{width:'300px',marginRight:'500px'}} type="text" placeholder='Search cuisine here!!!'  /></li>}
      </ul>
    </nav>
    </div>
  )
}

export default Header
