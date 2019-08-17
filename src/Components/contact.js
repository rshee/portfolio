import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Get in touch</h2>
            <hr/>
            <p style={{ width: '94%', textAlign: "justify" , margin: 'auto', paddingTop: '1em',  fontSize: 14 }}> Whether you find my work interesting or have any suggestions for me, feel free to get in touch! I’m always open to new ideas and skills. Please note that this portfolio website is under construction so I will be adding more soon. You can connect on social media via: </p>
         
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Tawakkal Sans'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    <b>rajh.shee@gmail.com</b>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Tawakkal Sans'}}>
                    <i className="fa fa-facebook-square" aria-hidden="true"/>
                    <b>facebook.com/raj.hshee</b>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Tawakkal Sans'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <b>linkedin.com/in/raj-hritisha-shee</b>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '40px', fontFamily: 'Tawakkal Sans'}}>
                    <i className="fa fa-twitter-square" aria-hidden="true"/>
                    <b>twitter.com/rajhshee</b>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;
