import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store"

export default function Index(){

    const booksContainer = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px'
    };

    const store = useAppContext();

    return(
        <Layout>
            <div style={booksContainer}>
            {store.items.map((item) => (
                <Book key={item.id} item={item}/>
            ))}
            </div>
        </Layout>
    )
}