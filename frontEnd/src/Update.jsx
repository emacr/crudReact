import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

function Update() {
    const {nombre} = useParams();
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:8084/read/' +nombre)
        .then (res => {
            console.log(res)
            setValues({... values, nombre: res.data[0].nombre, apellido: res.data[0].nombre, email: res.data[0].email});
        })
        .catch(err => console.log(err))
    }, [])

    
const [values, setValues] = useState({
    nombre: 'Nombre inicial',
    apellido: 'Apellido inicial',
    email: 'Email inicial',
  });
  
        const handleUpdate = (event) =>{
            event.preventDefault();
            axios.put('http://localhost:8084/update/' +nombre, values)
            .then(res => {
                console.log(res)
                navigate('/')
            }).catch(err => console.log(err));
        }

  return (
<div className="container mt-4">
        <form onSubmit ={handleUpdate}> 
            <h2>Editar un usuario</h2>
            <div className='mb-2'>
                <label htmlFor=''>Nombre</label>
                <input type='text' placeholder='ingrese un nombre' className='form-control' 
                value={values.nombre} onChange={e => setValues ({...values,nombre: e.target.value})}/>
            </div>
            <div className='mb-2'>
            <label htmlFor=''>Apellido</label>
            <input type='text' placeholder='ingrese un apellido' className='form-control'
           value={values.apellido} onChange={e => setValues ({...values,apellido: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Correo</label>
                <input type='text' placeholder='ingrese un correo' className='form-control'
              value={values.email}  onChange={e => setValues ({...values,email: e.target.value})}/>
            </div>
            <a href=''><button className='btn btn-success'>Actualizar</button><br></br><br></br></a>

        </form>
    </div>  )
}

export default Update