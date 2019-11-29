import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../components/Home'

export const AppRoute = () => (
    <Router>
        <div>
                    <div className="row bg-color">
                    <div className="col-md-1" >
                    <img src="https://clipart.info/images/ccovers/1499794873github-logo-png.png"
                            alt="Git-Hub-Logo"
                            border="0"
                            className="logo" />
                    </div>
                    <div className="col-md-11">
                    <Route exact path="/" component={Home} />
                    </div>
                    </div>
        </div>
    </Router>
);