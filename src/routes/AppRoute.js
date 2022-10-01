import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../components/layout/Layout'
const AppRoute = () => {
  return (
    <Layout>
        <Outlet />
    </Layout>
  )
}

export default AppRoute