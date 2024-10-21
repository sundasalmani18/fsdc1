import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div id='footer'>
      <div class="container">
        <div className='row'>
          <div className='col-md mb-5'>
            <h2>Link</h2>
            <ul>
              <li>< FontAwesomeIcon icon="fa-solid fa-right-long" />Education</li>
              <li>Experience</li>
              <li>Project</li>
              <li>Skill</li>
            </ul>
          </div>
          <div className='col-md mb-5'>
            <h2>Services</h2>
          </div>
          <div className='col-md mb-5'>
          < FontAwesomeIcon icon={faUtensils} className=" icon" />
          </div>

        </div>

      </div>
    </div>

  )
}

export default Footer