import styled from 'styled-components'

export const ContainerCalculator = styled.div`
    display: grid;
    width: 350px;
    border-radius: 10px;
    background-color: #5A5C68;
    padding: 1rem;
    margin: auto;
    row-gap: 1rem;
`
export const ContentResults = styled.div`
    background-color: #C1D798;
    padding: 1.2rem 1rem;
    border-radius: 10px;
    text-align: right;
    height: 2rem;
`
export const ContentButtonAction = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
`
export const ButtonData = styled.button`
    padding: 1rem;
    background-color: #3D4049;
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    &:focus{
        background-color: #767e96;
    }
`
export const ButtonOperator = styled.button`
    padding: 1rem;
    background-color: #BCC0C7;
    border: none;
    border-radius: 1rem;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    &:focus{
        background-color: #dfe4ec;
    }
`