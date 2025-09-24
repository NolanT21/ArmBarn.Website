
function Features() {

    return (

        <main>

            <div className = "feature-layout">

                <div className = "feature-container">

                    <h4> Pitch Tracking </h4>

                    <h2> No more paper charts</h2>

                    <p className = "feature-description"> 
                        Charting pitchers has never been easier, follow the prompts and let everything else take care of itself. Change pitchers without needing to start a new chart. Enter game information and edit pitcher profiles as needed. 
                        <br></br>
                        <br></br>
                        Use the scoreboard area to keep track of what has been recorded. Check the count, undo the previous event, end/save games and more. 
                    </p>

                </div>

                <img className = "feature-image" src="/PlainDashboard.png" alt="Plain Dashboard" />

            </div>

            <div className = "feature-layout">

                <div className = "feature-container">

                    <h4> Detailed Stats </h4>

                    <h2> Who's on first </h2>

                    <p className = "feature-description"> 
                        ArmBarn tabulates all the statistics you could ask for. View the team summary with player breakdowns, filter events for in-depth analysis, and view a line-by-line summary of every event recorded. 
                    </p>

                </div>

                <div className = "overlay-image-container">
                    <div className = "underlay-image">
                        <img className = "feature-image" src="/StatsRight.png" alt="Stats Right" />
                    </div>

                    <div className = "overlay-image">
                        <img className = "feature-image" src="/StatsLeft.png" alt="Stats Left" />
                    </div>
                </div>


            </div>

            <div className = "feature-layout">

                <div className = "feature-container">

                    <h4> Saving and sharing data </h4>

                    <h2> Safe at home</h2>

                    <p className = "feature-description"> 
                        Keep all your pitching data in one location. Store pitcher profiles and save charted games, viewable at anytime. Sync data to share across devices and keep data consistent. 
                    </p>

                </div>

                <div className = "save-features-image-container">
                    <img className = "save-feature-image" src="/Pitchers.png" alt="Saved Pitchers" />
                    <img className = "save-feature-image" src="/SavedGames.png" alt="Saved Games" />
                </div>

            </div>

        </main>

    );

}

export default Features