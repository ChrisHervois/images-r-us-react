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
        axios.get(`http://localhost:45184/api/images`)
            .then(res => {
                const images = res.data.result;
                this.setState({ images });
            })
    }

    render() {
        const { searchTerm, classes } = this.props;
        console.log(this.state.images)
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
                        return <Grid item xs={3}>
                            <Image
                                name="Title"
                                description="Description"
                                url={image.uri}
                            />
                        </Grid>
                        // if (image.item_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        //     return <Grid item xs={3}>
                        //         <Image
                        //             name="Title"
                        //             description="Description"
                        //             url={image.uri}
                        //         />
                        //     </Grid>
                        // }
                    })}
                </Grid>
            </div>
        )
    }
}

