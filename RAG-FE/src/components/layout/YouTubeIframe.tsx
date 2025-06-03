
import './YouTubeIframe.scss'
import { useParams } from "react-router-dom";


const YouTubeIframe: React.FC = () => {
    const { videoId } = useParams<{ videoId: string }>();
  return (
    <section className="video-section">
      <iframe
        width="500px"
        height="650px"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </section>
  );
};

export default YouTubeIframe;
