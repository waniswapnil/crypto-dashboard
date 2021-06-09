import React from "react";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Trend from 'react-trend';

const CustomChip = ({ label }) => {
  return (
    <Trend data={[0, 10, 5, 22, 3.6, 11]}
    autoDraw
    smooth radius={20}
    width={180}
     height={120}
     gradient={['#0FF', '#F0F']}
     strokeWidth={4}
autoDrawDuration={3000}
label="newstrend"
autoDrawEasing="ease-in" />

  );
};

const CustomFilterList = (props) => {
  return <TableFilterList {...props} ItemComponent={CustomChip} />;
};

class Bonds extends React.Component {
//   const theme = createMuiTheme({
//     palette: {type: 'dark'},
//     typography: {useNextVariants: true},
// });

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#2c254a",
          color: "white",
          fill: "white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTable: {
        root: {
          backgroundColor: "#2c254a",
          fill: "white",
          color: "white",
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableFilter:{
        root: {
          backgroundColor: "#2c254a",
          fill: "white",
          color: "white",
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
    
      MUIDataTableHead:{
        root: {
          backgroundColor: "#2c254a",
          fill: "white",
          color: "white",
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableToolbar:{
        root: {
          backgroundColor: "#2c254a",
          fill: "white",
          color: "white",
        },
        icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
       },
      },
      MUIDataTableToolbarSelect:{
        root: {
          backgroundColor: "#2c254a",
          fill: "white",
          color: "white",
        },
        icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      },
      },
      MUIDataTableSearch:{
        root: {
          backgroundColor: "#2c254a",
          color: "white",
          fill: "white",
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableJumpToPage:{
        root: {
          backgroundColor: "#2c254a",
          color: "white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableBodyRow:{
                root: {
          backgroundColor: "#2c254a",
          color: "white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableViewCol:{
        root: {
          backgroundColor: "#2c254a",
          color: "white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableHeadRow:{
        root: {
          backgroundColor: "#2c254a",
          color: "white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableHeadCell:{
        root: {
          backgroundColor: "#2c254a",
          color:"white"
        },icon: {
          color: "white",
          '&:hover': {
            color: "white"
        }
      }
      },
      MUIDataTableFooter:{
  root: {
    backgroundColor: "#2c254a",
    color: "white"
  },
  icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
},
  
},
MUIDataTableFilterList:{
  root: {
    backgroundColor: "#2c254a",
    color: "white"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},
MUIDataTablePagination:{
  root: {
    backgroundColor: "#2c254a",
    color: "white"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},
MUIDataTableResize:{  root: {
    backgroundColor: "#2c254a",
    color: "white",
    fontStyle:"bold"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},
MuiToolbar: {
  root: {
    backgroundColor: '#2c254a',
    color: "white"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},
MuiTableCell: {
  head: {
    backgroundColor: '#2c254a',
    color: "white"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},
MUIDataTableSelectCell:
{
  headerCell: {
    backgroundColor: '#2c254a',
    color:"white"
  },icon: {
    color: "white",
    '&:hover': {
      color: "white"
  }
}
},

    }
  })

  render() {

    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable title={"CryptoCurrency App"} data={this.props.data} columns={this.props.columns} options={this.props.options}  components={{
                  TableFilterList: CustomFilterList,
                }}/>
      </MuiThemeProvider>
    );

  }
}

export default Bonds;