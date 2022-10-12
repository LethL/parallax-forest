import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
    window.addEventListener("scroll", evt => {
        document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
    })

    return(
        <div className="app">
            <Header />
            <Main />
        </div>
    )
}

export default App;
