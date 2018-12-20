import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function UploadButton(props) {
  const { classes } = props;
  return (
    <div>
      <Fab variant="extended" aria-label="Delete" className={classes.fab} onClick={props.clickHandler}>
        <NavigationIcon className={classes.addIcon} />
        Add New Image
      </Fab>
    </div>
  );
}

UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadButton);