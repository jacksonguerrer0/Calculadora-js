import React from 'react'
import { useDispatch } from 'react-redux';
import { ButtonData, ButtonOperator, ContainerCalculator, ContentButtonAction, ContentResults } from '../containers/CalculadoraStyled'
import { viewOperation } from '../redux/calculadoraDucks';

const Calculadora = () => {
    const dispatch = useDispatch()
    const handleDataButton = ( e ) => {
        const number =  parseFloat(e.target.textContent)
        dispatch(viewOperation(number))
    };
    return (
        <>
        <ContainerCalculator>
            <ContentResults>soy la data</ContentResults>
            <ContentButtonAction>
                <ButtonData onClick={handleDataButton}>7</ButtonData>
                <ButtonData onClick={handleDataButton}>8</ButtonData>
                <ButtonData onClick={handleDataButton}>9</ButtonData><ButtonOperator>/</ButtonOperator>
                <ButtonData onClick={handleDataButton}>4</ButtonData>
                <ButtonData onClick={handleDataButton}>5</ButtonData>
                <ButtonData onClick={handleDataButton}>6</ButtonData><ButtonOperator>x</ButtonOperator>
                <ButtonData onClick={handleDataButton}>1</ButtonData>
                <ButtonData onClick={handleDataButton}>2</ButtonData>
                <ButtonData onClick={handleDataButton}>3</ButtonData><ButtonOperator>-</ButtonOperator>
                <ButtonData onClick={handleDataButton}>0</ButtonData>
                <ButtonOperator>.</ButtonOperator>
                <ButtonOperator>+</ButtonOperator>
                <ButtonOperator>=</ButtonOperator>
            </ContentButtonAction>
        </ContainerCalculator>
        <p style={{textAlign: 'center'}}>Jackson Guerrero @jacksonguerrer0</p>
        </>
    )
}

export default Calculadora
