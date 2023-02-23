import React from 'react'
import { Link } from 'react-router-dom'
const UserMenu = () => {
  return (
   <div className='text-center'>
   <ul className="list-group">
   <h4>User Panel</h4>
      <Link to="/dashboard/user/profile" className="list-group-item">My Profile</Link>
      <Link to="/dashboard/user/orders" className="list-group-item">My Orders</Link>
   </ul>
</div>
  )
}

export default UserMenu