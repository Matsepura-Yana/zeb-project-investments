import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

const Header = () => {
const location = useLocation()

return (
    <header className="header">
        <a href="/home" className="logo-link"><img src={logo} alt="Logo" height={100}/></a>
        <h1 className='dashboard-title'>Investment Dashboard</h1>
    </header>
)
}

export default Header