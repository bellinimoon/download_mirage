import React from 'react'
import '../styles/style.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import icon from '../visuals/mirageLogo.png';

function Header() {
  return (
    <div className='header'>
        <Row className='center'>
            <Col className='col-md-3 left' >
                <img id='icon' src={icon} alt="brand icon"/>
                
            </Col>
            <Col className='col-md-6 left'>
                <div id='headerIntro'>
                    <h1>MIRAGE</h1>
                    <p>Mobile Integration for Research And Generated Experiments</p>
                    <h2><span>Ver. 2022.08.17 (Ad hoc)</span></h2>
                    <h2>Published Sep 3rd, 2022</h2>
                </div>

            </Col>
            <Col className='col-md-1 bottom'>
                <Button className='btn_install' variant="outline-primary"><a href="itms-services://?action=download-manifest&url=https://create.nyu.edu/software/downloads/mirage/manifest.plist">install</a></Button>
            </Col>
        </Row>
        <hr id='purpleLine'/>
    </div>
  )
}

export default Header