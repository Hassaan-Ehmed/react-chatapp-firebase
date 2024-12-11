import './App.css'
import ActionBtns from './component/ActionBtns'
import ChatMe from './pages/ChatMe'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import ChatYou from './pages/ChatYou'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>

<Router>
     
        <ToastContainer/>


    <Routes>
      <Route path='/' element={<ActionBtns/>}/>
        <Route path='chat/me' element={<ChatMe/>} /> 
        <Route path='chat/you' element={<ChatYou/>} /> 
    </Routes> 

</Router>
      {/* <Button/> */}
    </>
  )
}

export default App
