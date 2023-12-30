import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Col ,Row} from 'react-bootstrap';


function Restcard({rest}) {
  return (
    <Link to={`/restaurant_view/${rest.id}`} style={{textDecoration:'none'}}>
    <Card style={{ width: '100%' }}>
    <Card.Img height={'300px'} variant="top" src={rest.photograph} />
    <Card.Body>
      <Card.Title className='text-center text-warning p-2'>{rest.name}</Card.Title>
      <hr/>
     

        <Row className='p-3'>
            <Col className='ms-3'>
            <Card.Text >
            {rest.neighborhood}
            </Card.Text>
            </Col>

            <Col>
            <Card.Text >
            Cuisine Type:{rest.cuisine_type}
            </Card.Text>
            </Col>

        </Row>
       
       
      
      
    </Card.Body>
  </Card>
    </Link>
    
  )
}

export default Restcard