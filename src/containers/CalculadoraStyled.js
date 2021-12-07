import styled from 'styled-components'

export const ContainerCalculator = styled.div`
    display: flex;
    flex-flow: column wrap;
    width: 90vw;
    padding: 1rem;
    margin: auto;
    border-radius: 1rem;
    background-color: #5A5C68;
    font-family: 'robotica';
    @media screen and (min-width: 450px){
        width: 400px;
    }
`
export const ContentResults = styled.div`
    display: flex;
    flex-flow: column wrap;
    flex: 0 1 50%;
    justify-content: space-around;
    min-height: 5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 5vw;
    border-radius: 1rem;
    background-color: #C1D798;
    text-align: right;
    color: #f9ffed;
    letter-spacing: 0.1rem;
    /* font-size: 4vw; */
    p:nth-child(1){
        width: 100%;
        height: 2.5rem;
        background-color: inherit;
        text-align: right;
        color: inherit;
        font-family: inherit;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        border: none;
        outline: 0;
        padding: 0;
    }
    p:nth-child(1){
        width: 100%;
        overflow-x: scroll;
    }
    p:nth-child(1)::-webkit-scrollbar{
        height: 0.3rem;
        display: none;
    }
    p:nth-child(1)::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
    }
    p:nth-child(1)::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    p:nth-child(1)::-webkit-scrollbar-thumb:active {
    background-color: #999999;
    }
    p:nth-child(1)::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
    }
    p:nth-child(1)::-webkit-scrollbar-track:hover,
    p:nth-child(1)::-webkit-scrollbar-track:active {
    background: #d4d4d4;
    }
    p:nth-child(2){
        width: 100%;
        background-color: inherit;
        text-align: right;
        color: inherit;
        font-family: inherit;
        font-size: 1rem;
        letter-spacing: 0.1rem;
        border: none;
        outline: 0;
    }
    p:nth-child(2){
        width: 100%;
        overflow-x: scroll;
    }
    p:nth-child(2)::-webkit-scrollbar{
        height: 0.3rem;
        display: none;
    }
    p:nth-child(2)::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
    }
    p:nth-child(2)::-webkit-scrollbar-thumb:hover {
    background: #b3b3b3;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    p:nth-child(2)::-webkit-scrollbar-thumb:active {
    background-color: #999999;
    }
    p:nth-child(2)::-webkit-scrollbar-track {
    background: #e1e1e1;
    border-radius: 4px;
    }
    p:nth-child(2)::-webkit-scrollbar-track:hover,
    p:nth-child(2)::-webkit-scrollbar-track:active {
    background: #d4d4d4;
    }
    @media screen and (min-width: 450px){
        font-size: 1rem;
        margin-bottom: 1rem;
        p:nth-child(2)::-webkit-scrollbar{
        display: block;
        }
        p:nth-child(1)::-webkit-scrollbar{
        display: block;
        }
    }
`
export const ContentButtonAction = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    h2{
        grid-column: 2/4;
        margin: auto 0;
        font-family: sans-serif;
        color: whitesmoke;
        text-align: center;
        font-size: 7vw;
    }
    @media screen and (min-width: 450px){
        h2{
            font-size: 2.5rem;
        }
    }
`
export const ButtonData = styled.button`
    border: none;
    padding: 2vw 0;
    border-radius: 1rem;
    background-color: #3D4049;
    color: white;
    font-size: 7vw;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:active{
        background-color: #767e96;
    }
    @media screen and (min-width: 450px){
        padding: 1rem 0;
        font-size: 2rem;
    }
`
export const ButtonOperator = styled.button`
    border: none;
    padding: 2vw 0;
    border-radius: 1rem;
    background-color: #BCC0C7;
    color: white;
    font-size: 7vw;
    cursor: pointer;
    transition: background-color 0.5s ease;
    &:active{
        background-color: #dfe4ec;
    }
    @media screen and (min-width: 450px){
        padding: 1rem 0;
        font-size: 2rem;
    }
`
export const ButtonReset = styled.button`
    grid-column: 1/2 ;
    padding: 2vw 0;
    border: none;
    border-radius: 1rem;
    background-color: #3D4049;
    color: white;
    font-weight: bold;
    font-size: 7vw;
    transition: background-color 0.5s ease;
    &:active{
        background-color: #767e96;
    }
    @media screen and (min-width: 450px){
        padding: 1rem 0;
        font-size: 2rem;
    }
`
export const ButtonDelete = styled.button`
    grid-column: 4/5;
    padding: 2vw 0;
    border: none;
    border-radius: 5rem 1rem 1rem 5rem;
    background-color: #3D4049;
    color: white;
    font-size: 7vw;
    transition: background-color 0.5s ease;
    &:active{
        background-color: #767e96;
    }
    @media screen and (min-width: 450px){
        padding: 1rem 0;
        font-size: 2rem;
    }
`