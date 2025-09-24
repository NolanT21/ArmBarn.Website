
function LandingArea() {

    return(

        <main>

            <div className = "landing-container">

                <div className = "landing-description">

                    <h1>Level Up your Pitch Charting</h1>

                    <p >
                        Ditch the paper charts and start tracking your pitching appearances in a modern style. Get an abundance of metrics, available in real time. Store pitcher profiles and save games, keeping all of your data in one location. 
                    </p>

                    <a href="https://apps.apple.com/us/app/armbarn/id6503445937">
                        <img src="/DownloadButton.svg" className="download-button" alt="Download Button" />
                    </a>

                </div>

                <div className = "landing-image-container">

                    <img className = "phone-image-left" src="/MainDashboard.png" alt="Home Screen" />

                    <img className = "phone-image-right" src="/InGameStats.png" alt="In-Game Stats Screen" />

                </div>

            </div>


        </main>

    );

}

export default LandingArea;