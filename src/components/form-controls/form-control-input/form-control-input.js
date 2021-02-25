import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import i18next from "i18next";

export const FormControlInput = (
    props,
    validate
) => {
    const [state, setData] = useState({
        value: props.value,
        type: props.type || 'text',
        ngUntouched: true,
        ngDirty: false,
        ngPristine: false,
        ngValid: true,
        errors: {}
    });

    const handleClick = (event) => {
        state.ngUntouched = false;

        setData(state);
    }


    const isValid = () => {
        let value = true;
        let fields = props.validateRules;

        for (let key of Object.keys(fields)) {
            let name = Object.keys(fields[key][0]);
            let error = fields[key][name](name, state.value);

            if (error) {
                value = false;
                state.errors[name] = error[name];
                setData(state);
            }
        }

        return value;
    }


    const handleChange = (event) => {
        state.touched = true;

        let json = {};

        json[props.name] = event.target.value;

        if (props['onChange']) {
            props['onChange'](json);
        }
        state.value = event.target.value;

        setData(state);

        if (props.validateRules) {
            isValid();
        }
    }

    // Аналогично componentDidMount и componentDidUpdate:
    useEffect(() => {
        console.log('Do something after counter has changed');
    }, [state.value]);

    let inputClass = "form-control";

    inputClass += (state.ngUntouched) ? ' ng-untouched' : ' ng-touched';
    inputClass += (state.ngDirty) ? ' ng-dirty' : ' ng-pristine';
    inputClass += (state.ngValid) ? ' ng-valid' : 'ng-invalid';

    return (
        <div className='form-group form-control-input'>
            <label className="form-control-input-label">{i18next.t(props.label)}</label>
            <input
                className={inputClass}
                type={state.type}
                placeholder={props.placeholder | ''}
                defaultValue={state.value | ''}
                onClick={handleClick}
                onChange={handleChange}/>

            {state.errors && props.validateStatus && <div className={'error'}>{state.errors[0]}</div>}
        </div>
    );
}

FormControlInput.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    validateStatus: PropTypes.bool.isRequired,
    validateRules: PropTypes.array,
    placeholder: PropTypes.string
}