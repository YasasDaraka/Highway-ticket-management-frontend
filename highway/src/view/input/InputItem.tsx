import {Input, InputProps} from "../ui/input";
import PropTypes from "prop-types";

import React, {
    useEffect,
    useRef,
    useState
} from "react";
import {Label} from "../ui/label";
import add from "../images/add-icon.gif";

export function InputItem(props:any) {

    const initialValue = props.value || '';
    const [inputValue, setInputValue] = useState(initialValue);
    const prevInputValue = useRef(initialValue);

    useEffect(() => {
        setInputValue(props.value || '');
    }, [props.value]);

    useEffect(() => {
        if (inputValue !== prevInputValue.current) {
            prevInputValue.current = inputValue;
        }
    }, [inputValue]);

    useEffect(() => {
        if (props.resetForm) {
            resetValue();
        }
    }, [props.resetForm]);

    const resetValue = () => {
        setInputValue('');
    };

    const handleChange = (event: { target: { value: any; }; }) => {
        props.setResetForm(false);
        const newValue = event.target.value;
        setInputValue(newValue);
        if (props.onChange) {
            props.onChange(event);
        }
    };

    const handleSubmit = (event: any) => {
        if (props.onSubmit) {
            props.onSubmit(event)
        }
    }


    const setInput = () => {
        if (props.type === 'text' || props.type === 'number' || props.type === 'email' || props.type === 'date' || props.type === 'file') {
            return (
                <div className="flex">
                <Input

                    {...props.register(props.id)}
                    id={props.id}
                    type={props.type}
                    name={props.id}
                    placeholder={props.placeholder}
                    className="mt-2 mb-1 w-full"
                    value={inputValue}
                    readOnly={props.isEdit}
                    onChange={handleChange}
                    required={props.isRequired}
                    defaultValue={props.defaultValue}
                />
                    {(props.id === 'nic' || props.id === 'licensePlate' || props.id === 'id') && (
                        <img
                            id="bar-icon"
                            className="relative left-3 top-2 w-9 h-9"
                            src={add}
                            alt="Icon"
                        />
                    )}
            </div>
            );


        } else if (props.type === 'select') {
            return (

                <select
                    {...props.register(props.id)}
                    id={props.id}
                    onChange={handleChange}
                    value={inputValue}
                    onSubmit={handleSubmit}
                    required
                    className="mt-2 mb-1 w-full h-9 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 bg-transparent px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50">
                    <option></option>
                    {props.selectList.map((item:any) => (
                        <option
                            key={item}
                            value={item}

                            className=""
                        >
                            {item}
                        </option>
                    ))}
                </select>
            )
        }
    }



    return (
        <div className="z-10 mt-3" key={props.id}>
            <Label className="text-[#f0f0f0]">{props.title}</Label>
            {setInput()}
            <p className={"text-sm text-red-500"}>{props.description}</p>
        </div>
    );
}

InputItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'email', 'date', 'select']).isRequired,
    selectList: PropTypes.array,
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    watch: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
    isEdit: PropTypes.bool,
    setValue: PropTypes.func,
    onSubmit: PropTypes.func,
    isRequired:PropTypes.bool,
    requiredLength: PropTypes.number,
    resetForm: PropTypes.bool,
    setResetForm: PropTypes.func,
    defaultValue: PropTypes.string
};
