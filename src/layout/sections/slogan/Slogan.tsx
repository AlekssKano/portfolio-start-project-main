import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSLogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button>Hire me</Button>
        </StyledSLogan>
    );
};

const StyledSLogan = styled.section`
    min-height: 30vh;
    background-color: #957397;
`