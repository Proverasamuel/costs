import styles from './Submitbtn.module.css'
function Submitbtn({text}) {
    return(
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
    )
}
export default Submitbtn