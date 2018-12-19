import React from 'react';

import axios from 'axios';

export default class Images extends React.Component {
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
            return <img src={image.img_url} />
        } )}
      </div>
    )
  }
}