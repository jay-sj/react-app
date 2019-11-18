import React, { Component } from 'react'

import { Carousel } from "antd-mobile"
import PropTypes from 'prop-types'
import "./index.less"
export default class MyCarousel extends Component {
    static propTypes = {
        swipers : PropTypes.array
    }
    constructor(){
        super();
        this.state = {
            imgHeight : 170
        }
    }
    render() {
        return (
            <div className="my-carousel">
                <Carousel
                    autoplay={false}
                    infinite
                    >
                    {
                        this.props.swipers.map((el,index)=>{
                            return (
                                // eslint-disable-next-line jsx-a11y/alt-text
                                <img className="pic"
                                    height={ this.state.imgHeight }
                                    src={el.picUrl}
                                    key={el.id}
                                    onLoad = {
                                       ()=>{
                                        this.setState({ imgHeight: 'auto' });
                                       } 
                                    }
                                />
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}