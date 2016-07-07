import React from "react";
import ReactDOM from "react-dom";
require('../sass/main.sass');

import Main from "./components/Main";

const app = document.getElementById('app');
ReactDOM.render(<Main/>, app);
