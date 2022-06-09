import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";
//import { SignupForm } from "./SignupForm";

export const AppContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const BoxContainer = styled.div`
width:280px;
min-height:550px;
display:flex;
flex-direction:column;
border-radius:19px;
background-color:rgb(240,240,240);
box-shadow:0 0 2px rgba(15 15 15 0.28);
position:relative;
overflow:hidden;
margin-top:7px;
`;

const TopContainer = styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding:0 1.8em;
padding-bottom:5em;

`

const InnerContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
padding:0 1.8em;
`

const backgroundVariant = {
    expanded: {
        width: '223%',
        height: '1050px',
        borderRadius: '20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '550px',
        borderRadius: '50%',
        transform: 'rotate(60deg)'
    }
}

const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30
}

const BackDrop = styled(motion.div)`
width:160%;
height:550px;
position:absolute;
display:flex;
flex-direction:column;
border-radius:50%;
transform:rotate(60deg);
top:-290px;
left:-70px;
background:rgb(241,196,15);
background:linear gradient(
    58deg,
    rgba(241,196,15,1) 20%
    rgba(243,172,18,1)100%
);
`;

const HeaderContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`;

const HeaderText = styled.h2`
font-size:30px;
font-weight:600;
line-height:1.24;
color:#fff;
z-index:10;
margin:0px;
`;

const SmallText = styled.h5`
font-size:11px;
font-weight:500;
color:#fff;
z-index:10;
margin:0;
margin-top:7px;
`

export function MyForm(props) {
    // console.log(active)
    return <AppContainer>
    <BoxContainer>
        <TopContainer>
            <HeaderContainer>
                <HeaderText>welcome</HeaderText>
                <HeaderText>back</HeaderText>
                <SmallText>Please sign-up to continue</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm />
        </InnerContainer>
    </BoxContainer>
    </AppContainer>
}