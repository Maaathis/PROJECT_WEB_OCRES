import React from 'react';
import './Home.css';
import Content from '../Content/Content';
import Actu from '../Content/Actu';

export default class Home extends React.Component {
    
    render() {
        return(
            <div className="container">
                <Content/>
            </div>
        );
    }
}