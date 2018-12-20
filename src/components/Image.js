import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
};



class Image extends React.Component {
  state = {
    showMetadata: false
  }
  
  showData() {
    this.setState({ showMetadata: !this.state.showMetadata })
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.props.url}
            title={this.props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.name}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          {this.state.showMetadata ? <CardContent>
          <Typography component="p">
              {this.props.altTag}
            </Typography>
            <Typography component="p">
              {this.props.citation}
            </Typography>
            <Typography component="p">
              {this.props.courseCode}
            </Typography>
            <Typography component="p">
              {this.props.source}
            </Typography>
          </CardContent> : ""}
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={this.showData.bind(this)}>
            Show Metadata
          </Button>
          {/* <Button size="small" color="primary">
            Learn More
          </Button> */}
        </CardActions>
      </Card>
    );
  }
  
  
}

Image.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Image);