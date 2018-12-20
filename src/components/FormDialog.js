import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UploadButton from './UploadButton'
import axios from 'axios'

export default class FormDialog extends React.Component {
    state = {
        open: false,
        altTag: '',
        citation: '',
        courseCode: '',
        title: '',
        description: '',
        source: '',
        file: null
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleUpload = () => {
        let formData = this.state;

        let url = 'http://localhost:45184/api/images'
        let config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        };
        
        let queryStr = `?altTag=${formData.altTag}&citation=${formData.citation}&courseCode=${formData.courseCode}&title=${formData.title}&description=${formData.description}&source=${formData.source}`;

        let data = new FormData();

       
        data.append('file', this.state.file);
        
        
        axios.post(`${url}${queryStr}`, data, config)
            .then((res) => {
                console.log(res)
                this.setState({ open: false });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    fileChangedHandler = (event) => {
        const file = event.target.files[0]
        this.setState({ file })
    }

    render() {

        return (
            <div>
                <UploadButton clickHandler={this.handleClickOpen} />
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add New Image</DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
            </DialogContentText> */}
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Alt Tag"
                            onChange={(e) => this.setState({ altTag: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Citation"
                            onChange={(e) => this.setState({ citation: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Course Code"
                            onChange={(e) => this.setState({ courseCode: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Title"
                            onChange={(e) => this.setState({ title: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Description"
                            onChange={(e) => this.setState({ description: e.target.value })}
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Source"
                            onChange={(e) => this.setState({ source: e.target.value })}
                            fullWidth
                        />
                        <input type="file" onChange={this.fileChangedHandler}></input>


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleUpload} color="primary">
                            Upload
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}