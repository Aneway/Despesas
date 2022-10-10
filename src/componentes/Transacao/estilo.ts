import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Conteiner = styled.View`
    background-color: lightblue;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 14px;
    `
export const Titulo = styled.Text`
    font-size: 18px;
    `

export const Total = styled.Text`
    font-size: 20px;
    margin-top: 5px;
`
export const Rodape = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 28px;
`

export const Categoria = styled.View`
    flex-direction: row;
    align-items: center;
    `

export const Icone = styled(Icon)`
    font-size: 20px;
`

export const CategoriaNome = styled.Text`
    font-size: 20px;
    margin-left: 12px;
`

export const Data = styled.Text`
    font-size: 16px;

`
