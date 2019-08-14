import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{fontFamily: 'Brandon Grotesque',color: '#ffffff', height: '200px',background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}}> My Portfolio Website</CardTitle>
            <CardText style={{color: '#1A1A1D', fontFamily: 'Brandon Grotesque', fontSize: 15}} >
              This website (work in progress) is made with React by using react-router and Material Design Lite! Tools from Adobe Creative Cloud were used for all the web design components.   
            </CardText>
            <CardActions border >
            <a href="https://github.com/rshee" >
            <i class="fa fa-github-square" aria-hidden="true">  </i>
            </a>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="random"><h5><i>Coming soon...</i></h5></div>
      )
    }
  }
  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Other</Tab>
        </Tabs>
          <Grid className="tech-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
