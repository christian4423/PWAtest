import React, { Component } from 'react';
import { connect } from 'react-redux';


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="MapComponent">
                <div id="map"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        'layout': state.layout,
    };
};


export default connect(mapStateToProps)(HomeComponent);