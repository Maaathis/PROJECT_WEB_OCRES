import React from 'react';
import './BandeauHaut.css';
import Logo from '../images/Logo.png';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Nav extends React.Component {
    
    render() {
        return(
            <Row className="nav">
                <Col xs={3}>
                <img src={Logo} alt="imgLogo" className="logo"></img>
                </Col>
                <Col xs={3}></Col>
                <Col xs={2}>
                <a className="titreNav" href="/">Accueil</a>
                </Col>
                <Col xs={2}>
                <a className="titreNav" href="/actu">Actu</a>
                </Col>
                <Col xs={2}>
                <a className="titreNav" href="/team">Team</a>
                </Col>
                
            </Row>
        );
    }
}