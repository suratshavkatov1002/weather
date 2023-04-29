
import { Box, Typography } from '@mui/material'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';
import React from 'react'
import styled from '@emotion/styled';


const Row = styled(Typography) ({
	padding: '10px',
	fontSize: '22px',
	letterSpacing: 2,
	'& > svg': {
		marginRight:'10px'
	},

	display: 'flex',
	alignItems: 'center',
	gap: '10px'
})	

const Error = styled(Typography)({
	color: 'red',
	margin: '50px',
	fontSize: '30px'
})

const Information = ({ result }) => {
	return (
		
			result && Object.keys(result).length > 0 ? (
				<Box style = {{margin: '30px 50px'}}>
					<Row>
						<AddLocationIcon/>  
						Location:{result.name}, {result.sys.country}
					</Row >
	
					<Row>
						<SettingsApplicationsIcon/> Temperature: {result.main.temp}
					</Row>

					<Row>
						<OpacityIcon/> Humidity: {result.main.humidity}
					</Row>

					<Row>
						<Brightness5Icon/> Sun Rise: { new Date(result.sys.sunrise * 1000).toLocaleTimeString()}
					</Row>
					
					<Row>
						<Brightness6Icon/> Sun Set:
						 {new Date(result.sys.sunset * 1000).toLocaleTimeString()}
					</Row>

					<Row>
						<DehazeIcon/> Humidity: {result.weather[0].main }
					</Row>

					<Row>
						<CloudIcon/>Clouds: {result.clouds.all}%
					</Row>
				</Box>
			): <Error>Please enter the values  to check weather</Error>
			
		
	)
}

export default Information