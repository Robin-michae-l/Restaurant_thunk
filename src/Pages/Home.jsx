import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../Components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'

function Home() {

  //accessing state inorder to display

  const allrestaurant=useSelector((state)=>state.
  restaurantSlice.allrestaurant)
  console.log(allrestaurant);

  const dispatch=useDispatch()


  useEffect(()=>{
    //calling thunk fn
    dispatch(fetchRestaurant())
  },[])
  return (
  <Row >
    {allrestaurant?.length>0?
    allrestaurant.map((rest)=>(
      <Col sm={6} md={4} className='p-4'>
    <Restcard rest={rest}/>
    </Col>
    ))
    
    :<p className='text-danger fs-4'> Nothing to display</p>
}

   
  </Row>
  )
}

export default Home