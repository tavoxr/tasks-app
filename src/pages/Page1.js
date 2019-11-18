import React from 'react';
import Navbar from '../components/Navbar'
import '../styles/page1.css';
import logo from '../logo.svg';

class Page1 extends React.Component{
    render(){
        return(

            <div className="page1">
                <h1 className='display-3'>Navegacion</h1>      
                <Navbar/>
                <img src={logo} alt='logoReact' className='App-logo'/>
            </div>
            


        );
    }
}

export default Page1;