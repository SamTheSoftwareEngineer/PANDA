import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    const move = () => {
        navigate('/routine')
    }

    return (
        <div>
            <h1>This is the home page</h1>
            <button onClick={move}>Routines</button>
        </div>
    )
}

export default Home
