import styles from './NovoProjeto.module.css'
import ProjetoForm from '../projeto/ProjetoForm'
function NovoProjeto() {
    return (
      <div className={styles.novoProjeto_container}>
        <h1>Crie seu projeto</h1>
        <p>Crie seus projetos para depois adicionar os serviços</p>
        <p>Formulário</p>
        <ProjetoForm btnText="Criar Projeto"/>
      </div>
    )
}
export default NovoProjeto