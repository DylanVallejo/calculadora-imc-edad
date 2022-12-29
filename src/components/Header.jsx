import styles from './Header.module.css'

import {useNavigate} from 'react-router-dom';

const  Header = (props) =>{
    const navigate = useNavigate();
    // console.log(props)
    const {header} = props;
    return(
        <header className={styles.headerContainer}><h1>{header}</h1>
        
        {/* onClick={()=>{navigate('details/'+ item._id)}} */}
        <button onClick={()=>{navigate('/age')}}>Calcular edad</button>
        <button onClick={()=>{navigate('/masa')}}>Calcular edad</button>
        </header>
    )
}
export default Header;