import { useRef } from 'react';
import './VideoPlayer.css';
import video from 'C:/temp/reciclae/src/assets/video.webm';

const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    };

    const handleCloseClick = (e) => {
        e.stopPropagation(); // Impede que o evento de clique no botão se propague para o contêiner
        setPlayState(false); // Fecha o vídeo
    };

    return (
        <div
            className={`video-player ${playState ? '' : 'hide'}`}
            ref={player}
            onClick={closePlayer}
        >
            <video src={video} autoPlay muted controls></video>
            <button className="close-btn" onClick={handleCloseClick}>X</button>
        </div>
    );
};

export default VideoPlayer;
