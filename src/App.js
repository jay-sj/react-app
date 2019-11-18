import React, { Component } from 'react'
// 配置路由
import { HashRouter as Router,Route,Switch ,Redirect} from "react-router-dom"
// 引入登录页面
import Login from "./pages/Login"
import  Layout  from "./pages/Layout"
export default class App extends Component{
    render(){
        return(
         <Router>
             <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/index" component={Layout}/>
                <Redirect to="/index" />
             </Switch>
         </Router>
        )
    }
}