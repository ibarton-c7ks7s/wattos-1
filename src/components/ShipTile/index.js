import React, { Component } from 'react';
import slugify from 'slugify';
import { Link } from 'react-router-dom';

class ShipTile extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    var { product } = this.props;
    var styles = {
      tile: {
        listStyle: 'none',
        margin: '0 50px 0 0',
        width: 400,
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '20px',
        textDecoration: 'none',
        fontSize: 20,
        transform: this.state.hover?'scale(1.2)':'scale(1)',
        zIndex: this.state.hover?'10':'1',
        backgroundImage: this.state.hover?'radial-gradient(ellipse closest-side,rgba(255,255,255,0.5),rgba(255,255,255,0))':'none'
      },
      name: {
        textDecoration: 'none',
        color: 'white',
        fontSize: 20
      },
      image: {
        maxWidth: '300px',
        maxHeight: '300px',
        marginBottom: 15
      }
    };
    var { name } = product;
    var slug = slugify(name.toLowerCase());
    return (
      <li style={styles.tile} key={slug}>
          <Link onMouseEnter={()=>this.toggleHover()} onMouseLeave={()=>this.toggleHover()} style={styles.name} to={`/detail/${slug}`}>
            <img style={styles.image} alt={`${name}`} src={`/ships/${slug}.png`} /><br />
            {name}
          </Link>
        </li>
    );
  }
}

export default ShipTile;
