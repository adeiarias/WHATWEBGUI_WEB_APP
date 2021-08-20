import React, { forwardRef, useState, useEffect } from "react";
import MaterialTable from "material-table"
import './../../App.css';
import './History.css';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export function History() {
  const [data, setTableData] = useState([]);

  const columns = [
    { 
      title:'Target',
      field:'target'
    },
    { 
      title:'CMS',
      field:'cms'
    },
    { 
      title:'CMS Version',
      field:'cmsVersion'
    },
    { 
      title:'Server',
      field:'server'
    },
    { 
      title:'Server Version',
      field:'serverVersion'
    },
    { 
      title:'IP Address',
      field:'ip'
    }
  ]

  useEffect(() => { 
    getScans(); 
  }, [])
  
  const getScans = () => {
    fetch('http://localhost:5000/scan-history/', {
      method:"GET"
      })
    .then(resp => resp.json())
    .then(dat => {
      setTableData(dat);
    })
    .catch(error => console.log(error))
  }
  
  return (
    <div className="App">
      <div className="tabla">
        <MaterialTable
          icons={tableIcons}
          title="SCAN HISTORY"
          columns={columns}
          data={data}
          options={{
            headerStyle: {
              fontSize: '3vh',
            },
            rowStyle: {
              fontSize: '2.5vh'
            },
            pageSize: 10,
            pageSizeOptions: [5, 10, 20, { value: data.length, label: 'All' }],
            tableLayout: 'auto',
            paginationType: 'stepped',
            searchFieldStyle: { 
              fontSize: '2vh'
            }
          }}
        />
      </div>
    </div>
  );
};

export default History