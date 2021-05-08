import React from 'react';
import Footer from './Footer';
import Header from './Header';
import {Banner,CallAction,Title,SubTitle,ImageBanner} from './Style';
const Home = () => {
    return <div> 
          <Header/>
           <Banner>
               <CallAction>
                   <Title>Ceci est le titre</Title>
                   <SubTitle>ceci est le sous titre</SubTitle>
               </CallAction>
               <ImageBanner>
                  <img src="banner.png" alt="" srcset=""/>
               </ImageBanner>
           </Banner>
           <Footer/>
        </div>
};
export default Home;