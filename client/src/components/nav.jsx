import { AppBar, Toolbar, Typography, Button } from '@mui/material';
const Nav = () => {

  return(<div>
          <AppBar position="static">
  <Toolbar>
  <Typography variant="h6" style={{ flexGrow: 1 }}>
  Astro Baby
  </Typography>
  <Button color="inherit">Login</Button>
  <Button color="inherit">Sign Up</Button>
  </Toolbar>
  </AppBar>
  </div>);
  }
  
  export default Nav
  
  
