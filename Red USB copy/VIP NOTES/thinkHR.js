import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import SayHello from './components/SayHello';
import TypeSomething from './components/TypeSomething';

function App() {
    return (
        <div className="App">
            <p>
                <em>Let's write code together!</em>
            </p>
            <SayHello name={'Peter'} />
            <hr />
            <br />
            <TypeSomething />
        </div>
    );
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
// ************************************************************************************************
import React, { Component } from 'react';
import { Tagline } from './common';
import withRedText from './withRedText';

// mock API call
const mockAPI = (name = 'React') =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve(name);
        }, 1500)
    );

class SayHello extends Component {
    state = {
        loading: true,
        name: null
    };
    componentDidMount() {
        mockAPI(this.props.name).then(name =>
            this.setState({
                name,
                loading: false
            })
        );
    }
    render() {
        const { loading, name } = this.state;
        const { style } = this.props;
        // if (loading) {
        return <p style={style}>Red Text...</p>;
        // }

        // return (
        //     <div>
        //         <Tagline>Hello {name}!</Tagline>
        //     </div>
        // );
    }
}

export default withRedText(SayHello);
// *****************************************************************************************
import React from 'react';
function withRedText(WrappedComponent) {
    class myComponent extends React.Component {
        render() {
            return (
                <div>
                    <WrappedComponent style={{ color: 'red' }} />
                </div>
            );
        }
    }
    return myComponent; // return WrappedComponent;
}
export default withRedText;
// *******************************************************************************************
import styled from 'styled-components';

export const Input = styled.input`
    font-size: 14px;
    padding: 7.5px;
`;

export const Tagline = styled.p`
    background-color: ${({ color }) => color || '#13ce66'};
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-size: 18px;
    font-weight: 300;
    padding: 7.5px;
    margin: 10px 0;
`;
// **************************************************************************************************
import React from 'react';

import { Input, Tagline } from './common';

class TypeSomething extends React.Component {
    // const placeholder = 'show what user is typing';
    state = {
        placeholder: ''
    };
    onChange = e => {
        this.setState({
            placeholder: e.target.value
        });
    };
    render() {
        return (
            <div>
                <Tagline color="#009EEB">You are typing:</Tagline>
                <p>{this.state.placeholder}</p>
                <Input
                    type="text"
                    placeholder="say something..."
                    maxLength={50}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
export default TypeSomething;
