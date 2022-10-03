import React from 'react'
import { Painel } from '../../componentes/Painel'
import {Conteiner, 
    Cabecalho, 
    Paineis, 
    Transacoes,
    UsuarioConteiner,
    UsuarioInformacoes,
    Foto,
    Usuario,
    UsuarioMensagem,
    UsuarioNome,
    Icone,
} from './estilo'
import {} from './estilo'


export function Inicial(){
    return(
        <Conteiner>
            <Cabecalho>
                <UsuarioConteiner>
                    <UsuarioInformacoes>
                        <Foto
                            source={{uri:'https://avatars.githubusercontent.com/u/89093823?v=4'}}
                        />
                        <Usuario>
                            <UsuarioMensagem>Olá</UsuarioMensagem>
                            <UsuarioNome>Geovana</UsuarioNome>
                        </Usuario>
                        
                    </UsuarioInformacoes>
                    <Icone name="power-off"/>
                </UsuarioConteiner>

            </Cabecalho>
            <Paineis>
                <Painel
                    icone="arrow-circle-up"
                    titulo="Entrada"
                    total="R$ 17.400,00"
                    ultimaTransacao="Última entrada entrada dia 10 de setembro"
                />

                <Painel
                    icone="arrow-circle-down"
                    titulo="Saída"
                    total="R$ 1.259,00"
                    ultimaTransacao="Última saída entrada dia 23 de setembro"
                />

                <Painel
                    icone="dollar-sign"
                    titulo="Total"
                    total="R$ 16.141,00"
                    ultimaTransacao="01 a 26 de setembro"
                />

            </Paineis>
            <Transacoes>

            </Transacoes>
        </Conteiner>
    )
}