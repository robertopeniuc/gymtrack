import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [ejercicios, setEjercicios] = useState ([]) 
  const [nuevoEjercicio, setNuevoEjercicio] = useState("")
  const [idEditando, setIdEditando] = useState (null)
  const [nombreEditado, setNombreEditado] = useState("")
  const [error, setError] = useState ("")
  const[errorEdicion, setErrorEdicion] = useState ("")

useEffect(() => {
  fetch("http://localhost:8080/exercises")
    .then((respuesta) => respuesta.json())
    .then((datos) => setEjercicios(datos))
    .catch((error) => console.error("Error al cargar ejercicios:", error))
}, [])
async function anadirEjercicio() {
  if (nuevoEjercicio.trim() === "") {
    setError("Introduce el nombre del ejericio")
    return
    
  }
setError("")
  try {
    const respuesta = await fetch("http://localhost:8080/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: nuevoEjercicio.trim() })
    })

    if (!respuesta.ok) {
      throw new Error("No se pudo guardar el ejercicio")
    }

    const ejercicioGuardado = await respuesta.json()

    setEjercicios([...ejercicios, ejercicioGuardado])
    setNuevoEjercicio("")
  } catch (error) {
    console.error("Error al crear el ejercicio:", error)
  }
}

async function eliminarEjercicio(id) {
  try {
    const respuesta = await fetch(
      `http://localhost:8080/exercises/${id}`,
      {
        method: "DELETE"
      }
    )

    if (!respuesta.ok) {
      throw new Error("No se pudo eliminar el ejercicio")
    }

    setEjercicios(
      ejercicios.filter((ejercicio) => ejercicio.id !== id)
    )
  } catch (error) {
    console.error("Error al eliminar el ejercicio:", error)
  }
}

async function guardarCambios() {
  if(nombreEditado.trim() === "") {
    setErrorEdicion("Introduce el nuevo nombre del ejercicio")
    return 
    
  }
  setErrorEdicion("")
  try {
    const respuesta = await fetch(
      `http://localhost:8080/exercises/${idEditando}`,
      {
        method: "PUT",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: nombreEditado.trim()})
      }
    )
    if (!respuesta.ok) {
      throw new Error("No se pudo modificar el ejercicio")
    }

    const ejercicioModificado = await respuesta.json()

    setEjercicios(
      ejercicios.map((ejercicio) =>
        ejercicio.id === idEditando
          ? ejercicioModificado
          : ejercicio
      )
    )
    setIdEditando(null)
    setNombreEditado("")
  } catch (error) {
    console.error("Error al modificar el ejercicio:", error)
  }
}

  return (
    <>
    <h1>GymTrack</h1>
    <p>Tu compañero de entrenamiento</p>
    <h2>Mis entrenamientos</h2>
    <div className="formulario-ejercicio">
    <input type="text" 
           placeholder="Nombre del ejercicio"
           value={nuevoEjercicio}
           onChange={(evento) => setNuevoEjercicio(evento.target.value)}
     />
     {error && <p className="mensaje-error">{error}</p>}
     <button onClick={anadirEjercicio}>
        Añadir ejercicio
     </button>
     </div>
    {ejercicios.map((ejercicio) => (
  <div className="ejercicio-card" key={ejercicio.id}>

    <div className="ejercicio-info">
      <span className="nombre-ejercicio">
        {ejercicio.name}
      </span>

      <div className="acciones-ejercicio">
        <button onClick={() => {
          setIdEditando(ejercicio.id)
          setNombreEditado(ejercicio.name)
          setErrorEdicion("")
        }}>
          Editar
        </button>

        <button
          className="boton-eliminar"
          onClick={() => eliminarEjercicio(ejercicio.id)}
          aria-label={`Eliminar ${ejercicio.name}`}
          title="Eliminar ejercicio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 6h18" />
            <path d="M8 6V4h8v2" />
            <path d="M19 6l-1 14H6L5 6" />
            <path d="M10 11v5" />
            <path d="M14 11v5" />
          </svg>
        </button>
      </div>
    </div>

    {idEditando === ejercicio.id && (
      <div className="formulario-edicion">
        <input
          type="text"
          placeholder="Nuevo nombre"
          value={nombreEditado}
          onChange={(evento) => {
            setNombreEditado(evento.target.value)
            setErrorEdicion("")
          }}
        />

        {errorEdicion && (
          <p className="mensaje-error">{errorEdicion}</p>
        )}

        <button onClick={guardarCambios}>
          Guardar cambios
        </button>
      </div>
    )}

  </div>
))}
    </>
   
  )
} export default App 