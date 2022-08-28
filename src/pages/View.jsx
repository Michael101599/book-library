import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function View(){

    const itemStyle = {
        container: {
            display: 'flex',
            gap: '20px',
            color: 'white',
            width: '800px',
            margin: '0 auto'
        }
    }

    const [item, setItem] = useState(null);

    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, [])

    if(!item){
        return <Layout>Item no encontrado</Layout>
    }

    return(
        <Layout>
            <div style={itemStyle.container} >
                <div>                
                    <div>{item?.cover? <img src={item.cover} width='200'/> : ''}</div>
                </div>
                <div>
                    <h2>{item?.title}</h2>
                    <div>{item?.author}</div>
                    <div>{item?.intro}</div>
                    <div>{item?.completed ? 'Leído' : 'Pendiente'}</div>
                    <div>{item?.review}</div>
                </div>
            </div>
        </Layout>
    )
}