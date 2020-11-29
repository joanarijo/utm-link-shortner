import React from 'react';
import { Link } from "react-router-dom";


const Sidebar = () => {
    
    return (
        
        <aside>
            <h3>Latest Shortlinks</h3>
            <ul>
                <li><p>Original: <a href="https://www.example.com">https://www.example.com</a></p></li>
                <li><p>Shortlink: <a href="https://www.example.com">https://www.example.com</a></p></li>
            </ul>
            <ul>
                <li><p>Original: <a href="https://www.example.com">https://www.example.com</a></p></li>
                <li><p>Shortlink: <a href="https://www.example.com">https://www.example.com</a></p></li>
            </ul>
            <ul>
                <li><p>Original: <a href="https://www.example.com">https://www.example.com</a></p></li>
                <li><p>Shortlink: <a href="https://www.example.com">https://www.example.com</a></p></li>
            </ul>
            <hr/>
            <h3>Shortlinks Archive</h3>
              <p>Check <Link to="/archive">All Shortlinks</Link> created so far.</p>
        </aside>
        
     );
}
 
export default Sidebar;