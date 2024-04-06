import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/content/RootLayout';

const Home = lazy(() => import('./components/Home'));
const Shorts = lazy(() => import('./components/content/sidebar/Shorts'));
const Subscription = lazy(() =>
  import('./components/content/sidebar/Subscription'),
);
const UserChannel = lazy(() =>
  import('./components/content/sidebar/UserChannel'),
);
const UserHistory = lazy(() =>
  import('./components/content/sidebar/UserHistory'),
);
const UserVideos = lazy(() =>
  import('./components/content/sidebar/UserVideos'),
);
const UserWatchLater = lazy(() =>
  import('./components/content/sidebar/UserWatchLater'),
);
const UserLikeVideo = lazy(() =>
  import('./components/content/sidebar/UserLikeVideo'),
);
const Trending = lazy(() => import('./components/content/sidebar/Trending'));
const Music = lazy(() => import('./components/content/sidebar/Music'));
const Movies = lazy(() => import('./components/content/sidebar/Movies'));
const Gaming = lazy(() => import('./components/content/sidebar/Gaming'));
const News = lazy(() => import('./components/content/sidebar/News'));
const Sports = lazy(() => import('./components/content/sidebar/Sports'));
const Fashion = lazy(() => import('./components/content/sidebar/Fashion'));
const Settings = lazy(() => import('./components/content/sidebar/Setting'));
const ReportHistory = lazy(() =>
  import('./components/content/sidebar/ReportHistory'),
);
const SendFeedBack = lazy(() =>
  import('./components/content/sidebar/SendFeedBack'),
);
const PageNotFound = lazy(() => import('./components/handlers/PageNotFound'));
import Loading from './components/handlers/Loading';

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/channel" element={<UserChannel />} />
            <Route path="/history" element={<UserHistory />} />
            <Route path="/videos" element={<UserVideos />} />
            <Route path="/watch_later" element={<UserWatchLater />} />
            <Route path="/like_video" element={<UserLikeVideo />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/music" element={<Music />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/news" element={<News />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/report_history" element={<ReportHistory />} />
            <Route path="/feedback" element={<SendFeedBack />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
