import React, { Component ,Fragment} from 'react'
import { Grid } from 'antd-mobile';
import PropTypes from "prop-types"
export default class MyGrid extends Component {
    constructor(){
        super();
        this.state = {
            icons:[]
        }
    }
    static propsTypes = {
        grids : PropTypes.array
    }
    static defaultProps = [
        {}
    ]
    static getDerivedStateFromProps(props,state){
        const { icons } = props;
        // eslint-disable-next-line array-callback-return
        icons.map(el=>{
            el.text = el.name;
        });
        if( icons !== state.icons ){
            // 有点类似于 vue 计算属性的功能
            return {
                icons:icons
            }
        }
        return null
        
    } 
    // 生命周期 接收到props生命周期
    render() {
        return (
            <Fragment>
                 <Grid data={this.state.icons} columnNum={4} 
                    onClick = { this.handleClick.bind(this) }
                 />
            </Fragment>
        )
    }
    handleClick(obj){
        this.props.enterList(obj.id);
    }
}