import React from 'react';

class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { onchange, value, type, className } = this.props;
        return (
            <input
                className={className}
                value={value}
                type={type}
                onChange={(value) => { onchange(value) }}
            />
        )
    }
}

export default TextInput;