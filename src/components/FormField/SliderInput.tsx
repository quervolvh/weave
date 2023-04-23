import React from 'react';
import ReactSlider from 'react-slider';
import { classnames, numberFormat } from 'utils';

export const SliderInput: React.FC<Props> = ({ label, minValue, maxValue, className = "", onChange }) => {

    const change = (e: number) => {

        if (onChange) {

            onChange(e);

        }

    }

    return (
        <div
            className={classnames('form-field form-field-slider', className)}
            tabIndex={0}
            role={"button"}
        >


            {label &&
                <p className="form-field-title">
                    {label}
                </p>
            }

            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[minValue || 0, maxValue || 100000]}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                ariaValuetext={state => `Thumb value ${state.valueNow}`}
                renderThumb={(props) => <div {...props}></div>}
                onAfterChange={(e: [number, number]) => change(e[1] - e[0])}
                pearling
                minDistance={10}
            />

            <div className='form-field-slider-values'>

                <p> {numberFormat(minValue || 0)} </p>

                <p> {numberFormat(maxValue || 100000)} </p>

            </div>

        </div>
    );
};

interface Props {
    label?: string,
    onChange?(arg?: any): void,
    value?: boolean,
    className?: string,
    minValue?: number,
    maxValue?: number,
    type?: string
}
