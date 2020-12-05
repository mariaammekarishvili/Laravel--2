import React, {useEffect} from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

export default function ({label,register,name,setValue,errorMessage,list=[],values=[],className=""}) {
    useEffect(()=>{
        register({name:name});
        setValue(name,values);
    },[register]);

    const onSelect = (selectedList, selectedItem)=> {
        setValue(name,selectedList.map(item=>{
            return {id:item.id}
        }));
    }

    const onRemove=(selectedList, removedItem)=> {
        setValue(name,selectedList.map(item=>{
            return {id:item.id}
        }));
    }
    return (
        <div className={`form-group ${className}`}>
            <h5 className="col-form-label">{label}</h5>
                <Multiselect
                        options={list}
                        selectedValues={values}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        placeholder={label}
                        displayValue="name"
                        emptyRecordMsg="ვერ მოიძებნა"
                />

            <span className="error invalid-feedback d-block">{errorMessage}</span>
        </div>
    );
}
