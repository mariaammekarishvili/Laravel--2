import React from 'react';
import TextInput from "../inputs/TextInput";
import MultipleSelect from "../inputs/MultipleSelect";

export default function ({register,errors,data,setValue}) {
    return (
        <>
            <TextInput label="სახელი" name="name" register={register} errorMessage={errors.name}/>

            <MultipleSelect label="classes" register={register} name="classes" setValue={setValue}
                            errorMessage={errors.classes} list={data?.classes} values={data?.selectedClasses}/>
        </>
    );
}
