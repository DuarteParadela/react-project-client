import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ErrorIcon from '@material-ui/icons/Error';
import BlockIcon from '@material-ui/icons/Block';

const UseStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: 20,
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)'
    },
    pending: {
      color: 'orange',
      borderColor: 'orange'
    },
    validated: {
      color: 'green',
      borderColor: 'green'
    },
    rejected: {
      color: 'red',
      borderColor: 'red'
    },
    closed: {
      color: 'grey',
      borderColor: 'grey'
    },
    title: {
      fontSize: 14,
  
    },
    pos: {
      marginBottom: 12,
    },
  });

  const demandStatus = ({
      status
  }) => {
      const classes = UseStyles();
      const statusToLowerCase = status.toLowerCase()
      const getIcon = () => {
        switch (statusToLowerCase) {
          case 'pending':
            return <ErrorIcon className={classes[statusToLowerCase]} />
          case 'closed':
            return <CancelIcon className={classes[statusToLowerCase]}/>
          case 'rejected':
            return <BlockIcon className={classes[statusToLowerCase]} />
          default:
            return <CheckCircleIcon className={classes[statusToLowerCase]} />
        }
      }

      return (
        <Chip
              icon={getIcon()}
              label={status}
              variant="outlined"
              className={classes[status.toLowerCase()]}
            />
            )
  }

 
      export default demandStatus;