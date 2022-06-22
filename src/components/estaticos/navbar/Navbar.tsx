import React from 'react'
import { AppBar, Box, Toolbar, Typography, Grid, } from '@material-ui/core'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

import './Navbar.css'

function NavBar() {
    return (
        <>
            <AppBar position="static">
                <Grid className='nav-laranja'>
                    <Toolbar variant="dense" className='menu-toolbar'>


                        <Box className="boxNav">
                            <Link to="/home" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to="/promocoes" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Promoções
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/faleConosco" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Fale conosco
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/políticaDePrivacidade" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Politica de privacidade
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/trabalheConosco" className="text-decorator-none">
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Trabalhe conosco
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/violeta" className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className="titulos">
                                        Violeta e você
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>

                    </Toolbar>
                </Grid>
            </AppBar>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='nav-roxa1'>
                        <Box paddingTop={1} className='box-roxa1'>
                            <LocationOnIcon className="icones" />
                            <Typography gutterBottom className='text-location'>Loja 1</Typography>
                        </Box>

                        <Box paddingTop={1} className='box-roxa2'>
                            <LocationSearchingIcon className="icones" />
                            <Typography gutterBottom className='text-location'>Encontre outras lojas</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <nav className="navbar-busca">
                <div className="container-busca">
                    <Box className="form-busca">
                        <form>
                            <input id='search' name='search' placeholder='O que você está procurando?' required />
                        </form>
                    </Box>

                    <Box className="botao-busca">
                        <button>
                            Entrar ou Cadastrar
                        </button>
                    </Box>
                </div>
            </nav>

            <Box className="navbar3">
                <div>
                    <h5 className="text-white-h4">Departamentos</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </Box>

        </>
    )
}

export default NavBar