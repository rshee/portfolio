import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: '#F7E5E4', fontFamily: 'Tawakkal Sans', fontSize: 35 }} to="/"><b>Raj Shee</b></Link>} scroll>
            <Navigation>
                <Link to="/about">about</Link>
                <Link to="/projects">tech</Link>
                <Link to="/contact">contact</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>


    </Layout>
</div>

  );
}
}

export default App;


