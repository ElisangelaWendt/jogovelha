import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import Square from './src/components/Square';
import { styles } from './styles'

export default function Home() {
    const [empate, setEmpate] = useState("no")
    const [winner, setWinner] = useState("")
    const [humanPoints, setHumanPoints] = useState(0)
    const [robotPoints, setRobotPoints] = useState(0)
    const [blockedSquare, setBlockedSquare] = useState(false)
    const [humanTurn, setHumanTurn] = useState(true)
    let [table, setTable] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ])

    useEffect(() => {
        //contar pontos
        if (winner === "X") {
            setHumanPoints(humanPoints + 1)
        }
        if (winner === "O") {
            setRobotPoints(robotPoints + 1)
        }
    }, [winner])

    useEffect(() => {
        if (humanTurn === false) {
            //randomizar caso possa ser marcado qualquer quadrado
            let square = Math.floor(Math.random() * 8) + 0
            let linha = Math.trunc(square / 3);
            let coluna = square % 3;
            //se o quadrado do meio não estiver vazio e o randomizado esteja vazio...
            if (square === 4 && table[linha][coluna] != '') {
                square = Math.floor(Math.random() * 8) + 0
            }
            if (humanTurn === false && (table[0][0] != '' || table[0][1] != '' || table[0][2] != '' || table[1][0] != '' || table[1][2] != '' || table[1][1] != '' || table[1][2] != '' || table[2][0] != '' || table[2][1] != '' || table[2][2]) && table[1][1] === '') {
                table[1][1] = "O"
                setHumanTurn(true)
            } else {
                if (humanTurn === false && table[0][0] != '' && table[2][0] === '' && table[0][2] === '' && table[2][2] === '' && table[1][1] != '') {
                    table[2][2] = "O"
                    setHumanTurn(true)
                }else{

                if (humanTurn === false && table[0][0] === '' && table[2][0] === '' && table[0][2] != '' && table[2][2] === '' && table[1][1] != '') {
                    table[1][0] = "O"
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && table[0][0] === '' && table[2][0] != '' && table[0][2] === '' && table[2][2] === '' && table[1][1] != '') {
                    table[0][2] = "O"
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && table[0][0] === '' && table[2][0] === '' && table[0][2] === '' && table[2][2] != '' && table[1][1] != '') {
                    table[0][0] = "O"
                    setHumanTurn(true)
                }else{
//linha 0
                if (humanTurn === false && (table[0][0] === 'O' && table[2][0] === 'O' && table[1][0] === ''|| (table[0][0] === 'X' && table[2][0] === 'X' && table[1][0] === ''))) {
                    table[1][0] = 'O'
                    setHumanTurn(true)
                }else{

                    if (humanTurn === false && (table[0][0] === 'O' && table[1][0] === 'O' && table[2][0] === '') || (table[0][0] === 'X' && table[1][0] === 'X' && table[2][0] === '')) {
                        table[2][0] = 'O'
                        setHumanTurn(true)
                    }else{

                        if (humanTurn === false && (table[1][0] === 'O' && table[2][0] === 'O' && table[0][0] === ''|| (table[1][0] === 'X' && table[2][0] === 'X' && table[0][0] === ''))) {
                            table[0][0] = 'O'
                            setHumanTurn(true)
                        }
                
//linha 1
                if (humanTurn === false && (table[0][1] === 'O' && table[2][1] === 'O' && table[1][1] === ''|| (table[0][1] === 'X' && table[2][1] === 'X' && table[1][1] === ''))) {
                    table[1][1] = 'O'
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && (table[0][1] === 'O' && table[1][1] === 'O' && table[2][1] === '') || (table[0][1] === 'X' && table[1][1] === 'X' && table[2][1] === '')) {
                    table[2][1] = 'O'
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && (table[1][1] === 'O' && table[2][1] === 'O' && table[0][1] === ''|| (table[1][1] === 'X' && table[2][1] === 'X' && table[0][1] === ''))) {
                    table[0][1] = 'O'
                    setHumanTurn(true)
                }else{
                //linha 2
                if (humanTurn === false && (table[0][2] === 'O' && table[2][2] === 'O' && table[1][2] === ''|| (table[0][2] === 'X' && table[2][2] === 'X' && table[1][2] === ''))) {
                    table[1][2] = 'O'
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && (table[0][2] === 'O' && table[1][2] === 'O' && table[2][2] === '') || (table[0][2] === 'X' && table[1][2] === 'X' && table[2][2] === '')) {
                    table[2][2] = 'O'
                    setHumanTurn(true)
                }else{
                if (humanTurn === false && (table[1][2] === 'O' && table[2][2] === 'O' && table[0][2] === ''|| (table[1][2] === 'X' && table[2][2] === 'X' && table[0][2] === ''))) {
                    table[0][2] = 'O'
                    setHumanTurn(true)
                }else{
                    if (table[linha][coluna] === '') {
                        let linha_clicada = Math.trunc(square / 3);
                        let coluna_clicada = square % 3;
                        table[linha_clicada][coluna_clicada] = "O"
                        setHumanTurn(true)
                    }
                }
            }}}}}}}}}}}}
            Winners();
        }
    })

    function pressedSquare(indice_celula) {
        let linha_clicada = Math.trunc(indice_celula / 3);
        let coluna_clicada = indice_celula % 3;
        // let celula_atual = table[linha_clicada][coluna_clicada];

        //verificar vez e preencher quadro clicado
        if (humanTurn === true && table[linha_clicada][coluna_clicada] === '' && blockedSquare === false) {
            table[linha_clicada][coluna_clicada] = "X"
            setHumanTurn(false)
        }
        // else
        //     if (humanTurn === false && blockedSquare === false && table[linha_clicada][coluna_clicada] === '') {
        //         table[linha_clicada][coluna_clicada] = "O"
        //         setHumanTurn(true)
        //     }

        Winners();

    }


    function Winners() {
        //verificar se houve vencedor

        //primeira linha
        if (table[0][0] === table[1][0] && table[2][0] === table[1][0] && table[0][0] != "") {
            setWinner(table[0][0])//string contida no quadro que venceu
            lockTable()
            console.log(winner)
        }
        //segunda linha
        if (table[0][1] === table[1][1] && table[2][1] === table[1][1] && table[1][1] != '') {
            setWinner(table[0][1])
            lockTable()
            console.log("entrou")
        }
        //terceira linha
        if (table[0][2] === table[1][2] && table[2][2] === table[1][2] && table[1][2] != '') {
            setWinner(table[0][2])
            lockTable()
            console.log("entrou")
        }
        //primeira coluna
        if (table[0][1] === table[0][0] && table[0][2] === table[0][0] && table[0][0] != '') {
            setWinner(table[0][1])
            lockTable()
            console.log("entrou")
        }
        //segunda coluna
        if (table[1][1] === table[1][0] && table[1][2] === table[1][0] && table[1][0] != '') {
            setWinner(table[1][1])
            lockTable()
            console.log("entrou")
        }
        //terceira coluna
        if (table[2][1] === table[2][0] && table[2][2] === table[2][0] && table[2][0] != '') {
            setWinner(table[2][1])
            lockTable()
            console.log("entrou")
        }
        //diagonal direita
        if (table[0][0] === table[1][1] && table[2][2] === table[0][0] && table[0][0] != '') {
            setWinner(table[2][1])
            lockTable()
            console.log("entrou")
        }
        //diagonal esquerda
        if (table[0][0] === table[1][1] && table[2][2] === table[0][0] && table[0][0] != '') {
            setWinner(table[2][1])
            lockTable()
            console.log("entrou")
        }





    }

    function lockTable() {
        setBlockedSquare(true);
    }

    function reset() {
        setTable([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ])

        setHumanTurn(true)
        setWinner("")
        setBlockedSquare(false)
        // setHumanPoints(0)
        // setRobotPoints(0)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Player: {humanPoints}</Text>
                <Text style={styles.text}>Robô: {robotPoints}</Text>
            </View>
            <View>
                <View style={[styles.row, { borderLeftWidth: 0 }]}>
                    <Square text={table[0][0]} onPress={() => {
                        pressedSquare(0);
                    }} />
                    <Square text={table[1][0]} onPress={() => {
                        pressedSquare(3);
                    }} />
                    <Square text={table[2][0]} onPress={() => {
                        pressedSquare(6);
                    }} />
                </View>
                <View style={styles.row}>
                    <Square text={table[0][1]} onPress={() => {
                        pressedSquare(1);
                    }} />
                    <Square text={table[1][1]} onPress={() => {
                        pressedSquare(4);
                    }} />
                    <Square text={table[2][1]} onPress={() => {
                        pressedSquare(7);
                    }} />


                </View>
                <View style={styles.row}>
                    <Square text={table[0][2]} onPress={() => {
                        pressedSquare(2);
                    }} />
                    <Square text={table[1][2]} onPress={() => {
                        pressedSquare(5);
                    }} />
                    <Square text={table[2][2]} onPress={() => {
                        pressedSquare(8);
                    }} />
                </View>
            </View>
            <View>
                <View>
                    <Text>vez de:</Text>
                    <Text style={styles.selected}>{humanTurn ? <Text>X</Text> : <Text>O</Text>}</Text>
                </View>
                <View>
                    {winner === 'X' && <Text style={styles.selected}>X</Text>}
                    {winner === 'O' && <Text style={styles.selected}>O</Text>}
                    {winner !== '' && <Text>GANHOU</Text>}
                    {empate === 'yes' && <Text>** EMPATE **</Text>}
                </View>
            </View>

            <View >
                <Button title="Resetar" onPress={() => {
                    reset();
                }} />
            </View>
        </View>
    )
}