import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FormInput from '../FormInput/FormInput'
import './RoutineForm.scss'

const InitialState = {
    RoutineName: '',
    Description: '',
    Duration: '',
    Date: '',
    Time: '',
    Tasks: []
}

const RoutineForm = () => {
    const [formFields, setFormFields] = useState(InitialState)
    const {RoutineName, Description, Duration, Date, Time, Tasks} = formFields
    const navigate = useNavigate()

    const resetForm = () => {
        setFormFields(InitialState)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
        alert(`The Routine was created: ${RoutineName}`)
        resetForm()
        // navigate('/routinelist')
        } catch(e){
            console.log(e)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]:value})
    }


    return (
        <div className='Routine-container'>
            <div>
              <div className='Form-container'>
                <form className='form' onSubmit={handleSubmit}>
                    <FormInput
                        label='Routine Name'
                        inputOptions = {{
                            type: 'text',
                            name: 'RoutineName',
                            value: RoutineName,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                    <FormInput
                        label='Description'
                        inputOptions = {{
                            type: 'text',
                            name: 'Description',
                            value: Description,
                            onChange: handleChange,
                            required: false
                        }}
                        />
                    <FormInput
                        label='Duration'
                        inputOptions = {{
                            type: 'text',
                            name: 'Duration',
                            value: Duration,
                            onChange: handleChange,
                            required: false
                        }}
                        />
                    <FormInput
                        label='Date'
                        inputOptions = {{
                            type: 'text',
                            name: 'Date',
                            value: Date,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                    <FormInput
                        label='Time'
                        inputOptions = {{
                            type: 'text',
                            name: 'Time',
                            value: Time,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                    <FormInput
                        label='Tasks'
                        inputOptions = {{
                            type: 'text',
                            name: 'Tasks',
                            value: Tasks,
                            onChange: handleChange,
                            required: true
                        }}
                        />
                    <button onSubmit={handleSubmit}>Create Routine</button>
                </form>
              </div>
            </div>
        </div>
    )
}

export default RoutineForm
