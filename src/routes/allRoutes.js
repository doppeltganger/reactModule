import MainPage from '../pages/MainPage/MainPage';
import Error from '../pages/Error/Error';
import FavoriteMovies from '../pages/FavoriteMovies/FavoriteMovies';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserPage from '../pages/UserPage/UserPage';
import DetailedMovie from '../pages/DetailedMovie/DetailedMovie';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

export const allRoutes = [
    { path: '/', component: HomePage },
    { path: '/user/:userId', component: UserPage, isPrivate: true },
    { path: '/favorite', component: FavoriteMovies, isPrivate: true },
    { path: '/movies', component: MainPage, isPrivate: true },
    { path: '/movie/:movieId', component: DetailedMovie, isPrivate: true },
    { path: '/registration', component: RegistrationPage },
    { path: '/login', component: LoginPage },
    { path: '/error', component: Error },
];