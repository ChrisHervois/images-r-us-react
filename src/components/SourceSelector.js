import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class SourceSelector extends React.Component {
  state = {
    created: false,
    licensed: false,
    domain: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { created, licensed, domain } = this.state;
    // const error = [gilad, jason, antoine].filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Select Filters</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={created} onChange={this.handleChange('created')} value="created" />
              }
              label="SM Created"
            />
            <FormControlLabel
              control={
                <Checkbox checked={licensed} onChange={this.handleChange('licensed')} value="licensed" />
              }
              label="Licensed"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={domain}
                  onChange={this.handleChange('domain')}
                  value="domain"
                />
              }
              label="Public Domain"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
        {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={gilad} onChange={this.handleChange('gilad')} value="gilad" />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox checked={jason} onChange={this.handleChange('jason')} value="jason" />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={antoine}
                  onChange={this.handleChange('antoine')}
                  value="antoine"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl> */}
      </div>
    );
  }
}

SourceSelector.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SourceSelector);