import React from 'react';
import axios from 'axios';
import Image from './Image';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class ImageContainer extends React.Component {
    state = {
        images: []
    }




    componentDidMount() {
        axios.get(`https://rent-rockstar-server.herokuapp.com/`)
            .then(res => {
                const images = res.data;
                this.setState({ images });
            })
    }

    render() {
        const { searchTerm, classes } = this.props;

        // const styles = theme => ({
        //     root: {
        //         flexGrow: 1,
        //     },
        //     paper: {
        //         padding: theme.spacing.unit * 2,
        //         textAlign: 'center',
        //         color: theme.palette.text.secondary,
        //     },
        // });

        return (
            <div>
                <Grid container spacing={24}>
                    {this.state.images.map(image => {
                        if (image.item_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return <Grid item xs={3}>
                                <Image
                                    name={image.item_name}
                                    description={image.item_description}
                                    url={image.img_url}
                                />
                            </Grid>
                        }
                    })}
                </Grid>
            </div>
        )
    }
}

