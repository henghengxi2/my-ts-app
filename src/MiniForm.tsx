import React, { Component, Props } from 'react';
import { Form } from 'antd';

interface IProps {
    [propName: string]: any;
}

interface IState {
    [propName: string]: any;
}

interface IStore {
    [propName: string]: any;
}

export default class MiniForm extends Component<IProps, IState> {

    private handleSubmit = (values: IStore) => {
        
    }

    render () {
        return (
            <Form onFinish={this.handleSubmit}>
                <div>1111</div>
            </Form>
        )
    }
}