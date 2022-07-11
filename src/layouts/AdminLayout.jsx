import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import Egitim from '../pages/Egitim/Egitim'
import Deneyim from '../pages/Deneyim/Deneyim'

const AdminLayout = () => {
  return (
    <div role="navigation">
      <BrowserRouter>
        <Sidebar />
        <div className="home_content">
          <h2 className="page_title" id="page-title">
            Başlık
          </h2>
          <div className="home_content_inner">
            <Routes>
              <Route path="/" element={<h1>Anasayfa</h1>}></Route>
              <Route path="/hakkimda" element={<h1>Hakkımda</h1>}></Route>
              <Route path="/egitim" element={<Egitim />}></Route>
              <Route path="/deneyim" element={<Deneyim />}></Route>
              <Route path="/beceri" element={<h1>Beceri</h1>}></Route>
              <Route path="/iletisim" element={<h1>İletişim</h1>}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default AdminLayout
