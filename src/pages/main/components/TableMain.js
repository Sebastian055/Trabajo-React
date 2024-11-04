import React from 'react'

const TableMain = ({ data }) => {
    console.log(data)
    if (data === null) {
        return <p>No data available.</p>
    }
    return (
        <table className="table table-striped-columns p-2">
            {data.map((datas, index) => (
                <tbody key={index}>
                    <tr>
                        <th scope="row">Id:</th>
                        <td>{datas.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">Data:</th>
                        <td>{datas.data}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    )
}

export default TableMain