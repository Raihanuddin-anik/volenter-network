import React from 'react';
import './DataDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';





const DataDetails = (props) => {


  
  const { url, id, caption } = props.data;
  return (
    <Link to={`registation/${id}`} className="col-md-3 p-2"  >
    <div class="card" style={{borderRadius:"10px"}}>
      <img src={url} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title text-center text-uppercase text"  >{caption}</h5>
        </div>
       </div>
    </Link>
  );
};

export default DataDetails;
