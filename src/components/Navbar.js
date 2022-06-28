import React from 'react'
import PropTypes from 'prop-types'
//import {Link} from 'react-router-dom'

export default function Navbar(props) {
  let darkMode = {
    color: 'white',
    backgroundColor: 'black'
  }
  let lightMode = {
    color: 'black',
    backgroundColor: 'white'
  }
  let light = {
    backgroundColor: 'white'
  }
  let dark = {
    backgroundColor: '#9d90b8'
  }
  return (
    <div className="navbar flex justify-between p-4 w-full items-center" style={props.mode.color === "black"?lightMode:darkMode}>
        <div className='flex flex-row space-x-3'>
            <a href='#'>{props.title}</a>
            <a href='#'>Home</a>
            {/*<Link to='/about'>{props.about}</Link>*/}
        </div>
        <div className='flex flex-row space-x-3'>
            <input className='outline p-2' type="text" placeholder='Search' style={props.mode.color === "white"?dark:light}/>
            <button  className="btn bg-green-500 p-2 rounded-md">Search</button>
        </div>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Put title here",
  about: "About Us"
}
