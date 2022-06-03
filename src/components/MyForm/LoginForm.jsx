import React from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
//import { Marginer } from './Spacer'


export function LoginForm(props) {
    return <BoxContainer>
        <FormContainer >
            <Input />
            <Input />
            {/* <Marginer mt={3} /> */}
            <SubmitButton >Sign in</SubmitButton>
        </FormContainer>
        {/* <Marginer mt={5} /> */}
        <MutedLink href=''>Forgot your password</MutedLink>
        {/* <Marginer mt={5} /> */}
        {/* <Marginer mt={3} /> */}
        <MutedLink href=''>Dont have an account <BoldLink href='#'>Sign Up</BoldLink></MutedLink>
    </BoxContainer>
}