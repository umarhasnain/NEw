
import { Route, Routes } from 'react-router-dom'
import routes from './Routes/Index'
import SignIn from './Pages/auth/SignIn'
import SignUp from './Pages/auth/SignUp'

const App = () => {
  return (
    <div>
<h1>Jee</h1>
      <Routes>
        
        {
          routes.map((item, index)=>{
            console.log(item);
            
           return (
            <Route key={index} path={item.path} element={item.element} />
           )
          })
        }
        {/* <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/> */}
      </Routes>
    </div>
  )
}

export default App
