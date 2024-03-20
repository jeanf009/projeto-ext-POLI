import '../../components/agendamentos.css'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


function Agendamentos() {

    const HomeNavigate = useNavigate();

    const handleLogout = () => {

        Cookies.remove('cpf');
        Cookies.remove('senha');
        // Cookies.remove('nome');

        HomeNavigate('/');
    }

    return (
        
        <div className="container-esquerda">

            <span>Bem-vindo!</span>
            <button onClick={handleLogout}>Sair</button>

        </div>
    )
}

export default Agendamentos