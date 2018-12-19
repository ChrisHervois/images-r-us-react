import React from 'react';
import axios from 'axios';
import Image from './Image';

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
    return (
      <div>
        { this.state.images.map(image => {
            return <Image 
            name={image.item_name}
            description={image.item_description}
            url={image.img_url} 
            />
        } )}
      </div>
    )
  }
}