import axios from 'axios'
import React, {useEffect} from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function home() {
  const [data, setData] = useState([])
    useEffect (()=>{
        axios.get('http://localhost:8084/')
        //.then (res => console.log(res))
        .then (res => setData(res.data))
        .catch(err => console.log(err));
      },[])

const handleDelete = (nombre) => {
  axios.delete ('http://localhost:8084/delete/' +nombre)
  .then (res => {
    location.reload();
  })
  .catch(err => console.log(err));
}

  return (
<div className="container mt-4">
  <h2>Usuarios</h2>
  <div className='d-flex justify-content-end' >
    <Link to='/create' className='btn btn success'>Agregar usuario +</Link>
  </div>
      <table className="table">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Email</th>
      <th>Opciones</th>
    </tr>
  </thead>
  <tbody>
    {data.map((users, index) => {
      return <tr key= {index}>
<td>{users.nombre}</td> 
<td>{users.apellido}</td> 
<td>{users.correo}</td> 
<td>
<Link to={`/read/${users.nombre}`} className="btn btn-primary">Ver</ Link>
<Link to={`/edit/${users.nombre}`} className="btn btn-primary">Editar</Link>
                <button onClick={() => handleDelete (users.nombre)} className="btn btn-danger">Borrar</button>
</td>

      </tr>
     }   
    )
   }
  </tbody>
  </table>
  </div>
    )
}

export default home

