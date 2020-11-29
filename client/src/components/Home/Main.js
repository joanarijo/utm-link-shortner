import React from 'react';

const Main = () => {
    
    return (
        <main>
            <section>
                <span></span>
                <h3>Create a campaign link with <a href="https://support.google.com/analytics/answer/1033863" target="__blank">UTM parameters</a></h3>
                <p>Add UTM Parameters to your URL campaign and you can collect & track more efficient data in Google Analytics.</p>
                <form>
                    <fieldset>
                        <input type="text" name="url" placeholder="Enter URL incluiding the http(s) protocol" />
                        <input type="text" name="source" placeholder="Campaign Source" />
                        <input type="text" name="medium" placeholder="Campaign Medium" />
                        <input type="text" name="medium" placeholder="Campaign Name" />
                    </fieldset>
                    <fieldset>
                        <span id="utm">utm link</span>
                        <input type="submit" value="Copy Url" />
                        <input type="submit" value="Convert to Shortlink" />
                    </fieldset>
                    <hr />
                    <fieldset>
                        <span id="shorten">shorten link</span>
                        <input type="submit" value="Copy Url" />
                    </fieldset>
                </form>
                <span></span>
            </section>
        </main> 
     );
}
 
export default Main;


