import React from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
//import { Marginer } from './Spacer'


export function SignupForm(props) {
    return <BoxContainer>
        <FormContainer>
            <Input type='text' placeholder='FullName' />
            <Input type='email' placeholder='email' />
            <Input type='password' placeholder='password' />
            <Input type='password' placeholder='Confirm Password' />
        </FormContainer>
        {/* <Marginer mt={5} /> */}
        <MutedLink href=''>Forgot your password</MutedLink>
        {/* <Marginer mt={3} /> */}
        <SubmitButton>Signup</SubmitButton>
        {/* <Marginer mt={3} /> */}
        <MutedLink href=''>Already has an account? <BoldLink href='#'>Sign in</BoldLink></MutedLink>
    </BoxContainer>
}