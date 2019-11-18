import React, { Component } from 'react'

import { Route,Switch,Redirect } from 'react-router-dom'

import { Home,Cate,Cart,My } from "./index"

export default class Layout extends Component {
    render() {
       
        const { path } = this.props.match;
        return (
            <Switch>
               <Route path={ path + '/home' } component={Home}/>
               <Route path={ path + '/cate' } component={Cate}/>
               <Route path={ path + '/cart' } component={Cart}/>
               <Route path={ path + '/my' } component={My}/>
               <Redirect to= {path + '/home'} />
            </Switch>
        )
    }
}
