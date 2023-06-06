import React, { ChangeEvent, useState } from 'react';

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return (
        <div>
            <input value={parentValue} onChange={onChangeHandler} />
        </div>
    );
};
