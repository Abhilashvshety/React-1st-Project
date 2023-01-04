import "./App.css"

function Card(props){
    return(
<div id="card_1">
    <div id="img_1">
    <img src={props.item.imageUrl} className="img" />
    </div>
    <div className="detail_1">
    <div>
        <span className="loc"><strong>{props.item.location}</strong></span>
        <a href={props.item.googleMapsUrl}>View on google Maps</a>
    <h1>{props.item.title}</h1>
    <div>
    <span><strong>{props.item.startDate} {props.item.endDate}</strong></span>
    <p>{props.item.description}</p>
    </div>
    </div>
    </div>
</div>
    )
}

export default Card;