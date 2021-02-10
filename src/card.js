export default function (data, {initialBoard: card, dragging, allowRemoveCard, onCardRemove }) {
  return (
    <div className={`react-kanban-card ${dragging ? 'react-kanban-card--dragging' : ''}`} 
            style={{backgroundColor:"#FFFFFF", paddingBottom:"10px", paddingLeft:"10px", paddingTop:"10px", paddingRight:"10px"}}>
                  <span>
                    <div className="mx-2">
                    <span className="font-weight-bold title">{data.children[0].title}</span>
                    {allowRemoveCard && (
                        <span style={{ cursor: 'pointer' }} onClick={() => onCardRemove(card)}>
                        ×
                        </span>
                    )}
                    </div>
                </span>
                <div className='react-kanban-card__description mx-2'>
                    <div className="row">
                        <div className="col-sm-2">
                            <h2>
                            <span class="badge badge-pill badge-info">{data.children[0].Assignee}</span>
                            </h2>
                        </div>
                        <div className="col-sm-4">
                            <h2 style={{float:"left"}}>
                                <span class="badge badge-pill badge-primary">{data.children[0].division}</span>
                            </h2>
                        </div>
                        <div className="col-sm-6 text-muted">
                            <h2 style={{float:"right"}}>{data.children[0].duration}</h2>
                        </div>
                    </div>
                </div>
            <style jsx>
                {`  
                .title{
                    font-size: 1.1rem;
                }

                .react-kanban-card__description  h2{
                    font-size: 0.9rem;
                }               
                `}
            </style>
        </div>
  )
}