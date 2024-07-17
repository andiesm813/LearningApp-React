import { AllCoursesType } from '../models/LearningApp/all-courses-type';
import { CategoriesType } from '../models/LearningApp/categories-type';
import { CurrentlyAttendingType } from '../models/LearningApp/currently-attending-type';
import { FetchApi } from './fetch-api';
import { PopularLecturersType } from '../models/LearningApp/popular-lecturers-type';

export async function getCurrentlyAttendingList(): Promise<CurrentlyAttendingType[]> {
  return await FetchApi.fetchApiResponse<CurrentlyAttendingType[]>('https://excel2json.io/api/share/411814c4-bebf-4b2c-e661-08dab79fa5b4', []);
}

export async function getCategoriesList(): Promise<CategoriesType[]> {
  return await FetchApi.fetchApiResponse<CategoriesType[]>('https://excel2json.io/api/share/c7c0f004-5d70-41db-e663-08dab79fa5b4', []);
}

export async function getPopularLecturersList(): Promise<PopularLecturersType[]> {
  return await FetchApi.fetchApiResponse<PopularLecturersType[]>('https://excel2json.io/api/share/f2c280b7-2b1b-47c5-e662-08dab79fa5b4', []);
}

export async function getAllCoursesList(): Promise<AllCoursesType[]> {
  return await FetchApi.fetchApiResponse<AllCoursesType[]>('https://excel2json.io/api/share/28f292a3-d187-48c4-e660-08dab79fa5b4', []);
}
