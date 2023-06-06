import React, { ChangeEvent, useState } from 'react';

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value);
    }
    return (
        <div>
            <select value={parentValue} onChange={onChangeHandler}>
                <option>none</option>
                <option value={1}>New York</option>
                <option value={2}>Frankfurt</option>
                <option value={3}>Tokyo</option>
            </select>
        </div>
    );
};
