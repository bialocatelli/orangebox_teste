import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.css'



function Footer() {
    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='footer-infos'>
                        <Box paddingTop={1} className='footer-infos-links'>
                            <Typography gutterBottom className='footer-text-principal'>Quem Somos</Typography>
                            <Typography gutterBottom className='footer-text'>O Violeta</Typography>
                        </Box>

                        <Box paddingTop={1} className='footer-institucional'>
                            <Typography gutterBottom className='footer-text-principal'>Institucional</Typography>
                            <Typography gutterBottom className='footer-text'>Como comprar</Typography>
                            <Typography gutterBottom className='footer-text'>Entregas</Typography>
                            <Typography gutterBottom className='footer-text'>Lojas</Typography>
                        </Box>

                        <Box paddingTop={1} className='footer-pagamento'>
                            <Typography gutterBottom className='footer-text-principal'>Formas de Pagamento</Typography>
                            <Typography gutterBottom className='footer-text'>Formas de pagamento site</Typography>
                            <Typography gutterBottom className='footer-text'>Formas de pagamento loja física</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer