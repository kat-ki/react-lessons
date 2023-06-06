import React, { ChangeEvent, useState } from 'react';

export const ControlledCheckbox = () => {
    const [checkboxValue, setCheckboxValue] = useState(true);
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(event.currentTarget.checked);
    } 
    return (
        <div>
            <input type='checkbox' checked={checkboxValue} onChange={onChangeHandler} />
        </div>
    );
};

