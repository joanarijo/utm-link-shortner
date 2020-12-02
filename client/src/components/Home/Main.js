import React, { useRef, useState } from 'react';
urlurlimport axios from 'axios';
import validator from 'validator';


const Main = () => {


    /* insert input values into textarea */

    const [state, setState] = useState({
        url: "",
        source:"",
        medium: "",
        name:  "",
    });
    
    function handleChange(e) {
        document.getElementById("utm").style.color = "#333333";
        document.getElementById("error").innerHTML = "";
        document.getElementById("hidden").style.display = "none";
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

    /* get changed utm url and convert it to shortlink */


    function handleSubmit(e) {
        e.preventDefault();
        const value = document.getElementById("utm").value;
        const validUrl = validator.isURL(value, {
            required_protocol: true
        });
        if(!validUrl){
            alert('Please, make sure the url is correct and includes the http(s) protocol.');
        } else {
            axios.post('http://localhost:5000/api/shorten',{
                url: value
            })
            .then( res => {
                console.log(res);
                if(res.data.statusText === "Duplicated"){
                    document.getElementById("error").innerHTML = res.data.error;
                }else{
                    document.getElementById("hidden").style.display = "block";
                    document.getElementById("shortlink").value = 'http://heroku.link/' + res.data.hash;
                };
            }).catch(err => console.log(err));
        }
    };

    /* copy to clipboard */ 

    const [copyUtm, setCopyUtmSuccess] = useState('');
    const textAreaUtm = useRef(null);

    function copyUtmToClipboard(e) {
        e.preventDefault();
        textAreaUtm.current.select();
        document.execCommand('copy');
        setCopyUtmSuccess(
            'Url copied.',
            setTimeout(function() {
                document.getElementById('copy').style.display = 'none';
              }, 2000)
        );
      };

    const [copyShortlink, setCopyShortlinkSuccess] = useState('');
    const textAreaShortlink = useRef(null);
  
    function copyShortlinkToClipboard(e) {
        e.preventDefault();
        textAreaShortlink.current.select();
        document.execCommand('copy');
        setCopyShortlinkSuccess('Shortlink copied.',
            setTimeout(function() {
                document.getElementById('copy').style.display = 'none';
              }, 2000)
        );
    };


      
    return (
        <main>
            <section>
                <h3>Create a Campaign Link with <a href="https://support.google.com/analytics/answer/1033863" target="__blank">UTM Parameters</a></h3>
                <p>Add UTM Parameters to your URL campaign and you can collect & track more efficient data in Google Analytics.</p>
                <form onSubmit={handleSubmit}>
                    <fieldset>
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
                        <input type="submit" value="Convert to Shortlink" />
                        <span id="copy">{copyUtm}</span>
                    </fieldset>
                    <hr />
                    <span id="error"></span>
                    <fieldset id="hidden">
                    <textarea id="shortlink" ref={textAreaShortlink} value="" />
                    <input type="button" value="Copy Url" onClick={copyShortlinkToClipboard}/>
                    <span id="copy">{copyShortlink}</span>
                    </fieldset>
                </form>
                <span></span>
            </section>
        </main> 
     );
}
 
export default Main;


