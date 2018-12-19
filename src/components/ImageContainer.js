import React from 'react';
import axios from 'axios';
import Image from './Image';
import Header from './Header'
import SideMenu from './SideMenu'

export default class ImageContainer extends React.Component {
    state = {
        images: [],
        searchTerm: ''
    }

    componentDidMount() {
        axios.get(`https://rent-rockstar-server.herokuapp.com/`)
            .then(res => {
                const images = res.data;
                this.setState({ images });
            })
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        const { searchTerm } = this.state;

        return (
            <div>
                <SideMenu />
                {/* <Header
                    value={searchTerm}
                    handleChange={this.handleChange.bind(this)}
                /> */}
                {this.state.images.map(image => {
                    if (image.item_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return <Image
                            name={image.item_name}
                            description={image.item_description}
                            url={image.img_url}
                        />
                    }
                })}
            </div>
        )
    }
}