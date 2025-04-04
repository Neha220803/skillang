import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import walletIcon1 from '../../../assets/icons/nurse/carAdv1.svg';
import walletIcon3 from '../../../assets/icons/nurse/carAdv3.svg'
import walletIcon2 from '../../../assets/icons/nurse/carAdv2.svg'
import './nurseCareerAdvSection.css';

const NurseCareerAdvSection = () => {
  return (
    <div className='d-flex align-items-center justify-content-center w-100'>
      <Container className='w-100 d-flex justify-content-center align-items-center'>
        <Row  className='nurseCareerAdvbg py-4 ' >
             <Row>
            <div className='heading-big-medium mb-4'>
                Career Advancement Opportunities
            </div>
            </Row>
          
            <Col lg={3} sm={12} xs={12} className='d-flex flex-row flex-md-column text-start justify-content-start align-items-start gap-3 mb-3'>
            <img src={walletIcon1} alt="" />
            <div>
              <div className='subheading-small-medium text-content-secondary'>Higher Positions</div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium text-content-secondary me-1'>
            Nurse leadership, care management, and education
          </div>
              
            </div>
          
        
          </div>
          
          </Col>
          <Col lg={3} sm={12} xs={12} className='d-flex flex-row flex-md-column text-start justify-content-start align-items-start gap-3 mb-3'>
          <img src={walletIcon2} alt="" />
          <div>


          <div className='subheading-small-medium text-content-secondary'>Specialization</div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium text-content-secondary' >ICU, surgery, pediatrics, and more</div>
    
          </div>
         </div>
          </Col>
         
          <Col lg={3} sm={12} xs={12} className='d-flex flex-row flex-md-column text-start justify-content-start align-items-start gap-3 mb-3'>
          <img src={walletIcon3} alt="" />
          <div>
          <div className='subheading-small-medium text-content-secondary'> Ongoing Training </div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium text-content-secondary' >Access to continuous professional development and courses</div>
        
</div>
          </div>
         
          </Col>
          <Col lg={3}>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NurseCareerAdvSection