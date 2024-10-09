import {
    SEARCH_SKILLS_FAILURE,
    SEARCH_SKILLS_REQUEST,
    SEARCH_SKILLS_SUCCESS,
    CHANGE_SEARCH_FIELD,
} from '../actions/actionTypes';
import { SkillActionTypes } from '../actions/actionCreators';

interface Skill {
    id: number;
    name: string;
}

interface SkillsState {
    items: Skill[];
    loading: boolean;
    error: string | null;
    search: string;
}

const initialState: SkillsState = { items: [], loading: false, error: null, search: '' };

export default function skillsReducer(state = initialState, action: SkillActionTypes): SkillsState {
    switch (action.type) {
        case SEARCH_SKILLS_REQUEST:
            return { ...state, loading: true, error: null };
        case SEARCH_SKILLS_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        case SEARCH_SKILLS_SUCCESS:
            return { ...state, items: action.payload.items, loading: false, error: null };
        case CHANGE_SEARCH_FIELD:
            return { ...state, search: action.payload.search };
        default:
            return state;
    }
}
