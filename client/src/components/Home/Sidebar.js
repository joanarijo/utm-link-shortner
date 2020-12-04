import React from 'react';
import { Link } from "react-router-dom";


const Sidebar = (props) => {
    const list = props.list.slice(0,4);
    const renderLatestList = list.map((url, index) => {
        return <ul key={index}>
                <li>Original: <a href={url.url} target='_blank'  rel='noreferrer'>{url.url}</a></li>
                <li>Shortlink: <a href={"http://www.heroku.link/" + url._id} target='_blank' rel='noreferrer'>{"http://www.heroku.link/" + url._id}</a></li>
            </ul>;
   } );
    return (
        
        <aside>
            <div>
                <h3>Latest Shortlinks</h3>
                {renderLatestList}
                <hr/>
                <h3>Shortlinks Archive</h3>
                <p>Check <Link to="/archive">All Shortlinks</Link> created so far.</p>
            </div>
        </aside>
        
     );
}
 
export default Sidebar;