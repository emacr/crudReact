import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Create() {
const [values, setValues]=useState({
nombre:'',
apellido:'',
email:''
}) 

const navigate = useNavigate();
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8084/users', values)
    .then(res =>{ 
        console.log(res);
        navigate('/') //me permite una vez click submit volver atras
    })
    .catch (err => console.log(err))
}

  return (
    <div className="container mt-4">
        <form onSubmit={handleSubmit}> 
            <h2>Agregue un usuario</h2>
            <div className='mb-2'>
                <label htmlFor=''>Nombre</label>
                <input type='text' placeholder='ingrese un nombre' className='form-control' 
                onChange={e => setValues ({...values,nombre: e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor=''>Apellido</label>
            <input type='text' placeholder='ingrese un apellido' className='form-control'
            onChange={e => setValues ({...values,apellido: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Correo</label>
                <input type='text' placeholder='ingrese un correo' className='form-control'
                onChange={e => setValues ({...values,email: e.target.value})}/>
            </div>
            <a href=''><button className='btn btn-success'>Submit</button><br></br><br></br></a>

        </form>
    </div>
  )
}

export default Create