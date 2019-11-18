import React, { Component } from 'react'
import PropTypes from "prop-types"
import { TabBar} from 'antd-mobile';
import "./index.less"
import { Link  } from "react-router-dom"
export default class MyTabBar extends Component {
    static defaultProps = {
        active:0
    }
    static propTypes = {
        active :PropTypes.number
    }
    render() {
        return (
            <div className="my-tab-bar">
                  <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#F1782F"
                    barTintColor="white"
                    tabBarPosition="bottom"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <Link to="/index/home">
                                <i className="iconfont icon-1"></i>
                           </Link>
                        }
                        selectedIcon = {
                            <Link to="/index/home">
                                <i className="iconfont icon-1"></i>
                            </Link>
                        }
                        selected={ this.props.active === 0 }
                        
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="分类"
                        key="cate"
                        icon={
                            <Link to="/index/cate">
                                <i className="iconfont icon-leimupinleifenleileibie2"></i>
                           </Link>
                        }
                        selectedIcon = {
                            <Link to="/index/cate">
                                <i className="iconfont icon-leimupinleifenleileibie2"></i>
                           </Link>
                        }
                        selected={ this.props.active === 1 }
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="购物车"
                        key="cart"
                        icon={
                            <Link to="/index/cart">
                            <i className="iconfont icon-ai-cart"></i>
                           </Link>
                        }
                        selectedIcon = {
                            <Link to="/index/cart">
                                <i className="iconfont icon-ai-cart"></i>
                           </Link>
                        }
                        selected={ this.props.active === 2 }
                       badge={ 0 }
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="我的"
                        key="my"
                        icon={
                            <Link to="/index/my">
                                <i className="iconfont icon-wode"></i>
                           </Link>
                        }
                        selectedIcon = {
                            <Link to="/index/my">
                                <i className="iconfont icon-wode"></i>
                           </Link>
                        }
                        selected={ this.props.active === 3 } 
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}