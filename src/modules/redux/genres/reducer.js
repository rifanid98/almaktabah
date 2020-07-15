import actionType from './actionType';

const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: '',
  data: {}
}


const genres = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_GENRES_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case actionType.GET_GENRES_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case actionType.GET_GENRES_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: '',
        data: action.payload.data.data
      }

    case actionType.ADD_GENRE_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case actionType.ADD_GENRE_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case actionType.ADD_GENRE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: '',
      }

    case actionType.PATCH_GENRE_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case actionType.PATCH_GENRE_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case actionType.PATCH_GENRE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: '',
      }

    case actionType.DELETE_GENRE_PENDING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case actionType.DELETE_GENRE_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: 'Data Rejected'
      }
    case actionType.DELETE_GENRE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMsg: '',
      }

    default:
      return state;
  }
}

export default genres;