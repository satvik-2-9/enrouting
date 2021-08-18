import axios from 'axios';
import Cookies from 'js-cookie';

const API = axios.create({
  baseURL: 'https://enroutingapis.herokuapp.com',
});

API.interceptors.request.use((req) => {
  if (Cookies.get('userJWT')) {
    req.headers['x-access-token'] = Cookies.get('userJWT');
  }
  return req;
});

// User Routes
export const getUser = () => API.get('/api/user/profile');
export const login = (loginData) => API.post('/api/auth/signin', loginData);
export const signup = (signupData) => API.post('/api/auth/signup', signupData);
export const updateUserDetails = (updates) =>
  API.put('/api/user/update', updates);

// Forgot password
export const forgotPasswordEmail = (formData) =>
  API.post('/api/auth/forgotpassword', formData);

// Reset password
export const resetPassword = (formData) =>
  API.post('/api/auth/newpassword', formData);

// Courses Routes
export const getAllCourses = () => API.get('/admin/courses/all');
export const getUserCourses = () => API.get('/api/courses/self');

// Board Routes
export const getAllBoards = () => API.get('/admin/boards/all');

// Standard Routes
export const getAllStandards = () => API.get('/admin/standards/all');

// Testimonial Routes
export const getAllTestimonials = () => API.get('/api/testimonials');

// Event Routes
export const getAllEvents = () => API.get('/api/events/all');
export const getUserEvents = () => API.get('/api/events/self');
export const makeSubmission = (id, formData) =>
  API.post(`/api/submit/${id}`, formData);
export const editSubmission = (id, formData) =>
  API.post(`/api/submit/edit/${id}`, formData);

export const checkSubmission = (eventId) =>
  API.get(`/api/user/submission/${eventId}`);

// Workshop Routes
export const getAllWorkshops = () => API.get('/api/workshops/all');
export const getUserWorkshops = () => API.get('/api/workshops/self');

// Blog Routes
export const getAllBlogs = () => API.get('/api/blogs/all');

// Help email Routes
export const helpMail = (formData) => API.post('/api/connect', formData);

// Payment Routes
export const buyCourse = (id, formData) =>
  API.post(`/api/course/purchase/${id}`, formData);
export const buyEvent = (id, formData) =>
  API.post(`/api/event/purchase/${id}`, formData);
export const buyWorkshop = (id) => API.post(`/api/workshop/purchase/${id}`);
export const verifyCoursePayment = (paymentData) =>
  API.post('/course/verify-payment', paymentData);
export const verifyEventPayment = (paymentData) =>
  API.post('/event/verify-payment', paymentData);
export const verifyWorkshopPayment = (paymentData) =>
  API.post('/workshop/verify-payment', paymentData);
