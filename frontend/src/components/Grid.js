import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {
        super(props);

    }

    createTableHeader = (members) => {
        let tableHeader = [];
        console.log(members);
        for (let i = 0; i < members.length; i++) {
            tableHeader.push(<th key={i}>Column{i}</th>)
        }
        return tableHeader;
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.createTableHeader(this.props.members)}
                    </tr>
                </thead>
                <tbody>
                <tr>
                    {this.props.members.map((member, idx) => {
                        return <td key={idx}>{member.AgentCode}</td>
                    })}
                </tr>
                </tbody>
            </table>
        )
    }
};

export default Grid;