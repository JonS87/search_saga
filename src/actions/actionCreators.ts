import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_SUCCESS,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_FAILURE,
} from './actionTypes';

interface Skill {
  id: number;
  name: string;
}

export interface SearchSkillsRequestAction {
  type: typeof SEARCH_SKILLS_REQUEST;
  payload: { search: string };
}

export interface SearchSkillsSuccessAction {
  type: typeof SEARCH_SKILLS_SUCCESS;
  payload: { items: Skill[] };
}

export interface SearchSkillsFailureAction {
  type: typeof SEARCH_SKILLS_FAILURE;
  payload: { error: string };
}

export interface ChangeSearchFieldAction {
  type: typeof CHANGE_SEARCH_FIELD;
  payload: { search: string };
}

export type SkillActionTypes =
  | SearchSkillsRequestAction
  | SearchSkillsSuccessAction
  | SearchSkillsFailureAction
  | ChangeSearchFieldAction;

export function searchSkillsRequest(search: string): SearchSkillsRequestAction {
  return { type: SEARCH_SKILLS_REQUEST, payload: { search } };
}

export function searchSkillsSuccess(items: Skill[]): SearchSkillsSuccessAction {
  return { type: SEARCH_SKILLS_SUCCESS, payload: { items } };
}

export function searchSkillsFailure(error: string): SearchSkillsFailureAction {
  return { type: SEARCH_SKILLS_FAILURE, payload: { error } };
}

export function changeSearchField(search: string): ChangeSearchFieldAction {
  return { type: CHANGE_SEARCH_FIELD, payload: { search } };
}
