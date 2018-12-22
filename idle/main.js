import * as React from 'react'
import { render } from 'react-dom'

const App = () => {
    return (
        <h1>Hello idle world!</h1>
    )
}

render(<App />, document.querySelector('#root'))