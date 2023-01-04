import data from "./data"
import Card from "./Card"
import Navbar from "./Navbar"


function Content(){
    let detail = data.map(item=>{
    return(
        <Card
              key={item.title}
              item={item}

             />
            
    )
        
    })
    return(
        <div>
            <Navbar />
            <section className="image">
        {detail}
        </section>
        </div>
    )
}

export default Content;