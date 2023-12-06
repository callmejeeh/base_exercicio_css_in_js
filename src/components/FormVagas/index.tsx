import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'
import Formulario, { Botao, Campo } from './style'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e: { target: { value: string } }) =>
          setTermo(e.target.value)
        }
        type="search"
      />
      <Botao type="submit">Pesquisar</Botao>
    </Formulario>
  )
}
export default FormVagas
