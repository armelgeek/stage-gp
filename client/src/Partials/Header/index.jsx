import React from 'react';
import {Navigation,Logo,Url,Item,Link} from './Style';

const Header = () => {
    return <Navigation>
          <Logo>
              Fastle
          </Logo>
          <Url>
              <Item>
                  <Link href="">Accueil</Link>
              </Item>
              <Item>
                  <Link href="/nos-projets">Projects</Link>
              </Item>
              <Item>
                  <Link href="">Link 2</Link>
              </Item>
              <Item>
                  <Link href="">Link 3</Link>
              </Item>
              <Item>
                  <Link href="">Link 4</Link>
              </Item>
          </Url>
        </Navigation>
       
};
export default Header;