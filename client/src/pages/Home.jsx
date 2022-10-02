import React,{useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

const Home = () => {
  const [toggle, setToggle] = useState(true)
  
  return (
    <div className='h-screen w-full flex '>
      {toggle? <LoginForm setToggle={setToggle}/> : <SignupForm setToggle={setToggle} /> }
     
    </div>
  )
}

export default Home