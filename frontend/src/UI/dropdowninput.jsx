
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import css from './dropdown.module.css';
export default function Dropdowninput(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    return (
        <div className={css.input}>
            <label >{props.label}</label>
            <Dropdown  value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={props.list} optionLabel="name" 
                 className={css.dropdown}/>
        </div>
    )
}
        