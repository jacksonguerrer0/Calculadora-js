import React from 'react'
import { ButtonData, ButtonOperator, ContainerCalculator, ContentButtonAction, ContentResults } from '../redux/types/calculadoraDucks'

const Calculadora = () => {
    return (
        <>
        <ContainerCalculator>
            <ContentResults>soy la data</ContentResults>
            <ContentButtonAction>
                <ButtonData>7</ButtonData>
                <ButtonData>8</ButtonData>
                <ButtonData>9</ButtonData><ButtonOperator>/</ButtonOperator>
                <ButtonData>4</ButtonData>
                <ButtonData>5</ButtonData>
                <ButtonData>6</ButtonData><ButtonOperator>x</ButtonOperator>
                <ButtonData>1</ButtonData>
                <ButtonData>2</ButtonData>
                <ButtonData>3</ButtonData><ButtonOperator>-</ButtonOperator>
                <ButtonData>0</ButtonData>
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
