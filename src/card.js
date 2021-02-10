import '@lourenci/react-kanban/dist/styles.css'

function Card({ initialBoard: card, dragging, allowRemoveCard, onCardRemove }){
    const cards = {
        columns: [
          {
            id: 1,
            title: 'Backlog',
            cards: [
              {
                id: 1,
                title: 'Add card',
                division: 'Researcher',
                Assignee:'A',
                duration:'2 Days'
              },
            ]
          },
          {
            id: 2,
            title: 'To Do',
            cards: [
              {
                id: 2,
                title: 'Drag-n-drop support',
                division: 'Design',
                assignee:'B',
                duration:'2 Days'
              },
            ]
          },
          {
            id: 3,
            title: 'Done',
            cards: [
              {
                id: 3,
                title: 'Drag-n-drop support',
                division: 'Backend',
                Assignee:'C',
                duration:'2 Days'
              },
            ]
          }
        ]
      }
    return(
        <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`} 
            style={{backgroundColor:"#FFFFFF", paddingBottom:"10px", paddingLeft:"10px", paddingTop:"10px", paddingRight:"10px"}}>
                  <span>
                    <div className='react-kanban-card__title'>
                    <span>{cards.title}</span>
                    {allowRemoveCard && (
                        <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
                        ×
                        </span>
                    )}
                    </div>
                </span>
                <div className='react-kanban-card__description'>
                    <div className="row">
                        <div className="col-sm-2">
                            <h2>
                            <span class="badge badge-pill badge-info">{cards.assignee}</span>
                            </h2>
                        </div>
                        <div className="col-sm-4">
                            <h2 style={{float:"left"}}>
                                <span class="badge badge-pill badge-primary">{cards.division}</span>
                            </h2>
                        </div>
                        <div className="col-sm-6">
                            <h2 style={{float:"right"}}>{cards.duration}</h2>
                        </div>
                    </div>
                </div>
            <style jsx>
                {`              
                .description h2{
                    font-size:1rem;
                }               
                `}
            </style>
        </div>
    );
}

export default Card;
