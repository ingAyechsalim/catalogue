import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav= {
    position: 'fixed',
      backgroundColor: 'rgba(0,0,0,.5)',
         zIndex:'99',  
         hight:'50px',
         width:'100%',
         display: 'flex',
         justifyContent:'space-between',
         fontSize: '15px'
         
  
  }
  
  const SigleImage={
    float:'left',
    width:'80px',
    hight:'50px',
   marginTop:'-20px',
   overflow:'hidden',
    }

const Navbar = () => {
                    return( 
            <div style={Nav} >
               <NavLink to="/"><img style={SigleImage}  src={require("./images/sigle.png")} alt='sigle application'/></NavLink>   
               <NavLink style={{  textDecoration: 'none', paddingTop:'15px',color:'white'}}  to="/">HOME</NavLink>
               <NavLink style={{  textDecoration: 'none',paddingTop:'15px',marginRight:'50px',color:'white'}}  to="/WishList">FAVORIS</NavLink>
                </div>
                    )}
                    export default Navbar;