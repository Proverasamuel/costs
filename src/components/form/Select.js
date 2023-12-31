import styles from './Select.module.css'
function Select({text, options, handleOnChange, value, name}) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.nome}</option>
                ))
                }
            </select>
        </div>
    )
}
export default Select