import { Route, Routes } from "react-router-dom";
import Listings from "./pages/admin";
import AuthPage from "./pages/auth";
import RouteGaurd from "./route-guard";
import { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import UserViewCommonLayout from "./components/user-view/common-layout";
import UserHomePage from "./pages/user";
import CreateNewBlogPage from "./pages/admin/create-new-blog";


export default function App() {
  const {auth} = useContext(AuthContext)
  console.log(auth)
  return (
    <Routes>
      <Route path="/auth" element={<RouteGaurd authenticate={auth.authenticate} user={auth.user} element ={<AuthPage />}  /> }/>
      <Route path="/admin" element={<RouteGaurd authenticate={auth.authenticate} user={auth.user} element ={<Listings />}  /> }/>
      <Route path="/admin/create-new-blog" element={<RouteGaurd authenticate={auth.authenticate} user={auth.user} element ={<CreateNewBlogPage />}  /> }/>
      <Route path="/admin/edit-blog/:blogId" element={<RouteGaurd authenticate={auth.authenticate} user={auth.user} element ={<CreateNewBlogPage />}  /> }/>



      <Route 
        path="/" 
        authenticated={auth?.authenticate}
        user={auth?.user}
        element={ <RouteGaurd authenticate={auth.authenticate} user={auth.user} element ={ <UserViewCommonLayout /> }/>}
      >

        <Route path="" element={<UserHomePage />} />
        <Route path="home" element={<UserHomePage />} />
      </Route>

    </Routes>
  )
}