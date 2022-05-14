
export default function TarjetaSimple(props){

    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}