import React from 'react'

function onFormSubmit(e) {
    e.preventDefault();
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('6LcprtkcAAAAAGAxB-PwcCf61y76xb-N_G218n1O', {action: 'submit'}).then(function(token) {
        // Send form value as well as token to the server
        alert("Form Sent!")
      });
    });
  }
export default function ReCaptcha() {
        const [name, setName] = React.useState('');
        const [age, setAge] = React.useState('');
      
        return (
            <div className="App">
            <h4>This form is powered by reCAPTCHA</h4>
            <form id="demo-form">
              <input 
                    type="text" 
                    value={name} 
                    placeholder="Full Name" 
                    onChange={e => setName(e.target.value)} 
                    required
              /><br />
              <input 
                    type="number" 
                    value={age} 
                    placeholder="Age" 
                    onChange={e => setAge(e.target.value)} 
                    required 
              /><br />
              <button 
                onClick={e => onFormSubmit(e)}
                data-action='submit'>Submit</button>
                
            </form>
          </div>
        );
      }
      
    