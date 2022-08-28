import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function Create(){

    const inputStyles = {
        formContainer: {
            width: '400px',
            margin: '0 auto',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            margin: '15px 0'
        },
        title: {
            fontSize: '16px',
            textAlign: 'left',
            color: 'white'
        },
        input: {
            padding: '10px',
            borderRadius: '5px',
            fontSize: '16px'
        }
    }

    const buttonStyle = {
        padding: '15px 20px',
        minWidth: '200px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#1e9638',
        color: 'white',
        fontSize: '18px',
        fontWeigth: 'bolder'
    };

    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[cover, setCover] = useState('');
    const[intro, setIntro] = useState('');
    const[completed, setCompleted] = useState(false);
    const[review, setReview] = useState('');

    const store = useAppContext();
    const navigate = useNavigate();

    let handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch(name){
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;

            default:
        }
    }

    let handleChangeFile = (e) => {
        const element = e.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function(){
            setCover(reader.result.toString())
        }
    }

    let handleSubmit = (e) => {
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review
        }

        // TODO: mandar a registrar el libro
        store.createItem(newBook);
        navigate('/');
    }

    return(
        <Layout>
            <form style={inputStyles.formContainer} onSubmit={handleSubmit}>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Título</div>
                    <input 
                    type="text" 
                    name="title" 
                    onChange={handleChange} 
                    value={title}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Autor</div>
                    <input 
                    type="text" 
                    name="author" 
                    onChange={handleChange} 
                    value={author}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Portada</div>
                    <input 
                    type="file" 
                    name="cover" 
                    onChange={handleChangeFile}
                    style={inputStyles.input} />
                    <div>{!!cover ? <img src={cover} width='200' alt="preview"/> : ""}</div>
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Introducción</div>
                    <input 
                    type="text" 
                    name="intro" 
                    onChange={handleChange} 
                    value={intro}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Completado</div>
                    <input
                    type="checkbox" 
                    name="completed" 
                    onChange={handleChange} 
                    value={completed}
                    style={inputStyles.input} />
                </div>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Reseña</div>
                    <input 
                    type="text" 
                    name="review" 
                    onChange={handleChange} 
                    value={review}
                    style={inputStyles.input} />
                </div>

                <input style={buttonStyle} type="submit" value='Registrar libro' />
            </form>
        </Layout>
    )
}