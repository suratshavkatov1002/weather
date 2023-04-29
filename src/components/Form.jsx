import React, { useState } from 'react';
import { Box, Button, InputBase, styled } from '@mui/material';
import getWeather from '../services/api';


const Container = styled(Box)({
    backgroundColor: '#445A6F',
    marginTop: '0',
    padding: '10px',
    

})

const Input = styled(InputBase)({
    color: '#fff',
    marginRight: '20px',
    marginLeft: '20px',
    fontSize: '18px',
    border: '2px solid #fff',
    borderRadius: '5px'

})

const GetButton = styled(Button)({
    background: '#e67e22',
    marginLeft: '80px'
})


const Form = ({ setResult }) => {

    const [data, setData] = useState({ city: '', country: '' });

    const heandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    const getValueInfo = async () => {
        let result = await getWeather(data.city, data.country)
        setResult(result)
    }

    return (
        <Container>
            <Input
                placeholder='City'
                name='city'
                onChange={heandleChange}
            />
            <Input
                placeholder='Country'
                name='country'
                onChange={heandleChange}
            />
            <GetButton onClick={getValueInfo} variant='contained'>Get Weather</GetButton>
        </Container>
    )
}

export default Form