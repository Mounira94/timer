import React, { Component } from 'react';
class Hour extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <main className="main">
                    <div className="time-desc">
                        <span className="time-text">Hour </span>
                        <span className="time-text">Minute </span>
                        <span className="time-text">Second</span>
                    </div>
                </main>
            
        )
    }
}
export default Hour;