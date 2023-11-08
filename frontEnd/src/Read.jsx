import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';

function Read() {
    const {nombre}=useParams();
    const [users, setUsers]=useState([])
    useEffect(()=> {
        axios.get('http://localhost:8084/read/' +nombre)
        .then (res => {
            console.log(res)
            setUsers(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='container mt-4'>
        <div className='w-50 bg-white rounded p-3'>
            <div className='p-2'>
    <h1>Datos de usuario</h1>
    <h2>Nombre = {users.nombre}</h2>
    <h2>Apellido = {users.apellido}</h2>
    <h2>Correo = {users.correo}</h2>
    </div>
    <Link to="/" className='btn btn-primary me-2'>Volver</Link>
<Link to={`/edit/${users.nombre}`} className='btn btn-info'>Editar</Link>
        </div>
    </div>

  )
}

export default Read