import React from 'react';
import './EquipeClassement.css';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class EquipeClassement extends React.Component {
    
    render() {
        return(
            
            <Row className="equipe">
                <Col xs={4} className="class">{this.props.number}er</Col>
                <Col xs={8} className="nom">
                    {this.props.city} <b>{this.props.team}</b><br></br> {this.props.win}W / {this.props.loose}L
                </Col>
            </Row>

        );
    }
}