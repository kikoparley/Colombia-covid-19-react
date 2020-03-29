import React from 'react';
import MaterialTable from 'material-table';

class ColombiaTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    loading:false,
    stats: [],
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://www.datos.gov.co/resource/gt2j-8ykr.json') //data source
        .then(response => response.json())
        .then(res => {
            this.setState({ stats: res, loading: false }, () => console.log(res))
        })
        .catch(error => {
            console.log(error)
        })
}
  render() {
    return (
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
          title="Casos Colombia Covid-19"
          columns={[
            { title: 'Caso N°', field: 'id_de_caso' },
            { title: 'Fecha de Diagnóstico', field: 'fecha_de_diagn_stico' },
            { title: 'Ciudad de Ubicación', field: 'ciudad_de_ubicaci_n' },
            { title: 'Departamento', field: 'departamento', type: 'text' },
            { title: 'Tipo de atención', field: 'atenci_n' },
            { title: 'Rango de edad', field: 'edad' },
            { title: 'Sexo', field: 'sexo' },
            { title: 'Origen del contagio', field: 'tipo' },
            { title: 'Pais de procedencia', field: 'pa_s_de_procedencia' },
            
          ]}

          data={this.state.stats}
          actions={[
            {
              icon: 'refresh',
              tooltip: 'Refresh',
              isFreeAction: true,
              onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
            }, 
          ]}
          options={{
            
            headerStyle: {
              backgroundColor: '#3f51b5',
              color: '#FFF'
            }}
          }
          
        />
        
        <br/>
        <p>Datos: </p>
        <a style={{textDecoration:'none', fontWeight:'bold', fontSize:'20px'}} 
        href="https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia/gt2j-8ykr/data">Api datos COVID-19 de https://www.datos.gov.co/</a>

      </React.Fragment>
    )
  }
}
export default ColombiaTable;