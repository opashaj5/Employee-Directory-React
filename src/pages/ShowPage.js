export default function Show(props) {
    return (
        <div className="homepage">
            <h1>{props.img}</h1>
            <h1>{props.name}</h1>
            <h1>{props.title}</h1>
        </div>
    )
}