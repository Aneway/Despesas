import React from 'react'
import { Conteiner, Cabecalho, Titulo, Icone, Rodape, Total, UltimaTransacao} from './estilo'

interface Props {
    icone: string;
    titulo: string;
    total: string;
    ultimaTransacao: string;
}

const icones ={
    entrada: '',
    saida: '',
    total: ''
}

export function Painel({icone, titulo, total, ultimaTransacao}: Props){
    return(
        <Conteiner>
            <Cabecalho>
               <Titulo>{titulo}</Titulo>
               <Icone name={icone}></Icone>
            </Cabecalho>
            <Rodape>
                <Total>{total}</Total>
                <UltimaTransacao>{ultimaTransacao}</UltimaTransacao>
            </Rodape>
            
        </Conteiner>
    )
}