import React from 'react';
import './DescriptionEquipe.css';

import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';


export default class DescriptionEquipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            back: "la",
        }
    }

            
    
    render() {
        return(            
            <div className="contour">
                <Row className="haut">
                    <Col xs={6}>
                        <img src={this.props.logo} alt="logoEquipe" className="plein"></img>
                    </Col>
                    <Col xs={6}>
                        <div className="descriptionNom">
                            {this.props.ville}<br></br>{this.props.name}
                        </div>
                        <div className="descriptionConf">
                            Conférence {this.props.conf}<br></br>Division {this.props.div}
                        </div>
                    </Col>
                </Row>
                <Row className="joueurs">
                    <Col xs={6}>
                        <button onClick={this.props.onClick}>boutonla</button>
                    </Col>
                    <Col xs={6}></Col>
                </Row>
            </div>
                
        );
    }
}