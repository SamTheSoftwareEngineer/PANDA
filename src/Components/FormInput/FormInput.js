import './FormInput.scss'

const FormInput = ({label, inputOptions}) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions}/>
            {label && (
                <label className="label" shrink={inputOptions.value.length}>{label}</label>
            )}
        </div>
    )
}

export default FormInput
