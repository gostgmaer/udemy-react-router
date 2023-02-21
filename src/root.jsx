import React from 'react'
import { Outlet } from 'react-router'
import { Link, NavLink } from 'react-router-dom'

const Root = () => {
  return (
    <div>Root layout
         <NavLink to="/products">to product page</NavLink>
        <Outlet></Outlet>
    </div>
  )
}

export default Root