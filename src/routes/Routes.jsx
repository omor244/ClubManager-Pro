import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainLayout from '../layouts/MainLayout'
import { createBrowserRouter } from 'react-router'
import Clubs from '../components/Home/Clubs'
import AddEvent from '../pages/Dashboard/Club-Manager/AddEnent'
import CreateClub from '../pages/Dashboard/Club-Manager/CreateClub'
import ClubDetails from '../components/FeaturedClubs/ClubDetails'
import Events from '../components/Events/Events'
import EventDetails from '../components/Events/EventDetails'
import MyEvent from '../pages/Dashboard/Member/MyEvent'
import PaymentSuccess from '../components/PaymentSuccess/PaymentSuccess'
import Myclubs from '../pages/Dashboard/Member/Myclubs'
import PaymentHistory from '../pages/Dashboard/Member/PaymentHistory'
import BecomeAManager from '../pages/Dashboard/Member/BecomeAManager'
import Transactions from '../pages/Dashboard/Admin/Transactions'
import ManageClubs from '../pages/Dashboard/Admin/ManageClubs'
import Mymembers from '../pages/Dashboard/Club-Manager/Mymembers'
import ManageEvents from '../pages/Dashboard/Club-Manager/ManageEvents'
import MyEventsregister from '../pages/Dashboard/Club-Manager/MyEventsregister'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/clubs',
        element: <Clubs />,
      },
      {
        path: '/clubs/:id',
        element: <ClubDetails/>,
      },
      {
        path: '/events',
        element: <Events/>,
      },
      {
        path: '/events/:id',
        element: <EventDetails/>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/payment-success',
    element: <PaymentSuccess />
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-event',
        element: (
          <PrivateRoute>
            <AddEvent />
        </PrivateRoute>
        ),
      },
      {
        path: 'create-club',
        element: (
          <PrivateRoute>
           <CreateClub/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-inventory',
        element: (
          <PrivateRoute>
            <Mymembers/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-register',
        element: (
          <PrivateRoute>
            <MyEventsregister/>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-events',
        element: (
          <PrivateRoute>
            <ManageEvents/>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: 'Transactions',
        element: (
          <PrivateRoute>
            <Transactions></Transactions>
          </PrivateRoute>
        ),
      },
      {
        path: 'manage-clubs',
        element: (
          <PrivateRoute>
           <ManageClubs/>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "My-events",
        element: <MyEvent/>
      },
      {
        path: "my-clubs",
        element: <Myclubs/>
      },
      {
        path: "Payment-History",
        element: <PaymentHistory/>
      },
      {
        path: "BecomeAManager",
        element: <BecomeAManager></BecomeAManager>
      },
      
    ],
  },
])
