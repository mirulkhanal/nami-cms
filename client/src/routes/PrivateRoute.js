// import React, { useContext, useEffect } from 'react'
// import { Route, Redirect } from 'react-router-dom'
// import AuthContext from '../context/AuthContext'
// export const PrivateRoute = ({
//   component: Component,
//   loggedIn,
//   role,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={async (props) => {
//         await getLoggedInStatus()
//         console.log(loggedIn)
//         console.log('logged in private route')
//         // console.log(loggedIn)

//         console.log('User type in private route')
//         // console.log(userType)
//         console.log(role)
//         // if (loggedIn) {
//         //   // not logged in so redirect to login page with the return url
//         //   return (
//         //     <Redirect
//         //       to={{ pathname: '/login', state: { from: props.location } }}
//         //     />
//         //   )
//         // }

//         // check if route is restricted by role
//         if (role && role !== props.userType) {
//           // role not authorised so redirect to home page
//           return <Redirect to={{ pathname: '/' }} />
//         }

//         // authorised so return component
//         return <Component {...props} />
//       }}
//     />
//   )
// }
