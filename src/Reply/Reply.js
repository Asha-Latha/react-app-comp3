import React from 'react';

import { UncontrolledCollapse } from 'reactstrap';


import '../App.css';

const Reply = () => (





  <div>
    <div>
      <a href="#toggler" id="toggler">View All Comments</a>

      <UncontrolledCollapse toggler="#toggler">
        <div>
          <span class="font-weight-bold">username </span>
          <span class="text-break">
            comment are more the bigger than this cards comment are more bigger than this cards comment are
            more bigger than this cards comment are more bigger than this cards comment are more bigger than
            this cards
                    </span>
        </div>
      </UncontrolledCollapse>
    </div>

  </div>
);




export default Reply;