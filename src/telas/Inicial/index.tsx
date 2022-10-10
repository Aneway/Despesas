import React from 'react'
import { Painel } from '../../componentes/Painel'
import { TransacaoProps } from '../../componentes/Transacao'
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

    const dados: TransacaoProps[] = [
        {
            id: '1',
            tipo: 'positivo',
            titulo: 'Salário',
            total: 'R$ 10.000,00',
            categoria: {
                nome: 'Renda',
                icone: 'coins'
            },
            data: 'Ontem'
        },
        {
            id: '2',
            tipo: 'negativo',
            titulo: 'Lanche',
            total: 'R$ 60,00',
            categoria: {
                nome: 'Alimentação',
                icone: 'shopping-bag'
            },
            data: 'Há 3 semanas'
        },
        {
            id: '3',
            tipo: 'negativo',
            titulo: 'Combustível',
            total: 'R$ 250,00',
            categoria: {
                nome: 'Transporte',
                icone: 'side-bar'
            },
            data: 'Há 1 semana'
        },
        {
            id: '4',
            tipo: 'negativo',
            titulo: 'Bar do Zé',
            total: 'R$ 300,00',
            categoria: {
                nome: 'Comércio',
                icone: 'beer'
            },
            data: 'Há 2 semana'
        }
    ]



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
                    tipo="entrada"
                    titulo="Entrada"
                    total="R$ 17.400,00"
                    ultimaTransacao="Última entrada entrada dia 10 de setembro"
                />

                <Painel
                    tipo="saida"
                    titulo="Saída"
                    total="R$ 1.259,00"
                    ultimaTransacao="Última saída entrada dia 23 de setembro"
                />

                <Painel
                    tipo="total"
                    titulo="Total"
                    total="R$ 16.141,00"
                    ultimaTransacao="01 a 26 de setembro"
                />

            </Paineis>
            <Transacoes>
                data={dados}
                keyExtrator={item => item.id}
                renderItem={ ({item}) => <Transacao lancamento={item}/> }


            </Transacoes>
        </Conteiner>
    )
}