import React, {Component} from 'react';
import {DATA} from './data';


class C1 extends Component{
  render(){
    return(
      <table border="1">
        <thead>
          <th>Codigo</th>
          <th>Alumno</th>
          <th>Carrera</th>
          <th>Promedio</th>
        </thead>
        <tbody>
          <tr>
            <td>
              {DATA[0]['codigo']}
            </td>
            <td>
              {DATA[0]['nombre']}
            </td>
            <td>
              {DATA[0]['carrera']}
            </td>
            <td>
              {DATA[0]['promedio']}
            </td>
          </tr>
                this.promedioMayor12({DATA});
        </tbody>
      </table>
    );
  }
}

function promedioMayor12(data){
  var arrayLength = data.length;
  for (var i=0; i < arrayLength; i++){
    return (
      '<tr> <td> ' + data[i]['codigo'] + '</td></tr>'
    );
  }
}


export default C1;
