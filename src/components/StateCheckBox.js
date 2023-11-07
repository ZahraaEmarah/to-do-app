import React, {useState} from 'react'

export const StateCheckBox = (props) => {
    const [checked, setChecked] = useState(props.completed)

    const handleCheck = (event) => {
        setChecked(event.target.checked)
        console.log(checked)
    }

    return (
        <div className="form-check">
            <input className="form-check-input me-0" type="checkbox" value={checked} id="flexCheckChecked1" aria-label="..." onClick={handleCheck}/>
        </div>
    )
}
