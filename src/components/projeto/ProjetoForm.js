import {useState} from 'react'
import { useEffect} from 'react'
import styles from './Projeto.module.css'
import Select from '../form/Select'
import Input from '../form/Input'
import Submitbtn from '../form/Submitbtn'
function ProjetoForm({btnText}) {
    const [categorias, setCategorias] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/categorias", {
        method: "GET",
        headers: {
            'Content-Type':'Application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategorias(data)
        })
        .catch((err) => console.log(err))

    }, [])
    return(
        <form  className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
            />
            <Select 
                name='id_categoria' 
                text="Selecione a categoria" 
                options={categorias}
            />
            <Submitbtn text={btnText}/>
                        
       </form>
    )
}
export default ProjetoForm