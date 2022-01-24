import React, { useEffect, useState } from 'react'

import firebaseApp from '../Credenciales'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore'

const db = getFirestore(firebaseApp)


const Fibra = () => {

    const valorInicial = {
        nombre: '',
        descripcion: '',
        url: ''
    }
    
    const [alimento, setAlimento] = useState(valorInicial)
    const [lista, setLista] = useState([])
    
    const capturarInputs = (e)=>{
        const {name, value} = e.target;
        setAlimento({...alimento, [name]:value})
    }
    
    // funcion para almacenar la informacion en firebase
    const almacenarInfo = async(e)=>{
        e.preventDefault();
        // console.log(alimento);
        try {
            await addDoc(collection(db, 'fibras'),{
                ...alimento
            })
        } catch (error) {
            console.log(error);
        }
        setAlimento({...valorInicial})
    }
    
    // logica para la peticion get a firebase
    useEffect(()=>{
        const getLista = async()=>{
            try {
                const querySnapshot = await getDocs(collection(db, 'fibras'))
                const docs = []
                querySnapshot.forEach((doc)=>{
                    docs.push({...doc.data(), id:doc.id})
                })
                setLista(docs)
            } catch (error) {
                console.log(error);
            }
        }
        getLista()
    },[lista])
    
    // funcion para eliminar alimentos
    const eliminarDoc = async(id)=>{
        await deleteDoc(doc(db, 'fibras', id))
    }
    

    return (
        <div className='row'>
            <div className="col-md-4">
          {/* aqui va el formulario */}
          <div className="card card-body">
            <h2 className="text-center mb-4">Ingresar el alimento</h2>
            <form onSubmit={almacenarInfo}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ingresar el nombre"
                  className="form-control"
                  name="nombre"
                  value={alimento.nombre}
                  onChange={capturarInputs}
                  required
                />
              </div>

              <div className="form-group mt-2">
                <textarea
                  name="descripcion"
                  rows="3"
                  placeholder="ingresar la descripcion"
                  className="form-control"
                  value={alimento.descripcion}
                  onChange={capturarInputs}
                ></textarea>
              </div>

              <div className="form-group mt-2">
                <input
                  type="text"
                  placeholder="ingresar la url"
                  className="form-control"
                  name="url"
                  value={alimento.url}
                  onChange={capturarInputs}
                />
              </div>

              <button className="btn btn-primary form-control mt-2">
                Guardar
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          {/* aqui va la lista de nuestros alimentos */}
          <h2 className="text-center mb-4">
            Lista de alimentos ricos en Fibras
          </h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Url</th>
                <th scope='col'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((list) => (
                <tr key={list.id}>
                  <td>{list.nombre}</td>
                  <td>{list.descripcion}</td>
                  <td>{list.url}</td>
                  <td><button className='btn btn-danger' onClick={()=>eliminarDoc(list.id)}>Eliminar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    )
}

export default Fibra
