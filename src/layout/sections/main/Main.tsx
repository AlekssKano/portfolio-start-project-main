import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (

        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Svetlana Dyablo</h2>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>

    );
};
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    
`
const StyledMain = styled.section`
    min-height: 100vh;
    //background-color: #5875b3;
`
const MainTitle= styled.h1`

`