import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import NotFound from './eventHandler/NotFound';
import Hero from './components/Hero';
import Loading from './eventHandler/Loading';

const Shorts = lazy(() => import('./pages/Shorts'));
const Subscription = lazy(() => import('./pages/Subscription'));
const UserChannel = lazy(() => import('./pages/UserChannel'));
const UserHistory = lazy(() => import('./pages/UserHistory'));
const UserPlaylist = lazy(() => import('./pages/UserPlaylist'));
const Settings = lazy(() => import('./miscellanious/Settings'));
const Report = lazy(() => import('./miscellanious/Report'));
const Help = lazy(() => import('./miscellanious/Help'));
const Feedback = lazy(() => import('./miscellanious/Feedback'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Hero />} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/channel" element={<UserChannel />} />
            <Route path="/history" element={<UserHistory />} />
            <Route path="/playlist" element={<UserPlaylist />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/report" element={<Report />} />
            <Route path="/help" element={<Help />} />
            <Route path="/feedback" element={<Feedback />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
