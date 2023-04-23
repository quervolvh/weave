import React, { useEffect, useState } from "react";
import { Button, FormField, Modal } from "components";
import { FilterIcon } from "components";
import { change, classnames, primitiveObj } from "utils";
import { generateOptionConsiderations } from "utils/input";
import { useGetParamsOnLoad } from "hooks/useGetParamsOnLoad";

export const Filters: React.FC<Props> = ({ filterOptions, onReset }) => {

    const { options, label, classNames, noFilterIcon, safeParams, onSubmit } = filterOptions || {};

    const initialSelection = ({
        ...generateOptionConsiderations(
            true,
            (options || []).map(item => ({ value: item.value })),
            "value"
        ),
        startDate: null,
        endDate: null
    });

    const [state, setState] = useState<{
        selection: { [key: string]: boolean | string | undefined | null | { [key: string]: boolean | string | undefined | null } },
        showOptions: boolean,
        outsideEscape: boolean,
        loadQueries: {
            items: primitiveObj,
            animation: boolean
        },
    }>({

        selection: initialSelection,

        showOptions: false,

        outsideEscape: true,

        loadQueries: { items: {}, animation: false }

    });

    const createChange = (

        val: string | boolean | { [key: string]: string | boolean | number },

        key: "outsideEscape" | "showOptions" | "selection",

    ) => {

        const objValue = typeof val !== "string" && typeof val !== "boolean" && typeof val !== "number";

        if (key === "selection" && objValue) {

            change({ ...state.selection, ...val }, "selection", setState);

            return;

        }

        change(val, key, setState);

    }

    const composeSubmission = () => {

        const currentSelection = state.selection;

        type valType = string | null | undefined | boolean;

        let newSubmission: { [key: string]: valType | { [key: string]: valType } } = {};

        options?.forEach(item => {

            const key = item.value;

            if (!item?.multiSelect) {

                const current = currentSelection?.[key] as never as { label: string, value: string };

                // if current is a string, then this value was probably a param object that represented the current

                // filters that existed on page load

                newSubmission[key] = typeof current === "string" ? current : current?.value;

            }

        });

        newSubmission.startDate = currentSelection?.startDate;

        newSubmission.endDate = currentSelection?.endDate;

        return { ...currentSelection, ...newSubmission };

    }

    useGetParamsOnLoad({

        safeParams: (safeParams || [])?.filter(item => item !== "searchString"),

        setter: (items) => {

            if (Object.keys(items).length > 0) {

                setState((prevState) => ({
                    ...prevState,
                    loadQueries: { items, animation: true },
                    // Add the loadParams to the state-selection
                    selection: { ...prevState.selection, ...(items || {}) }
                }));

                return;

            }

        }
    });

    useEffect(() => {

        if (state.loadQueries.animation) {

            setTimeout(() => {

                setState((prevState) => ({
                    ...prevState,
                    loadQueries: { ...prevState.loadQueries, animation: false },
                }));


            }, 15000);

        }

        // eslint-disable-next-line
    }, [state.loadQueries.animation]);

    return (
        <div
            className={classnames("form-field component-filter-box", classNames)}
        >

            <Button

                label={label || 'Filters'}

                svgIcon={noFilterIcon === true ? undefined : FilterIcon}

                color={state?.loadQueries?.animation ? "color-white" : ""}

                className={classnames("component-filter-box-button", state.loadQueries.animation && "glowing")}

                onClick={() => createChange(!state.showOptions, "showOptions")}

            />



            <Modal

                toggleOut={()=> setState((prevState)=> ({ ...prevState , showOptions : false }))}

                visibility={state.showOptions}

                holderClass={"settings-modal-holder"}

                legendClass="modal-legend-left modal-legend-bold"

                class={classnames("component-filter-box modal-default-alignment")}

                title="Filter"

            >

                <>

                    <ul>

                        {options?.map((item, index) =>

                            <li key={`filter-option-${item.value}-${index}`}>

                                {item?.type ? <FormField {...(item as any)} />

                                    :

                                    <FormField

                                        type={"option"}

                                        options={!item?.options ? [item] : item.options}

                                        onChange={(e) => createChange(!item?.options ? e : { [item?.value as string]: e }, "selection")}

                                        label={item.label}

                                        multiSelect={item?.multiSelect}

                                        alwaysVisible={item?.alwaysVisible}

                                        withSubmission={true}

                                        className="component-filter-box-options"

                                        defaultValue={state.loadQueries?.items?.[item?.value]}

                                        value={state?.selection?.[item?.value]}

                                    />

                                }

                            </li>

                        )}

                    </ul>

                    <div className="component-filter-box-select-buttons">

                        <Button
                            label="Reset"
                            onClick={() => {

                                onSubmit && onSubmit(initialSelection);

                                onReset();

                            }}

                        />

                        <Button label="Apply" onClick={() => onSubmit && onSubmit(composeSubmission())} />

                    </div>

                </>

            </Modal>

        </div>
    );

}

type optionType = {

    label: string,

    value: string,

    type?: string,

    multiSelect?: boolean,

    alwaysVisible?: boolean,

    options?: {

        label: string,

        value?: string | boolean | null

    }[]

}[];

interface Props {

    className?: string | undefined,

    onReset: () => void,

    filterOptions?: {

        label?: string,

        options?: optionType,

        safeParams?: string[],

        classNames?: string,

        noFilterIcon?: boolean,

        preSelectedOption?: string,

        onSubmit?: (e: { [key: string]: string | boolean | undefined | null | { [key: string]: boolean | string | undefined | null } }) => void
    }

}
