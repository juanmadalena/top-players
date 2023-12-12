import React from 'react';

export default function PlayerModal ({ player, onClose }){

    const handleClose = (e) => {
        if(e.keyCode === 27){
            onClose();
        }
    }
    window.addEventListener('keydown', handleClose);
    console.log(player);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-950 bg-opacity-60">
        <div className="bg-zinc-900 rounded-lg pb-8 px-4 pt-5 w-2/4 shadow-lg flex flex-col gap-6">
            {/* Header */}
            <div className="grid grid-cols-3 ">
                <div className='flex align-middle justify-start'>
                    <button
                        className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-1 px-3 rounded-full"
                        onClick={() => onClose()}
                    >
                        x
                    </button>
                </div>
                <div className='text-center'>
                    <h2 className="text-white-700 text-2xl font-bold">{player.name}</h2>
                </div>
            </div>
            {/* Details */}
            <div className='grid grid-cols-3 '>
                <p>
                    Age: {player.age}
                </p>
                <p className="text-white-600 ">
                    Position: {player.position}
                </p>
                <p className="text-white-600 ">
                    Team: {player.team}
                </p>
            </div>
            {/* Bio */}
            <div className='mb-5'>
                <h4 className="text-white-700 text-lg font-semibold mb-1">Bio</h4>
                <p className="px-4 text-left text-white-600">{player.bio}</p>
            </div>
            {/* Trophies */}
            <div className='mb-5'>
                <h4 className="text-white-700 text-lg font-semibold mb-1">Trophies</h4>
                <div className="grid grid-cols-3">
                    {player.trophies.map( (trophy) => (
                        <div className="flex flex-col items-center justify-center" key={trophy}>
                            <p className="text-white-600">{trophy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

