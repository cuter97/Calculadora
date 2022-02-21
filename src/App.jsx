import { useState } from "react"
import './style.scss'
import Boton from "./components/Boton"
import {ThemeProvider} from "styled-components"
import { darkBlue, lightGray, violet } from "./theme"
import { GlobalStyles } from "./components/GlobalTheme"
import { Display, Botones, Signos, Clear, Igual, Title, ThemeTitle } from "./components/Calculator.styled"

function App() {

  const themes = {darkBlue, lightGray, violet}

  const [disp, setDisp] = useState("")
  const [theme, setTheme] = useState(themes["darkBlue"])

  const mostrarDisp = (value) => {
    setDisp(disp + value)
  }

  const igual = () => {
    setDisp(eval(disp).toString())
  }

  const del = () => {
     setDisp(disp.slice(0,-1)) 
  }

  const reset = () => {
    setDisp(disp.slice(disp.length + 1))
  }

  const digitos = () => {
    const digits = []
    for(let i = 9; i > 0; i--){
      digits.push(<button onClick={() => mostrarDisp(i.toString())} key = {i}>{i}</button>)
    }
    return digits
  }

  const onChangeTheme = e => {
    const themeName = e.target.value
    setTheme(themes[themeName])
  }

  return (
    <ThemeProvider theme = {theme}>

      <div className="container">
        <div className="calculadora">

          <div className="header">
            <Title>calc</Title>
            <div className="boton-contenedor">
              <ThemeTitle>THEME</ThemeTitle>
              <Boton funtion = {onChangeTheme} />
            </div>
          </div>

          {/* display */}
          <Display>
              {disp || '0'}
          </Display>

          {/* operadores */}
          <div className="grid">
            
            {/* digitos */}
            <Botones className="grid-digitos grid-num">
              {digitos()}
            </Botones>
            
            <Signos className="grid-mas" onClick={() => mostrarDisp('+')}>+</Signos>
            <Signos className="grid-menos" onClick={() => mostrarDisp('-')}>-</Signos>
            <Signos className="grid-multi" onClick={() => mostrarDisp('*')}>x</Signos>
            <Signos className="grid-div" onClick={() => mostrarDisp('/')}>/</Signos>
            <Signos className="grid-cero" onClick={() => mostrarDisp('0')}>0</Signos>
            <Signos className="grid-punto" onClick={() => mostrarDisp('.')}>.</Signos>

            <Clear className="grid-del" onClick={del}>DEL</Clear>
            <Clear className="grid-res" onClick={reset}>RESET</Clear>
            <Igual className="grid-igual" onClick={igual}>=</Igual>
          </div>

        </div>
      </div>
      <GlobalStyles/>

    </ThemeProvider>
  );
}

export default App;
