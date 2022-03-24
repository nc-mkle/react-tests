import React, {useEffect, useState} from 'react';
import {getEmployees} from "../../logic/api";
import EmployeeListItem from "./EmployeeListItem";
import {Employee} from "../../model/Employee";
import Loader from "../utils/Loader";
import AddEmployeeFormContainer from './addEmployeeForm/AddEmployeeFormContainer';

const EmployeeList: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        updateList();
    }, [])

    const updateList = () => {
        setLoading(true);
        getEmployees().then(data => {
            setEmployees(data);
        }).catch((e) => {
            console.error("Error during updating the employee list \n" + JSON.stringify(e));
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <Loader loading={loading}>
            {employees.map((employee: Employee) => (
                <EmployeeListItem key={employee.id} employee={employee} updateList={updateList}/>
            ))}
            <AddEmployeeFormContainer updateList={updateList}/>
        </Loader>
    );
}

export default EmployeeList;
