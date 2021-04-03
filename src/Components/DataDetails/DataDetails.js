import React from 'react';
import './DataDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    margin: '5px'


  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    borderRadius: '10px',


  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },

}));

const DataDetails = (props) => {


  const classes = useStyles();
  const { url, id, caption } = props.data;
  return (
    <Card sm={6} xs={12} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={url}
      />
      <Link className="style" to={`/registation/${id}`}>
        <CardContent className="content" >
          <Typography variant="h6">
            {caption}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default DataDetails;