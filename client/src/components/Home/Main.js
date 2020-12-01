import React, { useRef, useState } from 'react';



const Main = () => {

    /* insert input values into textarea */

    const [state, setState] = useState({
        url: "",
        source:"",
        medium: "",
        name:  "",
    });
    
    function handleChange(e) {
        const value = e.target.value;


        setState({
            ...state,
            [e.target.name]: value
            /*url: value,
            source:"/?utm_source=" + value,
            medium: "&utm_medium=" + value,
            name:  "&utm_campaign=" + value*/
  
        });
  
    }

    /* copy to clipboard */ 

    const [copyUtm, setCopyUtmSuccess] = useState('');
    const textAreaUtm = useRef(null);

    function copyUtmToClipboard(e) {
        textAreaUtm.current.select();
        document.execCommand('copy');
        setCopyUtmSuccess('Url copied!');
      };

    const [copyShortlink, setCopyShortlinkSuccess] = useState('');
    const textAreaShortlink = useRef(null);
  
    function copyShortlinkToClipboard(e) {
        textAreaShortlink.current.select();
        document.execCommand('copy');
        setCopyShortlinkSuccess('Url copied!');
    };


      
    return (
        <main>
            <section>
                <h3>Create a Campaign Link with <a href="https://support.google.com/analytics/answer/1033863" target="__blank">UTM Parameters</a></h3>
                <p>Add UTM Parameters to your URL campaign and you can collect & track more efficient data in Google Analytics.</p>
                <form>
                    <fieldset >
                        <input type="text" name="url" placeholder="Enter URL incluiding the http(s) protocol" value={state.url} onChange={handleChange}/>
                        <div>
                            <input id="teste" type="text" name="source" placeholder="Campaign Source" value={state.source} onChange={handleChange}/>
                            <input type="text" name="medium" placeholder="Campaign Medium" value={state.medium} onChange={handleChange} />
                            <input type="text" name="name" placeholder="Campaign Name" value={state.name} onChange={handleChange} />
                        </div>
                        
                        </fieldset>
                    <hr />
                    <fieldset>
                        <textarea id="utm" ref={textAreaUtm} value={state.url + "/?utm_source=" + state.source + "&utm_medium=" + state.medium + "&utm_campaign=" + state.name} />
                        <input type="button" value="Copy Url" onClick={copyUtmToClipboard}/>
                        <input type="button" value="Convert to Shortlink" />
                        {copyUtm}
                    </fieldset>
                    <hr />
                    <fieldset>
                    <textarea id="utm" ref={textAreaShortlink} value="https://heroku.link/hg4587hd" />
                    <input type="button" value="Copy Url" onClick={copyShortlinkToClipboard}/>
                        {copyShortlink}
                    </fieldset>
                </form>
                <span></span>
            </section>
        </main> 
     );
}
 
export default Main;


