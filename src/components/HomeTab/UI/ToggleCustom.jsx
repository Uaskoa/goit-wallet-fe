import './stylestoggle.css'
import { useState } from 'react';
import { Formik, Form, useField } from 'formik';
// const ToggleCustom = ({type, setType, onHandleChange})=>{
  const ToggleCustom = ({ ...props }, )=>{

const [field] = useField({ ...props } );

const [colorType, setColorType] = useState('');
const colorChange=(e)=>{
  setColorType(e.target.checked)
}
// console.log(colorType)





return (
    <div className="toggleContainer" >
          <div className="chooseTypeToggle">
    <label htmlFor="toggle-input" className="toggle" >
    {/* <span className="income">Доход</span> */}
    <span style={{
color: colorType===true ? 'black' : '#24CCA7',
}}>Доход</span>

      <input type="checkbox" onClick={e=>colorChange(e)} className="toggle__input" id="toggle-input" {...field} {...props} />
      <div className="toggle__bar">
        <div className="toggle__spin"></div>
      </div>
      <span className="outcome">Расход</span>
    </label>

    </div>
    </div>

);
}


export default ToggleCustom;