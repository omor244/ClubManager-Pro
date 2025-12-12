import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import Profile from '../pages/Dashboard/Common/Profile'
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
import ClubsInfo from '../pages/Dashboard/Club-Manager/ClubsInfo'
import AdminRoute from './AdminRoute'
import ManagerRoute from './ManagerRoute'
import Statistics from '../pages/Dashboard/Common/Statistics'

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
        path: '/dashboard',
        element: <Statistics></Statistics>
    },
      {
        path: 'add-event',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <AddEvent />
            </PrivateRoute>
       </ManagerRoute>
        ),
      },
      {
        path: 'create-club',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <CreateClub />
            </PrivateRoute>
          </ManagerRoute>
        ),
      },
      {
        path: 'my-members',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <Mymembers />
            </PrivateRoute>
      </ManagerRoute>
        ),
      },
      {
        path: 'my-register',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <MyEventsregister />
            </PrivateRoute>
        </ManagerRoute>
        ),
      },
      {
        path: 'manage-events',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <ManageEvents />
            </PrivateRoute>
          </ManagerRoute>
        ),
      },
      {
        path: 'Clubs-info',
        element: (
          <ManagerRoute>
            <PrivateRoute>
              <ClubsInfo></ClubsInfo>
            </PrivateRoute>
         </ManagerRoute>
        ),
      },
      {
        path: 'manage-users',
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageUsers />
            </PrivateRoute>
        </AdminRoute>
        ),
      },
      {
        path: 'Transactions',
        element: (
          <AdminRoute>
            <PrivateRoute>
              <Transactions></Transactions>
            </PrivateRoute>
        </AdminRoute>
        ),
      },
      {
        path: 'manage-clubs',
        element: (
          <AdminRoute>
            <PrivateRoute>
              <ManageClubs />
            </PrivateRoute>
         </AdminRoute>
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
