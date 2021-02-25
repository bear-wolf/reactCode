import React from 'react';
import PropTypes from 'prop-types'

export class FormControlSelect extends React.Component {
    options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
        { custom: true }
    ];

    state = {
        value: 'Select an Option'
    }

    constructor(props) {
        super(props);

        //this.handleChange = this.props.onChange ? this.props.onChange : this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }

    render() {
        return <div className='form-group form-control-input'>
                    <label className="form-control-input-label">{this.props.label}</label>
                    <select
                            name="part_id"
                            value={this.state.value}
                            className="form-control"
                            onChange={this.handleChange} >
                            {
                                this.options.map((option, index) => {
                                    return <option value={option.value} key={index}>{option.label}</option>
                                })
                            }
                    </select>
                </div>
    }
}

FormControlSelect.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.object,
    placeholder: PropTypes.string
}