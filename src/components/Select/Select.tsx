import React, { useState, KeyboardEvent, useEffect } from 'react';
import styles from './Select.module.css'

type ItemsType = {
    title: string
    value?: any
}
type SelectType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}
export const Select = (props: SelectType) => {
    const selectedItem = props.items.find(i => i.value === props.value);
    const [active, setActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElement);
    useEffect(() => {
        setHoveredElement(props.value);
    }, [props.value])
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const nextClicked = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (nextClicked) {
                        props.onChange(nextClicked.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }
    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElement(i.value)
                            }}
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}
                        >{i.title}
                        </div>)}
                    </div>}
            </div>
        </>
    );
};