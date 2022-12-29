import styles from './Header.module.css'


const  Header = (props) =>{
    
    // console.log(props)
    const {header} = props;
    return(
        <header className={styles.headerContainer}><h1>{header}</h1></header>
    )
}
export default Header;