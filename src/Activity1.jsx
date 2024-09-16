import React from "react";
function Activity1() {
  return (
    <>
      <center>
        <h5>Details</h5>
        <table className="n1" border={1}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro commerical Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </center>
    </>
  );
}

export default Activity1;
