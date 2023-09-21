import React from 'react'
import '../styles/style.css';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel'
import Stack from 'react-bootstrap/Stack'

import  M1 from '../visuals/M1.png';
import  M2 from '../visuals/M2.png';
import  M3 from '../visuals/M3.png';
import  M4 from '../visuals/M4.png';
import  M5 from '../visuals/M5.png';
import  M6 from '../visuals/M6.png';

function Content() {
    return (
        <div id='body'>
            <Col className='col-md-10 centerCol'>
                <Row className='subTitle'>
                    <h3>ABOUT</h3>
                </Row>
                <Row className='center'>
                    <p>MIRAGE is a mobile app that extends DREAM’s capabilities of experiment delivery and data collection. The app/system targets Android Tablet devices and will be provisioned directly onto devices. MIRAGE works both offline and online. It is able to store game data and experiment data in local storage and upload to GameScribe when proctors push an “upload data” button.</p>
                    <p>MIRAGE allows proctors to download experiments that have been curated and provisioned via access codes into the local storage. Experiment sequences include a number of tasks and surveys that are locked and unlock as the participant progresses. Proctors are able to review this downloaded packets and have participants complete the tasks. MIRAGE provides screens to check sound settings as well as to select a language. The first release will include support for both English and Spanish.</p>       
                    <ul>
                        <p>There are three types of users in MIRAGE.</p>
                        <li>Researcher</li>
                        <li>Proctor</li>
                        <li>Participant</li>
                    </ul>
                </Row>

                <Row className='subTitle'>
                    <h3>USER SCENARIO</h3>
                </Row>
                <Row className='center'>
                    <p>A researcher would create an account and login to DREAM to curate experiments online using the DREAM Experiment Center system, where the researchers can create sequences of instruments that include tasks and/or surveys, add custom settings available for each instrument such as allowing pause or skip features, timeout, start points, etc. Researchers will use DREAM to distribute and push access codes for proctors.</p>
                    <p>A Proctor will use an Android tablet and log in using their Proctor ID. The proctor can then use access codes provided by the researcher to download an experiment into the table. The proctor will have a dashboard where they can manage their experiments, access codes, participant rosters, manage their data to update participant response data or to refresh their experiment downloads. The dashboard will also provide a view where they can monitor the progress of the participants and the number of participants that have completed the experiment of interest. In addition, the app will support the use of a keyboard for researchers to be able to pause and skip a task using a keyboard shortcut key combination, and write in notes for tasks that have been paused or skipped.</p> 
                </Row>

                <Row className='subTitle'>
                    <h3>LIST OF APPLICATIONS</h3>
                </Row>
                <Row id='listOfNames'>
                    <ul>
                        <li>Dot Probe /  ReactNative / Nathan Baum, Al Olsen</li>
                        <li>Hearts and Flowers /  ReactNative / Nathan Baum, Al Olsen</li>
                        <li>CST /  ReactNative / Nathan Baum, Al Olsen</li>
                        <li>ERQ / ERQNYU /  ReactNative / Nathan Baum, Al Olsen</li>
                        <li>ROWPVT / ROWPVTSBE /  ReactNative / Al Olsen</li>
                        <li>LetterWord /  ReactNative / Al Olsen</li>
                        <li>Pencil Tap/  ReactNative / Al Olsen</li>
                        <li>PSRA /  ReactNative / Al Olsen</li>
                        <li>DCCS /  ReactNative / Al Olsen</li>
                        <li>DCCSplus /  ReactNative / Al Olsen</li>
                        <li>Demographics/  ReactNative / Al Olsen</li>
                        <li>Height and Weight /  ReactNative / Al Olsen</li>
                        <li>REMA /  ReactNative / Al Olsen</li>
                        <li>NBACKplus /  ReactNative / Al Olsen</li>
                        <li>FlankerPlus /  ReactNative / Al Olsen</li>
                    </ul>
                </Row>
                <Row className='subTitle'>
                    <h3>SCREENSHOTS</h3>
                </Row>
                <Row id='carousel'>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={2}>
                                <img className="d-block w-50"src={M1} alt="add page"/>
                                <img className="d-block w-50" src={M2} alt="login page"/>
                            </Stack>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={2}>
                            <img className="d-block w-50" src={M3} alt="Navbar"/>
                                <img className="d-block w-50"src={M4} alt="info page"/>
                            </Stack>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Stack direction="horizontal" className="h-100 justify-content-center align-items-center" gap={2}>
                                <img className="d-block w-50" src={M5} alt="experiments selection page"/>
                                <img className="d-block w-50" src={M6} alt="experiment preview"/>
                            </Stack>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Col>

        </div>
    
    
      )
}

export default Content