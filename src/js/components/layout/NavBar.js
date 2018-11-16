import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLeftPanel } from '../../actions/layoutActions';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.togglePanel = this.togglePanel.bind(this);
    }
    getLIclass(type) {
        if (this.props.layout === type) {
            return "nav-item Active"
        }
        return "nav-item";
    }
    togglePanel() {
        this.props.actions.toggleLeftPanel()
    }
    render() {
        return (
            <div className="NavContainer">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Enviroweather</a>
                    <button className="navbar-toggler" type='button' data-toggle='collapse' data-target='#navbarMain' aria-controls='navbarMain' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbarMain" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button onClick={this.togglePanel} className="btn btn-outline-warning">Toggle Left Panel</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        layout: state.layout
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            toggleLeftPanel: () => { dispatch(toggleLeftPanel()) },
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));