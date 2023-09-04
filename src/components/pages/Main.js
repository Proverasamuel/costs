import styles from './Main.module.css'
import savings from '../../img/savings.svg'
import Linkbutton from '../layout/Linkbutton'
function Main() {
    return (
        <section className={styles.home_container}>
            <h1> 
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <Linkbutton to='/NovoProjeto' text="Criar Projeto"/>
            <img src={savings} alt="Costs"></img>
        </section>
    )
}
export default Main