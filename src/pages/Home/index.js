import React, { Component } from 'react'

import { MyTabBar, MySearh } from "../../components"
import axios  from 'axios';
import qs from 'qs';
import MyCarousel from '../../components/MyCarousel';
import MyGrid from "./components/MyGrid"
import { Toast ,PullToRefresh, Flex ,Card} from "antd-mobile"
import "./index.less"
export default class Home extends Component {
    
    constructor(){
        super();
        this.state={
            swipers:[{id:-1}],
            icons:[{}],
            recommends:[{
                id:-1
            }]
        }
        //指定this指向
        this.fetchBannerData = this.fetchBannerData.bind(this);
        this.fetchAllCate = this.fetchAllCate.bind(this);

    }
    render() {
        return (
            <div>
                首页
                {/* 搜索 */}
                <MySearh
                    enterSearch = { this.enterSearch.bind(this) }
                />
                <br/>
                <div className="main">
               
               {/* 轮播 */}
               <MyCarousel
                    swipers={this.state.swipers}
                    />
                     </div>
                {/* 九宫格 */}
                <MyGrid 
                    icons ={ this.state.icons}
                    enterList = { this.enterList.bind(this) }
                />
                {/* 商品推荐 */}
                <div className="floor">
                    <div className="floor-head">
                        <h3 className="floor-head__title">
                            热门商品
                        </h3>
                        <span className="more">
                            <i className="iconfont icon-dibudaohanglan-"></i>
                        </span>
                    </div>
                    <Flex 
                        wrap="wrap"
                        
                        className="floor-main">
                        {
                            this.state.recommends.map((el,index)=>{
                                return (
                                    <Flex.Item key={el.id}>
                                        <Card>
                                            <Card.Body>
                                                <div className="card-body">
                                                    <img src={el.pic}/>
                                                    <p className="itemName">
                                                        {el.name}
                                                    </p>
                                                </div>
                                            </Card.Body>
                                <Card.Footer content={ el.minPrice } extra={<div className="addCart">+</div>} />
                                        </Card>
                                    </Flex.Item>    
                                )
                            })
                        }
                    </Flex>
                </div>
                    
                {/* 下导航 */}
                <MyTabBar
                    active={ 0 }
                />
            </div>
        )
    }
    componentDidMount(){
        this.fetchBannerData();
        this.fetchAllCate();
        this.fetchRecommend();
    }
    // 进入列表页
     enterList(id){
        alert(id)
    }
    //搜索
    enterSearch(){
        alert(1);
    }
   
    // 九宫格
    fetchAllCate(){
        axios.get("/jay/shop/goods/category/all").then(res=>{
          
            if( res.data.code === 0 ){
                this.setState({
                    icons : res.data.data.filter(el => el.type == "react")
                });
            }
        })
    } 
     // 获取所有的推荐商品的数据
    fetchRecommend(){
        // Toast.loading("",0);
        axios.post("/jay/shop/goods/list",qs.stringify({
            categoryId: 75806,
            recommendStatus:1
        })).then(res=>{
            console.log(res);
            if( res.data.code === 0){
                this.setState({
                    recommends:res.data.data,
                    refresh:false
                });
                // Toast.hide();
            } 
        });
    }
     // 无过滤轮播
   /*  async fetchBannerData(){
       
        let res = await axios.get("/jay/banner/list");
       if(res.data.code === 0){
            this.setState({
                swipers:res.data.data
            });
       }
    } */
    //过滤轮播
    async fetchBannerData(){
        let res = await axios.get("/jay/banner/list").then(res=>{
            if(res.data.code === 0){
                this.setState({
                    swipers:res.data.data.filter(el => el.type == "1")
                });
           }
        })
    }
}

