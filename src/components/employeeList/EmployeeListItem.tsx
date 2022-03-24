import React, {useState} from 'react';
import {Employee} from "../../model/Employee";
import {deleteEmployee} from "../../logic/api";
import Loader from "../utils/Loader";

export interface EmployeeListItemProps {
    employee: Employee;
    updateList: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = (props: EmployeeListItemProps) => {
    const [loading, setLoading] = useState(false);

    const removeEmployee = () => {
        setLoading(true);
        deleteEmployee(props.employee.id).then(() => {
            props.updateList();
        }).catch((e) => {
            console.error("Error during removing employee \n" + JSON.stringify(e));
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <Loader loading={loading} label={"Deleting"}>
            <div>
                <span>{props.employee.id}.</span> {props.employee.name}
                <button onClick={removeEmployee}> Delete</button>
            </div>
        </Loader>
    );
}

export default EmployeeListItem;
