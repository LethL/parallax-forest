import "./Header.css";

function Header() {
    return(
        <header className="header">
            <div className="header__content">
                <div className="header__content-info">
                    <p className="header__content-caption">Welcome to Parallax</p>
                    <h1 className="header__content-title">Fairy Forest</h1>
                </div>
                <div className="header__content-layer header__content-layer-back"></div>
                <div className="header__content-layer header__content-layer-middle"></div>
                <div className="header__content-layer header__content-layer-front"></div>
            </div>
        </header>
    )
}

export default Header;
