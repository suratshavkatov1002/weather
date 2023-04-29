import React from 'react'
import { Box, styled } from '@mui/material';
import sunSetImage from '../assets/images/bg.jpg';
import Information from '../components/Information';
import Form from '../components/Form';
import { useState } from 'react';


const Component = styled(Box)({
    height: '100vh ',
    display: "flex",
    alignItems: 'center',
    margin: '0 auto',
    width: '70%'
})

const Image = styled(Box)({
    backgroundImage: `url(${sunSetImage})`,
    width: '27%',
    height:'86%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {

    const [result, setResult] = useState({})
     
    return (
        <Component>
            <Image />
            <Box  style = {{width: '73%', height: '86%'}}>
                <Form setResult = {setResult}/>
                <Information result = {result} />
            </Box>
        </Component>
    )
}

export default Home;