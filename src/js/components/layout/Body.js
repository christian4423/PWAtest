import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from "../HomeComponent";
import { setActiveTab, toggleLeftPanel } from "../../actions/layoutActions";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: ["service", "catalog", "legend"]
        }
        this.setTab = this.setTab.bind(this);
    }
    setTab(e,tab){
        e.preventDefault();
        this.props.actions.setActiveTab(tab);
    }
    renderTabs() {
        return this.state.tabs.map((value, index) => {
            if (this.props.tab === value) {
                return <li class="nav-item" onClick={(e)=>{this.setTab(e,value)}} key={`pill-0${index}`}>
                    <a class="nav-link active"  href="#">{value}</a>
                </li>
            } else {
                return <li class="nav-item" onClick={(e)=>{this.setTab(e,value)}} key={`pill-0${index}`}>
                <a class="nav-link" href="#">{value}</a>
            </li>
            }
        })
    }
    getClassName(type){
        if(this.props.tab === type){
            return "";
        }else{
            return "hide_container"
        }
    }
    getLeftPanelClassName(){
        if(!this.props.showLeftPanel){
            return "leftPanelContainer hide_container";
        }else{
            return "col-sm-12 col-md-12 col-lg-3 leftPanelContainer";
        }
    }
    getRightPanelClassName(){
        if(this.props.showLeftPanel){
            return "col-sm-12 col-md-12 col-lg-9 rightPanelContainer";
        }else{
            return "col-12 rightPanelContainer";
        }
    }
    render() {
        return (
            <div className="BodyContainer">
                <div className="row">
                    <div className={this.getLeftPanelClassName()}>
                        <div className="infoPanel">
                            <ul class="nav nav-pills nav-fill">
                                {this.renderTabs()}
                            </ul>
                            <div className={this.getClassName("service")} id="service-tab"></div>
                            <div className={this.getClassName("catalog")} id="catalog"></div>
                        </div>
                    </div>
                    <div className={this.getRightPanelClassName()}>
                        <HomeComponent />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        showLeftPanel: state.layout.showLeftPanel,
        tab: state.layout.tab
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            setActiveTab: (tab = "service") => dispatch(setActiveTab(tab)),
            toggleLeftPanel: () => dispatch(toggleLeftPanel())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Body);
