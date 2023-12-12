import { useState } from "react";
import PlayerModal from "../components/PlayerModal";
import Table from "../components/Table";
import {players} from "../data/players"

export default function Home(){

    const [playersList, setPlayersList] = useState(players)
    const [player, setPlayer] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }

    const headers = ['top', 'name', 'age', 'position', 'team', 'nationality']

    const handleTest = (playerSelected) =>{
        setPlayer(playerSelected);
        handleModal();
    }

    const handleDelete = ({id}) =>{
        const newPlayers = playersList.filter( player => player.id !== id);
        setPlayersList(newPlayers);
    }

    const actions = [
        {
            icon: '👀',
            title:'More...',
            action: (e) => handleTest(e)
        },
        {
            icon: '👋',
            title:'Bye',
            action: (e) => handleDelete(e)
        }
    ]

    return(
        <>
            <h1 className="font-semibold mb-10">Top 10 Football Players</h1>
            <div>
                <Table data={playersList} headers={headers} actions={actions}/>
            </div>
            {showModal && <PlayerModal player={player} onClose={handleModal}/>}
        </>
    )
}