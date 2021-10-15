import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { ButtonData, ButtonDelete, ButtonOperator, ButtonReset, ContainerCalculator, ContentButtonAction, ContentResults } from '../containers/CalculadoraStyled'
import { operationResult,  resetTodo,  viewOperationNumber, viewOperationOperator } from '../redux/calculadoraDucks';
import robotica from '../assets/Robotica.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'robotica' ;
        src: url(${robotica});
    }
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
    }
    body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #35363A;
    }
`

const Calculadora = () => {
    const dispatch = useDispatch()
    const {operation}= useSelector(state => state.result)


    const handleDataButton = ( e ) => {
        const number =  parseFloat(e.target.textContent)
        dispatch(viewOperationNumber(number))
    };
    const handleOperatorButton = ( e ) => {
        const operator = e.target.textContent;
        dispatch(viewOperationOperator(operator))
    }
    const handleResult = ( e ) =>{
        dispatch(operationResult())
    }
    const handleReset = () =>{
        dispatch(resetTodo())
    }
    console.log(operation)
    return (
        <>
        <GlobalStyle />
        <ContainerCalculator>
            <ContentResults>
                <p>{operation}</p>
                <p>Vista previa</p>
            </ContentResults>
            <ContentButtonAction>
                <ButtonReset onClick={handleReset}>C</ButtonReset>
                <h2>Jack®</h2>
                <ButtonDelete>✖</ButtonDelete>
                <ButtonData onClick={handleDataButton}>7</ButtonData>
                <ButtonData onClick={handleDataButton}>8</ButtonData>
                <ButtonData onClick={handleDataButton}>9</ButtonData><ButtonOperator onClick={handleOperatorButton}>/</ButtonOperator>
                <ButtonData onClick={handleDataButton}>4</ButtonData>
                <ButtonData onClick={handleDataButton}>5</ButtonData>
                <ButtonData onClick={handleDataButton}>6</ButtonData><ButtonOperator onClick={handleOperatorButton}>*</ButtonOperator>
                <ButtonData onClick={handleDataButton}>1</ButtonData>
                <ButtonData onClick={handleDataButton}>2</ButtonData>
                <ButtonData onClick={handleDataButton}>3</ButtonData><ButtonOperator onClick={handleOperatorButton}>-</ButtonOperator>
                <ButtonData onClick={handleDataButton}>0</ButtonData>
                <ButtonOperator onClick={handleOperatorButton}>.</ButtonOperator>
                <ButtonOperator onClick={handleOperatorButton}>+</ButtonOperator>
                <ButtonOperator onClick={handleResult}>=</ButtonOperator>
            </ContentButtonAction>
        </ContainerCalculator>
        <p style={{textAlign: 'center'}}>Jackson Guerrero <a href="https://github.com/jacksonguerrer0" style={{color: 'whitesmoke', textDecoration : 'none'}}>@jacksonguerrer0</a></p>
        </>
    )
}

export default Calculadora
