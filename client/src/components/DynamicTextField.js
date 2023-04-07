import React, {useState} from 'react'

function DynamicTextField() {
  const [values, setValues] = useState([''])
  

  const addField = () => {
    setValues([...values, ''])
  }

  const removeField = (indexP) => {
    const newValue = values.filter((_, index) => index !== indexP);
    setValues(newValue);
  }

  const handleChange = (index, value) => {
    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // send values to server
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ values })
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      {values.map((value, index) => (
        <div key={index}>
          <label>
            Player {index + 1}:
            <input type="text" value={value} onChange={(event) => handleChange(index, event.target.value)} />
            <button type="button" onClick={(event) => removeField(index)}>Remove player</button>
          </label>
        </div>
      ))}
      <button type="button" onClick={addField}>Add player</button>
      <button type="submit">Submit</button>
    </form>
  )
}
export default DynamicTextField
