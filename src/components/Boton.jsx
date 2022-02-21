import { Container, Input, Label, Number } from "./Theme.styled"
import { withTheme } from "styled-components"

const Boton = ({funtion}) => {

  return (
    <Container>
      <Label value = {"darkBlue"}>
        <Number>1</Number>
        <Input defaultValue="darkBlue" onClick={funtion}/>
      </Label>

      <Label value = {"lightGray"}>
        <Number>2</Number>
        <Input  defaultValue="lightGray" onClick={funtion}/>
      </Label>

      <Label value = {"violet"}>
        <Number>3</Number>
        <Input  defaultValue="violet" onClick={funtion}/>
      </Label>
    </Container>
  )
}

export default withTheme(Boton)