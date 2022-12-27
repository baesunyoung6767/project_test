import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Main from './component/main'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
