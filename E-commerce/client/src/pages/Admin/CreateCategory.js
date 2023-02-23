import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateCategory = () => {
   return (
      <Layout>
         <div className="container-fluid m-3m p-3">
            <div className="row">
               <div className="col-md-3">
                  <AdminMenu />
               </div>
               <div className="col-md-9">
                  <div className="card w-75 p-3">
                     <h4> Create Category  </h4>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default CreateCategory