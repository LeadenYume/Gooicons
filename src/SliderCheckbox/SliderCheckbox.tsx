import { useMount, useUnmount } from 'ahooks';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import styles from './SliderCheckbox.module.css';


export interface SliderCheckboxProps {
    startValue?: boolean;
    onChange?: (value: boolean) => void;
}


export function SliderCheckbox(props: SliderCheckboxProps) {
    let inputRef = useRef(React.createRef<HTMLDivElement>());
    let [value, setValue] = useState(props.startValue ? true : false);

    let valueRef = useRef(value);
    valueRef.current = value;

    return <div
        onClick={(e) => {
            e.preventDefault();
            if (props.onChange)
                props.onChange(!valueRef.current);

            setValue(!valueRef.current);
        }}
        ref={inputRef.current}
        className={classNames(styles.main, {
            [styles.mainChecked]: value
        })}
    >
        <div className={classNames(styles.switch, {
            [styles.switchChecked]: value
        })}
        ></div>
    </div>
}