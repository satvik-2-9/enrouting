import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'https://enroutingapis.herokuapp.com',
});

API.interceptors.request.use((req) => {
  if (Cookies.get('userJWT')) {
    req.headers["x-access-token"] = Cookies.get('userJWT');
  }
  return req;
});

// User Routes
export const getUser = () => API.get('/api/user/profile');

export const login = (loginData) => API.post('/api/auth/signin', loginData);

export const signup = (signupData) => API.post('/api/auth/signup', signupData);

export const updateUserDetails = (updates) => API.put('/api/user/update', updates);


// Courses Routes
export const getAllCourses = () => API.get('/api/courses/all');

export const getUserCourses = () => API.get('/api/courses/self');

