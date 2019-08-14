import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            
              <div className="banner-text">
                <h1> Hello world, </h1> 
                <h2> I am  <span style={{textDecoration: 'none', color: 'rgb(117, 5, 38)', fontFamily: 'Tawakkal Sans' }}><b>Raj Shee.</b></span></h2>
                
                <hr/>
                <p> A Software Engineering student striving to achieve more every day </p>
                <hr/>

              <div className="social-links">
                {/* Gmail */}
                <a href="https://www.facebook.com/raj.hshee" rel="noopener norefereer" target="_blank">
                  <i class="fa fa-facebook-square" aria-hidden="true"></i>
                </a>
                {/* LinkedIn */}
                <a href="https://au.linkedin.com/in/raj-hritisha-shee" rel="noopener norefereer" target="_blank">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                {/* GitHub */}
                <a href="https://github.com/rshee" rel="noopener noreferer" target="_blank">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
                {/* Twitter */}
                <a href="https://twitter.com/rajhshee" rel="noopener norefereer" target="_blank">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
                </div>
              </div>

              <div className="copyright">
              <p> © 2019 Raj Shee </p>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
