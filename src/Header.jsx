import { Link } from "react-router-dom";

function Header() {

    return(

        <header>

            <Link to = "/">
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                <img src = "/ElToro.png" alt="ElToro" className="header-logo" />

                <div style = {{ display: "inline", margin: 0, padding: 8}}>

                    <h3 className = "header-title" style={{ margin: 0, marginBottom: "2px"}}> ArmBarn </h3>
                    <p className = "header-subtitle" style={{ margin: 0 }}> Modern Pitch Charting </p>

                </div>
                

            </div>
            </Link>

        </header>

    );

}

export default Header