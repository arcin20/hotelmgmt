import { useState } from "react";

const CheckInForm = () => {

  const [inputFields, setInputFields] = useState([
      {vorname: '',
       nachname: '',
       ausweisnummer: '',
       geburtstag: ''
       
    }
  ])

  const formValidation=(formVal)=>{
    const data = [...formVal]
    var re = /\S+@\S+\.\S+/;
    let valid = true
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if(data[index].vorname == "") {
        data[index].vornameCheck = "name required"
        data[index].vornameLengthCheck = ""
        valid = false
      }
      
      else{
        data[index].vornameCheck = ""
        data[index].vornameLengthCheck = ""
        valid = true
      

      
      }
      } 
    setInputFields(data)
    return valid

    }
  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }

  const addFields = (e) => {
    e.preventDefault();
    const newField =  {vorname: '',
    nachname: '',
    ausweisnummer: '',
    geburtstag: ''

 }
 setInputFields([...inputFields, newField])
  }

  const removeFields = (index ,e) => {
    e.preventDefault();
    const data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }


  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields)
    const errorRes = formValidation(inputFields)
   console.log("errorRes", errorRes)
  }

  
    return (



        <div className="form-container">
          <form > 
            {inputFields.map((input, index)  => { 
             return (
            <div key={index}>
         
          <input id="input1" type="text" required name="vorname" placeholder="Vorname" value={input.vorname} onChange={event => handleFormChange(index, event)}  />
          <div style={{color:'red'}}>{input.vornameCheck}<br/>{input.vornameLengthCheck}</div>
          <input id="input2" type="text" required name="nachname" placeholder="Nachname" value={input.nachname} onChange={event => handleFormChange(index, event)} required/>
          <input id="input5" type="text" required name="ausweisnummer" placeholder="Ausweisnummer" value={input.ausweisnummer}  onChange={event => handleFormChange(index, event)} required />
          <label htmlFor="birthday">Geburtstag:</label>
          <input id="input4" type="date" required name="geburtstag" value={input.geburtstag || ""} onChange={event => handleFormChange(index, event)}  />
          
          <button onClick={(e) => removeFields(index,e)}>-</button>
          
        </div>

        
             ) })}
             
        </form>

        <button onClick={addFields}>+</button>
        <button onClick={submit}>CHECKIN</button>
            
        </div>
            
      
    
      )
    
    
    
}

export default CheckInForm;