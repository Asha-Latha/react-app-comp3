import React from 'react';

import { UncontrolledCollapse, Card, ListGroup } from 'reactstrap';



import '../App.css';

const DropDown = () => (



  <div>
    <div>

      {/* <DropdownButton
     
      menuAlign={{ lg: 'right' }}
     
      id="#toggler"
    > */}


      <a href="#toggler" id="toggler">.</a>
      <UncontrolledCollapse toggler="#toggler">
        <div>
          <Card style={{ width: '8rem' }}>
            {/* <ListGroup variant="flush"> */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            {/* </ListGroup> */}
          </Card>
        </div>
      </UncontrolledCollapse>

      {/* </DropdownButton> */}
    </div>

  </div>
);




export default DropDown;