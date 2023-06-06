import React, { ChangeEvent, useRef, useState } from 'react';

export const UncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const currentInputValue = event.currentTarget.value;
        setValue(currentInputValue);
    }
    return (
        <div>
            <input onChange={onChangeHandler} /> {value}
        </div>
    );
};

export const GetValueFromUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const saveButtonHandler = () => {
        const inputText = inputRef.current as HTMLInputElement;
        setValue(inputText.value)
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={saveButtonHandler}>Save</button>
            - current value:
            {value}
        </div>
    );
};
