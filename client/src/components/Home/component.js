import React from 'react';
import Main from './Main';
import Sidebar from './Sidebar';

const Home = (props) => {

    return (
        <React.Fragment>
            <Main />
            <Sidebar list={props.list} />
        </React.Fragment>
     );
}
 
export default Home;
