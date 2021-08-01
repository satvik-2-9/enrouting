import { GET_ALL_TESTIMONIALS } from '../actionsType';

const initialState = {
  allTestimonials: [],
};

const testimonialReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TESTIMONIALS:
      return {
        ...state,
        allTestimonials: action?.payload,
      };
    default:
      return state;
  }
};

export default testimonialReducer;