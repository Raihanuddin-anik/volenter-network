import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
  title: {
    flexGrow: 4,
    color:'#544f4f'
  },
  img:{
    width: '20%',
  }
}));
const Navbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      
      <AppBar position="static" style={{ background: '#f3f3f700' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className={classes.img} src="https://i.ibb.co/RvFtmYB/Group-1329.png" alt=""/>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <p>home</p>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}


export default Navbar;