import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarApp, FooterApp } from "../../ui"
import { HomePage, AboutPage, ProjectsPage, ContactPage } from "../pages"

export const AlvadevRoutes = () => {
  return (
    <div>
        <NavbarApp/>
        <main className="flex flex-col h-screen">
          <Routes>
            <Route path="home" element={<HomePage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="projects" element={<ProjectsPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>

            <Route path="/" element={<Navigate to="/home"/>} />
          </Routes>
        </main>
        <FooterApp/>
    </div>
  )
}
