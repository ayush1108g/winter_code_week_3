import classes from './input.module.css';

export default function Input1(props){
    return(
        <div className={classes.input}>
            <label>{props.label}</label>
            <input />
        </div>
    )
}

