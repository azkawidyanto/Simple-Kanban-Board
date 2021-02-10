import './App.css';
import Board, { addColumn } from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import Card from "./card.js"
import logoprosa from './Assets/logoprosa.png'
import plus from './Assets/plus.png'
import profpic from './Assets/profpic.png'
import searchicon from './Assets/search-icon.png'

function App() {
// const [board, setBoard] = useState(initialBoard)
// const newBoard = addColumn(board, {title,division,Assignee,duration})
// setBoard(newBoard)

const cards = {
    columns: [
      {
        id: 1,
        title: 'Backlog',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Researcher',
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
            description: 'Design',
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
            description: 'Backend',
            Assignee:'C',
            duration:'2 Days'
          },
        ]
      }
    ]
  }
  const menus = ["Home","My Task","Notifications"];
  const teams = ["Researchers", "FE/BE Teams", "PM Team"];
  const pics= ["profpic","profpic","profpic"]
  const listMenus = menus.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  const listTeams = teams.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
const listPics = teams.map((number) =>
<li key={number.toString()}>
  {number}
</li>
);

  return (
    <div className="row" style={{height:"100vh", width:"100vw"}}>
        <div className="col-md-3" style={{backgroundColor:"#00B38F", paddingTop:"70px"}}>
            <div className="searchbox">
            <input editable={true} type="text" 
              placeholder="Search" />
            <a href="https://google.com">
              <img src={searchicon} alt="search" style={{width:"20px",float:"right", marginRight:"10px"}}></img>
            </a>
            </div>
            <div className="profile">
              <div className="profile-picture">
                <div className="picture">
                  <img src={profpic} alt="profile_pic"></img>
                </div>
                <div className="name">
                  <h3>Emilee Simchenko</h3>
                  <h4>Product Owner</h4>                  
                </div>
              </div>
              <div className="profile-data">
                <div className="complete">
                  <h3>372</h3>
                  <h4>Completed Tasks</h4>
                </div>
                <div className="open">
                  <h3>11</h3>
                  <h4>Open Tasks</h4>                  
                </div>
              </div>
            </div>
            <div className="menu-list">
              <h2>Menu</h2>
              <ul>
              {listMenus}
              </ul> 

            </div>
            <div className="team-list">
              <h2>Teams</h2>
              <ul>
                {listTeams} 
              </ul>
              <div className="add-team">
                  <div className="plus-logo">
                    <img src={plus} alt="plus" ></img>
                  </div>
                  <div className ="text">
                    <h2>Add a Team</h2>
                  </div>
              </div>



            </div>
        </div>
        <div className="col-md-9" style={{marginTop:"20px"}}>
          <div className="row 4">
            <img src={logoprosa} alt="logo prosa" style={{width:"50px"}}></img>
            <h1>Kanban Prosa</h1>
            <div className="member">
              <img src={profpic} alt="profile_pic"></img>
            </div>
          </div>
          
          <div className="row 8" style={{paddingTop:"50px",paddingLeft:"40px"}}>
          {/* <Board initialBoard={cards} />   */}
            <Board  initialBoard={cards}
             allowRemoveLane
             allowRenameColumn
             allowRemoveCard
             onLaneRemove={console.log}
             onCardRemove={console.log}
             onLaneRename={console.log}
             initialBoard={cards}
             allowAddCard={{ on: "top" }}
             onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard
            })}
            onCardNew={console.log} 
            //  renderCard={({ cards }, { removeCard, dragging }) => (
            //   <Card dragging={dragging}>
            //     {cards}
            //     <button type="button" onClick={removeCard}>Remove Card</button>
            //   </Card>
            // )}
            />
              {/* {cards}
            </Board> */}
          </div>
        </div>
        <style jsx>{`
        h1 {
          font-size:25px;
          margin-top:10px;
        }

        .member{
          display:flex;
        }

        .member img{
          flex-basis:70%;
          width:30px;
          height:30px; 
          margin-top:10px;
          float:right;
          margin-left:600px;
        }

        .searchbox input[type="text"]{
          text-align:left;
          background-color:transparent
          width:200px;
          margin-left:50px;
          margin-right:10px;
          font-color:white;
          background: transparent;
          border: 0;
          border-style: none;
          border-color: transparent;
          outline: none;
          outline-offset: 0;
          box-shadow: none;
        }

        ::placeholder { 
          color: white;
          opacity: 1;
        }
        
        .picture img{
          width:40px;
        }

        .profile-picture{
          display:flex;
          margin-top: 40px;
          margin-left: 40px;

        }
        .picture{
          flex-basis: 20%;
        }

        .name{
          flex-basis: 80%;
        }

        .name h3{
          font-size:1rem;
          display:flex;
          color:white;
        }

        .name h4{
          font-size:0.75rem;
          display:flex;
        }
        
        .profile-data{
          display:flex;
          margin-top: 10px;
          margin-left: 40px;

        }
        .complete{
          flex-basis: 50%;
        }

        .open{
          flex-basis: 50%;
        }

        .profile-data h3{
          font-size:1.5rem;
          display:flex;
          color:white;
        }

        .profile-data h4{
          font-size:1rem;
          display:flex;
          color:white;
          font-weight:600;
        }

        .menu-list{
          margin-top: 30px;
          margin-left: 40px;
        }

        .menu-list h2{
          font-size:1rem;
          font-weight:600;
        }

        .menu-list ul{
          color:white;
          list-style-type:none;
          padding: 0;
          margin-top: 10px;  
          font-weight:600;

        }

        .team-list{
          margin-top: 30px;
          margin-left: 40px;

        }

        .team-list h2{
          font-size:1rem;
          font-weight:600;
          margin-top:15px;
        }
        .team-list ul{
          list-style-type:none;
          font-weight:600;
          color:white;
          padding: 0;
          margin-top: 10px;  
        }

        .add-team{
          display:flex;
          margin-top:20px;

        }

        .plus-logo{
          flex-basis:10%;
        }

        .text{
          flex-basis:90%;
          margin-top:0;
          float:top;
        }

        .text h2{
          margin-top:0;
        }
        .plus-logo img{
          width:20px; 
          display:flex;
        }

        `}       
        </style>      
      </div>
  );
}

export default App;
