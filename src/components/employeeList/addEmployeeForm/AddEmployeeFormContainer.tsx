import React, {useState} from 'react';
import AddEmployeeForm from "./AddEmployeeForm";
import {Employee} from "../../../model/Employee";
import {addEmployee} from "../../../logic/api";
import Loader from "../../utils/Loader";

export interface AddEmployeeProps {
    updateList: () => void;
}

const AddEmployeeFormContainer: React.FC<AddEmployeeProps> = (props: AddEmployeeProps) => {
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);

    const saveEmployee = (employee: Employee) => {
        setLoading(true);
        addEmployee(employee).then(() => {
            props.updateList();
        }).catch((e) => {
            console.error("Error during adding employee\n" + JSON.stringify(e));
        }).finally(() => {
            setLoading(false);
        });
    }

    return !expanded ? <button onClick={() => setExpanded(true)}>Add employee</button> : (
        <Loader loading={loading} label={"Saving"}>
            <AddEmployeeForm saveEmployee={saveEmployee} hideForm={() => setExpanded(false)}/>
        </Loader>
    )
}

export default AddEmployeeFormContainer;
