import React from 'react';

class LableComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { className, value } = this.props;
        return (
            <span
                className={className}
            >{value}</span>
        )
    }
}

export default LableComponent;