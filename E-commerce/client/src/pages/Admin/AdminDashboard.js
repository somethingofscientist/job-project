import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../Context/Auth'

const AdminDashboard = () => {

   const [auth] = useAuth();

  return (
    <Layout>

      {/* <h1>AdminDashboard</h1> */}

      <div className="container-fluid m-3m p-3">
         <div className="row">
            <div className="col-md-3">
               <AdminMenu />
            </div>
            <div className="col-md-9">
               <div className="card w-75 p-3">
                  <h4> Admin name :  {auth?.user?.name} </h4>
                  <h4> Admin email :  {auth?.user?.email} </h4>
                  <h4> Admin contact :  {auth?.user?.phone} </h4>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard