import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import walletIcon from '../../assets/icons/nurse/carAdv1.svg';

const NurseCareerAdvSection = () => {
  return (
    <div className='px-lg-5  d-flex align-items-center justify-content-center w-100'>
      <Container className='w-100 d-flex justify-content-center align-items-center'>
       
        <Row  className='nurseStatsbg py-4 ' >
             <Row>
            <div className='subheading-big-medium mb-4'>
                Career Advancement Opportunities
            </div>
        </Row>
          
            <Col lg={3} sm={12} xs={12} className='d-flex flex-column text-start justify-content-start align-items-start'>
            <img src={walletIcon} alt="" />
          
          <div className='subheading-small-medium text-content-secondary'>Higher Positions</div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium text-content-secondary me-1'>
            Nurse leadership, care management, and education
          </div>
        
          </div>
          
          </Col>
          <Col lg={3} sm={12} xs={12} className='d-flex flex-column text-start justify-content-start align-items-start'>
          <img src={walletIcon} alt="" />
          <div className='subheading-small-medium text-content-secondary'>Specialization</div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium' >ICU, surgery, pediatrics, and more</div>
    
          </div>
         
          </Col>
         
          <Col lg={3} sm={12} xs={12} className='d-flex flex-column text-start justify-content-start align-items-start'>
          <img src={walletIcon} alt="" />
          <div className='subheading-small-medium text-content-secondary'> Ongoing Training </div>
          <div  className=' align-items-end'>
             <div className='paragraph-small-medium' >Access to continuous professional development and courses</div>
        

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