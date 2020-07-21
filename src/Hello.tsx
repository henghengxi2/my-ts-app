import React, { Component } from 'react'
import './Hello.css'

interface Props {
    name: string;
    eLevel?: number;
}

export default class Hello extends Component<Props, {}>{
    render () {
        const {name, eLevel = 1} = this.props
        return (
                <div className="color">{`Hello, ${name} ${getLevelNum(eLevel)}`}</div>
        )
    }
}

function getLevelNum(eLevel: number) {
    if (eLevel <= 0) {
        throw Error('please input !')
    }
    return Array(eLevel + 1).join('!')
}