import React, { Component } from 'react'

import { SearchBar } from "antd-mobile"
import "./index.less"

export default class index extends Component {
    render() {
        return (
            <div className="my-search" onClick = {this.props.enterSearch}>
                <SearchBar placeholder="请输入搜索的商品"
                disabled
              
                />
            </div>
        )
    }
}