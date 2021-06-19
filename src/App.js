import React, { useState } from 'react'
import Functions from './components/Functions'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import './App.css'



const App = () => {
    // arrayTextoFuncionModificaTexto => ["", funcion]
    //1er posición: valor (que inicialmente es el valor por defecto
    //2da posición: función que me va a permitir modificar el valor por defecto
    // [xxxx], [setxxxx]
    const [stack, setStack] = useState("")

    console.log("render Calc")
    return (
        <main className='react-calculator'>

            <Result value={stack} />

            <Numbers
                onClickNumber={number => {

                    console.log("Click en number", number)

                    setStack(`${stack}${number}`)
                }}
            />

            <Functions
                onContentClear={() => {
                    console.log("Clear")
                    setStack("")
                }}
                onDelete={() => {
                    if (stack.length > 0){
                        const newStack = stack.substring(0, stack.length - 1)
                        console.log("Delete", newStack)
                        setStack(newStack)
                    }
                }}
            />

            <MathOperations
                onClickOperation={operation => {
                    console.log("operation", operation)
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal", equal)
                    setStack(`${stack}${equal}`)
                }}

            />


        </main>)

}

export default App