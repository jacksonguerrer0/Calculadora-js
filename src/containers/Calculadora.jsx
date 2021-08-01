import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ButtonData, ButtonOperator, ContainerCalculator, ContentButtonAction, ContentResults } from '../containers/CalculadoraStyled'
import { viewOperationNumber, viewOperationOperator } from '../redux/calculadoraDucks';

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
    return (
        <>
        <ContainerCalculator>
            <ContentResults>{operation}</ContentResults>
            <ContentButtonAction>
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
                <ButtonOperator>=</ButtonOperator>
            </ContentButtonAction>
        </ContainerCalculator>
        <p style={{textAlign: 'center'}}>Jackson Guerrero @jacksonguerrer0</p>
        </>
    )
}

export default Calculadora
