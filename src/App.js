import react from 'react'
import Functions from './components/Functions'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import './App.css'



const App = () => {

    const clickHandlerFunction = text => {
        console.log("button.clicHandler", text)
    }
    console.log("render Calc")
    return (
        <main className='react-calculator'>

            <Result value={undefined} />

            <Numbers
                onClickNumber={number =>{

                    console.log("Click en number", number)
                }}
            />

            <Functions
                onContentClear={() =>
                    console.log("Clear")
                }
                onDelete={() =>
                    console.log("Delete")
                }
            />

            <MathOperations
                onClickOperation={operation =>
                    console.log("operation", operation)
                }
                onClickEqual={equal =>
                    console.log("Equal", equal)
                }
            />


        </main>)

}

export default App