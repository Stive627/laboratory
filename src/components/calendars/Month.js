import React from 'react'

function Month({month, r1, r2, r3, r4, r5, r6=undefined}) {
    const title = ['S','M','T','W','T','F','S']
  return (
    <table className=' w-full border' style={{borderColor:'rgba(204, 204, 204, 1)'}}>
        <tbody>
        <tr>
            <th colSpan={7}>{month}</th>
        </tr>
        <tr>
            {title.map((elt, indx) => <th key={indx}>{elt}</th>)}
        </tr>
        <tr>
            {r1.map((elt, indx) => <td key={indx}>{elt}</td>)}
        </tr>
        <tr>
            {r2.map((elt, indx) => <td key={indx}>{elt}</td>)}
        </tr>
        <tr>
            {r3.map((elt, indx) => <td key={indx}>{elt}</td>)}
        </tr>
        <tr>
            {r4.map((elt, indx) => <td key={indx}>{elt}</td>)}
        </tr>
        <tr>
            {r5.map((elt, indx) => <td key={indx}>{elt}</td>)}
        </tr>
        {
        r6 &&   <tr>
                    {r6.map((elt, indx) => <td key={indx}>{elt}</td>)}
                </tr>
        }
        </tbody>
    </table>
  )
}

export default Month