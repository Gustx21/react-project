import './style/Header.css';

function Header(props) {
    return (
        <header className="main" id='Header'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </header>
    )
}

export default Header;