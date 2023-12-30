import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch()
  return (
    <Navbar style={{backgroundColor:'crimson'}} className='p-3'>
    <Container>
      <Navbar.Brand href="" className='d-flex'>
        <img
          alt=""
          src="https://i.pinimg.com/736x/a7/6c/b0/a76cb0f1ab6950f4884c8c07fb3721e4.jpg"
          width="55"
          height="55"
          className="d-inline-block align-top"
        />{' '}
       <h4 className='mt-3 ms-4'><span className='text-primary'>Food </span>Lane</h4>
      </Navbar.Brand>
      <input onChange={(e)=>dispatch(search(e.target.value))} type="text" placeholder='enter Neighbourhood' className='form-control w-25' />
    </Container>
  </Navbar>
  )
}

export default Header