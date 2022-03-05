import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Feedback from '../components/Feedback/Feedback'
import Home from '../components/Home/Home'
import Pnf from '../components/Pnf/Pnf'
import Header from '../LayOut/Header'
import P_Catagory from '../Product/P_Catagory/P_Catagory'
import subCat from '../Product/S_Catagory/S_Catagory'
export const RootRoutes = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="" element={<Home />} /> {/*Default path setup*/}
                <Route path="about_page" element={<About />} />
                <Route path="contact_page/:name" element={<Contact />} />
                <Route path="feedback_page" element={<Feedback />} />
                <Route path="P_Catagory" element={<P_Catagory />} />
                <Route path="Sub_Cat/:pid" element={<subCat />} />
                <Route path="*" element={<Pnf />} />
            </Routes>
        </Router>
    )
}
export default RootRoutes