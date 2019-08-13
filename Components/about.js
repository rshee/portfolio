import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          
          <Cell col={6}>
            <h2>System.out.println<b> ("ABOUT ME") ;</b></h2>
            <hr/>
            <p style={{ width: '100%', margin: 'auto', paddingTop: '1em'}}>I’m a software engineering student by day and a passionate lover of the arts by night. I’d like to consider myself a novice in this big world. Automation, Blockchain technologies and information security are some of my major interests. With prior industry experience, I wish to delve deeper into many more technology fields to expand my expertise. As much as technology excites me, so does my yearning passion for all my artistic hobbies. I wholeheartedly enjoy indulging in all things that are creative. A few fun facts about me; I can play 7 instruments, sing, dance in 3 styles (Odissi, Salsa, Bollywood), play tennis and soccer, paint and speak about 5 languages (I used to be able to speak 17 languages back in grade 7). I genuinely believe that my continuous inner curiosity, dedication and creativity help me to learn and achieve more. What truly drives me to invest my time, effort and love for everything that I do stem from my passion and the desire to explore. A passion for the intelligence of homo sapiens, for the reverberant rhythms of music, for the unstoppable beats of dance and for the aesthetics of arts. So yep, that is pretty much Raj in a nutshell!</p>
         
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default About;
