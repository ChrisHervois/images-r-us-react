import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from './Header'
import SourceSelector from './SourceSelector'

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SideMenu extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                {/* <Divider /> */}
                <SourceSelector />
            </div>
        );


        return (
            <div>
                <Header 
                value={this.props.value}
                handleChange={this.props.handleChange}
                clickHandler={this.toggleDrawer('left', true)} />
                <div>
                    {/* <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button> */}
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                        <div
                            // tabIndex={0}
                            // role="button"
                            // onClick={this.toggleDrawer('left', false)}
                            // onKeyDown={this.toggleDrawer('left', false)}
                        >
                            {sideList}
                        </div>
                    </Drawer>
                </div>
            </div>
        );
    }
}

SideMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);