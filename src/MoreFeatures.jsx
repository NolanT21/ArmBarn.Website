
function MoreFeatures() {

    return(
        <main>

            <div className = "more-features-background">

                <h2 className = "more-features-header"> And more... </h2>

                <div className = "more-features-container">

                    <div className = "more-features-section">   

                        <h4> Privacy </h4>

                        <p> 
                            Your data is only accessible to you. ArmBarn never sells your data.
                            Feel secure that your information is only accessible to you.
                        </p>

                    </div>

                    <div className = "more-features-section">   

                        <h4> Ad-free </h4>

                        <p> 
                            Your focus should be on the field, not clicking through ads and dismissing popups. 
                        </p>

                    </div>

                    <div className = "more-features-section">   

                        <h4> Works Anywhere </h4>

                        <p> 
                            At your home-field or out in tim-buck-too, no internet connection required. All data can be synced at a later time. 
                        </p>

                    </div>

                </div>

                <div className = "download-container"> 
                        
                    <h2> Start Charting Today with Armbarn</h2>

                    <p> From rec-leagues to the pros, ArmBarn is your companion to streamline your pitch charting process. </p>

                    <p> Avaliable on iOS</p>

                    <a href="https://apps.apple.com/us/app/armbarn/id6503445937">
                        <img src="/DownloadButton.svg" className="download-button" alt="Download Button" />
                    </a>
                    
                </div>

            </div>

        </main>
    );

}

export default MoreFeatures