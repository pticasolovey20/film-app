import {AppBar, Box} from '@mui/material';
import { NavLink } from "react-router-dom"
import Typography from '@mui/material/Typography';

import './styles.scss'

const setActive = ({ isActive}: any):string => isActive ? "activeLink" : "link";

const Header = () => {
    return (
        <AppBar position='sticky' >
            <Box sx={{display:'flex', padding:'30px', backgroundColor:'#2e3035'}}>
                <div className='headWrapper'>
                    <NavLink to='/' className='linkTitle'>
                        <Typography className='headTitle' sx={{ display: { xs: 'none', sm: 'block' }, fontSize:'30px', fontWeight:'700', color:'#217bfa'}}>
                            MOVIESinfo
                        </Typography>
                    </NavLink>
                    <nav>
                            <NavLink className={setActive} to='/'>Home</NavLink>
                            <NavLink className={setActive} to='/categories'>Categories</NavLink>
                            <NavLink className={setActive} to='/about'>About Us</NavLink>
                    </nav>
                </div>
            </Box>
        </AppBar>
    )
}

export {Header}