import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './component/main'
import Resume from './component/resume'
import Projects from './component/projects'
import DetailProject from './component/detail_project'
import Contact from './component/contact'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/detail_project/:id' element={<DetailProject/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
