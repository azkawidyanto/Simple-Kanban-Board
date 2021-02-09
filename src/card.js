

function Card({ children: card, dragging, allowRemoveCard, onCardRemove }){
    // const board = {
    //     columns: [
    //       {
    //         id: 1,
    //         title: 'Backlog',
    //         cards: [
    //           {
    //             id: 1,
    //             title: 'Add card',
    //             description: 'Add capability to add a card in a column'
    //           },
    //         ]
    //       },
    //       {
    //         id: 2,
    //         title: 'To Do',
    //         cards: [
    //           {
    //             id: 2,
    //             title: 'Drag-n-drop support',
    //             description: 'Move a card between the columns'
    //           },
    //         ]
    //       },
    //       {
    //         id: 3,
    //         title: 'Done',
    //         cards: [
    //           {
    //             id: 3,
    //             title: 'Drag-n-drop support',
    //             description: 'Move a card between the columns'
    //           },
    //         ]
    //       }
    //     ]
    //   }
    return(
        <div className="Card" style={{backgroundColor:"#E5E5E5", paddingBottom:"10px", paddingLeft:"10px", paddingTop:"10px", paddingRight:"10px"}}>
            <div className="title">
                <h1>{card.title}</h1>
            </div>
            <div className="description">
                <div className="row">
                    <div className="col-sm-2">
                        <h2>
                        <span class="badge badge-pill badge-info">{card.Assignee}</span>
                        </h2>
                    </div>
                    <div className="col-sm-4">
                        <h2 style={{float:"left"}}>
                            <span class="badge badge-pill badge-primary">{card.division}</span>
                        </h2>
                    </div>
                    <div className="col-sm-6">
                        <h2 style={{float:"right"}}>{card.duration}</h2>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                .card{
                    width:60px;
                    height:50px;
                }
                
                .title h1{
                    font-size:1.5 rem;
                }
                
                .description h2{
                    font-size:1rem;
                }
                
                
                
                
                `}
            </style>
        </div>
    );
}

export default Card;
