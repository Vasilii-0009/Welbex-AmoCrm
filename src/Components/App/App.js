import './App.css';
import { Routes, Route, } from "react-router-dom";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }>
        </Route>
      </Routes>
    </div>
  )

}

export default App;
