import { Link } from "react-router-dom";

export default function Book({item}){

    const bookStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
    };

    const imagestyle = {
        with: '200px'
    }

    const bookInfo = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        textDecoration: 'none',
    }

    return(
        <div style={bookStyle}>
            <Link to={`/view/${item.id}`} style={bookInfo}>
                <img style={imagestyle} src={item.cover} alt={item.title} />
                <div>{item.title}</div>
            </Link>
        </div>
    )
}