import Sidebar from './content/SideBar';
import Recommendation from './content/RecommendationButton';
import VideoSection from './content/VideoSection';

export default function ContentArea() {
  return (
    <>
      <h1>Content</h1>
      <div>
        <Sidebar />
        <div>
          <Recommendation />
          <VideoSection />
        </div>
      </div>
    </>
  );
}
