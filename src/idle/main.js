'use strict';

const e = React.createElement;

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return e('div',
        { onClick: () => alert('hei')},
        'Content')
    }
}


ReactDOM.render(e(App), document.querySelector('#root'))