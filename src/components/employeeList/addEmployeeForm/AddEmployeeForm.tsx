import React, {useState} from 'react';
import {generateKey} from "../../../utils/generateKey";
import {Employee} from "../../../model/Employee";

export interface AddEmployeeFormProps {
    saveEmployee: (employee: Employee) => void;
    hideForm: () => void;
}

const AddEmployeeForm: React.FC<AddEmployeeFormProps> = (props: AddEmployeeFormProps) => {
    const [name, setName] = useState('');

    const handleReset = () => {
        props.hideForm();
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const newEmployee: Employee = {
            id: generateKey(),
            name: name,
            isActive: true
        } as Employee;
        props.saveEmployee(newEmployee);
    }

    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
            <button type={'reset'}>Cancel</button>
            <button>Save</button>
        </form>
    )

}

export default AddEmployeeForm;
