import React from 'react';



const Main = () => {

    /* testing e.target.value */
    function setUrl(e) {
        document.getElementById('utm').innerHTML = e.target.value;  
    }  

    function setSource(e) {
        var parentNode = document.querySelector('#utm');
        parentNode.append("?utm_source=" + e.target.value);
        e.preventDefault();
    }  

    /* copy to clipboard */ 

      
    return (
        <main>
            <section>
                <h3>Create a Campaign Link with <a href="https://support.google.com/analytics/answer/1033863" target="__blank">UTM Parameters</a></h3>
                <p>Add UTM Parameters to your URL campaign and you can collect & track more efficient data in Google Analytics.</p>
                <form>
                    <fieldset >
                        <input type="text" name="url" placeholder="Enter URL incluiding the http(s) protocol" onKeyUp={setUrl}/>
                        <div>
                            <input type="text" name="source" placeholder="Campaign Source"  onKeyUp={setSource} />
                            <input type="text" name="medium" placeholder="Campaign Medium" />
                            <input type="text" name="name" placeholder="Campaign Name" />
                        </div>
                        
                        </fieldset>
                    <hr />
                    <fieldset>
                        <span id="utm" className="utm source">https://joanarijo.dev/?utm_source=google&utm_medium=banner&utm_campaign=promo</span>
                        <input type="submit" value="Copy Url" />
                        <input type="submit" value="Convert to Shortlink" />
                    </fieldset>
                    <hr />
                    <fieldset>
                        <span id="shorten">https://heroku.link/hg4587hd</span>
                        <input type="submit" value="Copy Url" />
                    </fieldset>
                </form>
                <span></span>
            </section>
        </main> 
     );
}
 
export default Main;


