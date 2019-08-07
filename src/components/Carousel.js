import React, { Component } from 'react'


export default class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: this.props.images,
            image: 0,
        }
    }

    componentWillMount() {
        setInterval(() => {
            if(this.state.image === 4) {
                this.setState({ image: 0} ) 
            } else {
                this.setState({ image: this.state.image + 1 })
            }
        }, 10000);
    }

    nextImage = () => {
        if(this.state.image === this.state.images.length - 1) {
            this.setState({ image: 0} ) 
        } else {
            this.setState({ image: this.state.image + 1 })
        }
    }

    setImage(image) {
        this.setState({image})
    }

    render() {
        const { images, image } = this.state;
        return (
            <div className="carousel-container">
                <img src={images[image]} alt='makeup'/>
                <i className="button-left fas fa-chevron-left" onClick={this.nextImage}></i>
                <i className="button-right fas fa-chevron-right" onClick={this.nextImage}></i>
                <div className="slide-buttons">
                    {this.state.images.map((e, i) => (
                        this.state.image === i ? 
                            <i className="fas fa-dot-circle" style={{fontSize: '2rem', color: 'white'}}></i> : 
                            <i className="fas fa-circle" style={{fontSize: '2rem', color: 'gray'}} onClick={() => this.setImage(i)}></i>
                    ))}
                </div>
            </div>
        )
    }
}
