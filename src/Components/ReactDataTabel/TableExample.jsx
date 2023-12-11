import React, { useState } from "react";
import DataTable from "react-data-table-component";


const columns = [
    {name:'VendorID', selector:'id', sortable:true},
    {name:'Name', selector:'name', sortable:true},
    {name:'Address', selector:'address', sortable:true},
    {name:'Phone1', selector:'phone1', sortable:true},
    {name:'EmailAddress', selector:'email', sortable:true}
];

const data = [
    {id:12, name:'Jacob', address:'22/A,Lotus Street, Colombo-8', phone1:'0714686363', email:'npniwarthana.gmail.com'},
    {id:13, name:'Luke', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369597', email:'npniwarthana.gmail.com'},
    {id:14, name:'Grayson', address:'22/A,Lotus Street, Colombo-8', phone1:'0745689861', email:'npniwarthana.gmail.com'},
    {id:15, name:'John', address:'22/A,Lotus Street, Colombo-8', phone1:'0760650258', email:'npniwarthana.gmail.com'},
    {id:16, name:'Rob', address:'45/A,Lotus Street, Colombo-8', phone1:'0768994562', email:'npniwarthana.gmail.com'},
    {id:17, name:'Max', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369598', email:'npniwarthana.gmail.com'},
    {id:18, name:'Libert', address:'78/A,Lotus Street, Colombo-8', phone1:'0716769597', email:'npniwarthana.gmail.com'},
    {id:19, name:'Frogt', address:'22/A,Lotus Street, Colombo-8', phone1:'0718182863', email:'npniwarthana.gmail.com'},
    {id:20, name:'Esmith', address:'22/A,Lotus Street, Colombo-8', phone1:'0716548737', email:'mdraperera.gmail.com'},
    {id:21, name:'Jacob', address:'22/A,Lotus Street, Colombo-8', phone1:'0714686363', email:'npniwarthana.gmail.com'},
    {id:22, name:'Luke', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369597', email:'svchandrasiri.gmail.com'},
    {id:23, name:'Grayson', address:'45/A,Lotus Street, Kadawatha', phone1:'0745689861', email:'npniwarthana.gmail.com'},
    {id:24, name:'John', address:'22/A,Lotus Street, Colombo-8', phone1:'0760650258', email:'npniwarthana.gmail.com'},
    {id:25, name:'Rob', address:'22/A,Lotus Street, Colombo-8', phone1:'0768994562', email:'robAntiss.gmail.com'},
    {id:26, name:'Max', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369598', email:'npniwarthana.gmail.com'},
    {id:27, name:'Libert', address:'22/A,Lotus Street, Colombo-8', phone1:'0716769597', email:'vikialexender.gmail.com'},
    {id:28, name:'Jacob', address:'22/A,Lotus Street, Colombo-8', phone1:'0714686363', email:'npniwarthana.gmail.com'},
    {id:29, name:'Luke', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369597', email:'su.ravendlo.gmail.com'},
    {id:30, name:'Grayson', address:'22/A,Lotus Street, Colombo-8', phone1:'0745689861', email:'npniwarthana.gmail.com'},
    {id:31, name:'John', address:'22/A,Lotus Street, Colombo-8', phone1:'0760650258', email:'npniwarthana.gmail.com'},
    {id:32, name:'Rob', address:'22/A,Lotus Street, Colombo-8', phone1:'0768994562', email:'npniwarthana.gmail.com'},
    {id:33, name:'Max', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369598', email:'npniwarthana.gmail.com'},
    {id:34, name:'Libert', address:'22/A,Lotus Street, Colombo-8', phone1:'0716769597', email:'npniwarthana.gmail.com'},
    {id:35, name:'Jacob', address:'22/A,Lotus Street, Colombo-8', phone1:'0714686363', email:'npniwarthana.gmail.com'},
    {id:36, name:'Luke', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369597', email:'npniwarthana.gmail.com'},
    {id:37, name:'Grayson', address:'22/A,Lotus Street, Colombo-8', phone1:'0745689861', email:'npniwarthana.gmail.com'},
    {id:38, name:'John', address:'22/A,Lotus Street, Colombo-8', phone1:'0760650258', email:'npniwarthana.gmail.com'},
    {id:39, name:'Rob', address:'22/A,Lotus Street, Colombo-8', phone1:'0768994562', email:'npniwarthana.gmail.com'},
    {id:40, name:'Max', address:'22/A,Lotus Street, Colombo-8', phone1:'0716369598', email:'npniwarthana.gmail.com'},
    {id:41, name:'Libert', address:'22/A,Lotus Street, Colombo-8', phone1:'0716769597', email:'npniwarthana.gmail.com'}
];

const TableExample = () => {
    const[globalFilterText, setGlobalFilterText ] = useState('');
    function handleGlobalFilters(e) {
        const value = e.target.value || '';
        setGlobalFilterText(value);

    }

    const filteredData = data.filter((row) => {
        return Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(globalFilterText.toLowerCase()));
    });

    return(
        <>

        <div className="d-flex flex-column align-items-center">
            <h1><center>Vendors Datatable</center></h1>
        </div>

        <input
            type="text"
            placeholder="Search here..."
            onChange={handleGlobalFilters}
            value={globalFilterText}
        />


        <DataTable
            title="Vendor Table"
            columns={columns}
            data={filteredData}
            pagination
            highlightOnHover
            responsive
            fixedHeader
            fixedHeaderScrollHeight="450 px"
            paginationPerPage={7}
            paginationRowsPerPageOptions={[5,10,20,25,30]}
        />





        </>

    )

};

export default TableExample;