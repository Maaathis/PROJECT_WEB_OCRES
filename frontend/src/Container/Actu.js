import React from 'react';
import './Actu.css';
import Nav from '../Content/BandeauHaut';
import Match from '../Content/Match';
import axios from 'axios';

import {Row} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import EquipeClassement from '../Content/EquipeClassement';

export default class Actu extends React.Component {
   
    constructor(props){
        super(props)
        this.state={
            match1_homeTeam:[],
            match1_VisitorTeam:[],
            match1:[],

            match2_homeTeam:[],
            match2_VisitorTeam:[],
            match2:[],

            match3_homeTeam:[],
            match3_VisitorTeam:[],
            match3:[],

            match4_homeTeam:[],
            match4_VisitorTeam:[],
            match4:[],
            
                        }
                  }

    async componentDidMount() {
        const url_match = " https://free-nba.p.rapidapi.com/games"

        let result_match = null;

    
        try{
                result_match= await axios(url_match, {
                params: {page: '1', per_page: '10', team_ids: '1', Seasons: '2021'},
                headers: {
                    'x-rapidapi-host': 'free-nba.p.rapidapi.com',
                    'x-rapidapi-key': 'ee837f376cmsh63e8fab63b39a11p1ad1b7jsn439f7d54cd93'
                        }
                                           })
    

    
        } catch(e) {
                console.log(e)
                    }
                    
                this.setState({match1_homeTeam: result_match.data.data[0].home_team})
                this.setState({match1_VisitorTeam: result_match.data.data[0].visitor_team})
                this.setState({match1: result_match.data.data[0]})

                this.setState({match2_homeTeam: result_match.data.data[6].home_team})
                this.setState({match2_VisitorTeam: result_match.data.data[6].visitor_team})
                this.setState({match2: result_match.data.data[6]})

                this.setState({match3_homeTeam: result_match.data.data[2].home_team})
                this.setState({match3_VisitorTeam: result_match.data.data[2].visitor_team})
                this.setState({match3: result_match.data.data[2]})

                this.setState({match4_homeTeam: result_match.data.data[3].home_team})
                this.setState({match4_VisitorTeam: result_match.data.data[3].visitor_team})
                this.setState({match4: result_match.data.data[3]})


                   }


    
render() {

        const{match1_homeTeam} = this.state;
        const{match1_VisitorTeam} = this.state;
        const{match1} = this.state;

        const{match2_homeTeam} = this.state;
        const{match2_VisitorTeam} = this.state;
        const{match2} = this.state;

        const{match3_homeTeam} = this.state;
        const{match3_VisitorTeam} = this.state;
        const{match3} = this.state;

        const{match4_homeTeam} = this.state;
        const{match4_VisitorTeam} = this.state;
        const{match4} = this.state;

        let matchs= [{
            ville1 : match1_homeTeam.city,
            equipe1 : match1_homeTeam.name,
            score1 : match1.home_team_score,
            ville2 : match1_VisitorTeam.city,
            equipe2 : match1_VisitorTeam.name,
            score2 :  match1.visitor_team_score
        },
        {
            ville1 : match2_homeTeam.city,
            equipe1 : match2_homeTeam.name,
            score1 : match2.home_team_score,
            ville2 : match2_VisitorTeam.city,
            equipe2 : match2_VisitorTeam.name,
            score2 :  match2.visitor_team_score
        },
        {
            ville1 : match3_homeTeam.city,
            equipe1 : match3_homeTeam.name,
            score1 : match3.home_team_score,
            ville2 : match3_VisitorTeam.city,
            equipe2 : match3_VisitorTeam.name,
            score2 :  match3.visitor_team_score
        },
        {
            ville1 : match4_homeTeam.city,
            equipe1 : match4_homeTeam.name,
            score1 : match4.home_team_score,
            ville2 : match4_VisitorTeam.city,
            equipe2 : match4_VisitorTeam.name,
            score2 :  match4.visitor_team_score
        },
        ];

        let Classement = [{
            number : 2,
            city : "Miami",
            team : "Heat",
            win : 34,
            loose : 21
        }];
        return(
            
            <Container fluid className="championFond">
                <Row>
                    <Nav/>
                </Row>
                <Row className="separer"></Row>
                <Row>
                    <Col  className="mesActus" xs={6}>
                        <Match  ville1={matchs[0].ville1}
                                ville2={matchs[0].ville2}
                                equipe1={matchs[0].equipe1}
                                equipe2={matchs[0].equipe2}
                                score1={matchs[0].score1}
                                score2={matchs[0].score2}/>
                        
                        <Match  ville1={matchs[1].ville1}
                                ville2={matchs[1].ville2}
                                equipe1={matchs[1].equipe1}
                                equipe2={matchs[1].equipe2}
                                score1={matchs[1].score1}
                                score2={matchs[1].score2}/>
                        
                        <Match  ville1={matchs[2].ville1}
                                ville2={matchs[2].ville2}
                                equipe1={matchs[2].equipe1}
                                equipe2={matchs[2].equipe2}
                                score1={matchs[2].score1}
                                score2={matchs[2].score2}/>
                        
                        <Match  ville1={matchs[3].ville1}
                                ville2={matchs[3].ville2}
                                equipe1={matchs[3].equipe1}
                                equipe2={matchs[3].equipe2}
                                score1={matchs[3].score1}
                                score2={matchs[3].score2}/>
                    </Col>
                    <Col className="mesActus" xs={5}>
                        <div className="monTableau">
                            Ici le tableau
                        </div>
                    </Col>
                </Row>
                <Row className="separer2"></Row>
                <Row className="Eastern">
                    <Col xs={12}>Eastern Conference</Col>
                </Row>
                <Row className="classementEst">
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row className="Western">
                    <Col xs={12}>Western Conference</Col>
                </Row>
                <Row className="classementWest">
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                    <Col xs={1}></Col>
                    <Col xs={2}>
                        <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={2}>
                    <EquipeClassement   number={Classement[0].number}
                                            city={Classement[0].city}
                                            team={Classement[0].team}
                                            win={Classement[0].win}
                                            loose={Classement[0].loose}/>
                    </Col>
                    <Col xs={1}></Col>
                </Row>
                <Row className="separer"></Row>
            </Container>
        );
    }
}