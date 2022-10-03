import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Conteiner = styled.View `
    background-color: #E0D9F6;
    width: 300px;
    border-radius: 5px;
    padding: 20px;
    margin-left: 16px;
    margin: 12px;

`
export const Cabecalho = styled.View `
    margin-top: 6px;
    flex-direction: row;
    justify-content: space-between;
`

export const Titulo = styled.Text `
    font-size: 18px;
    font-weight: 600;
`

export const Icone = styled(Icon) `
    font-size: 28px; 
 `

export const Rodape = styled.View `
    margin-top: 36px;
    margin-bottom: 6px;
`

export const Total = styled.Text `
   font-size: 36px;
   font-weight: 600;
`

export const UltimaTransacao = styled.Text `
   font-size: 16px;
`