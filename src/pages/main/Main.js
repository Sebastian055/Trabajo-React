import TableMain from "./components/TableMain";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import LoaderAllItems from "../../services/LoaderAllItems";

const Main = () => {

    const params = useParams()
    const url = `http://localhost:3001/brakes`
    const id = params.id
    const [cleanDataDetail, setcleanDataDetail] = useState([])
      
    useEffect(() => {
        LoaderAllItems(setcleanDataDetail, url, id)
    }, [id, url, setcleanDataDetail])


    return (
        <div>
            <h1>Interfaz SBS</h1>
            <TableMain data={cleanDataDetail}/>
        </div>
    )
}

export default Main;