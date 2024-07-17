import { useCallback, useEffect, useState } from 'react';
import { AllCoursesType } from '../models/LearningApp/all-courses-type';
import { CategoriesType } from '../models/LearningApp/categories-type';
import { CurrentlyAttendingType } from '../models/LearningApp/currently-attending-type';
import { getAllCoursesList, getCategoriesList, getCurrentlyAttendingList, getPopularLecturersList } from '../services/learning-app';
import { PopularLecturersType } from '../models/LearningApp/popular-lecturers-type';

export const useGetCurrentlyAttendingList = () => {
  const [currentlyAttending, setCurrentlyAttending] = useState<CurrentlyAttendingType[]>([]);

  const requestCurrentlyAttending = useCallback(() => {
    let ignore = false;
    getCurrentlyAttendingList()
      .then((data) => {
        if (!ignore) {
          setCurrentlyAttending(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCurrentlyAttending();
  }, [requestCurrentlyAttending]);

  return { requestLearningAppCurrentlyAttending: requestCurrentlyAttending, learningAppCurrentlyAttending: currentlyAttending, setLearningAppCurrentlyAttending: setCurrentlyAttending };
}

export const useGetCategoriesList = () => {
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  const requestCategories = useCallback(() => {
    let ignore = false;
    getCategoriesList()
      .then((data) => {
        if (!ignore) {
          setCategories(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCategories();
  }, [requestCategories]);

  return { requestLearningAppCategories: requestCategories, learningAppCategories: categories, setLearningAppCategories: setCategories };
}

export const useGetPopularLecturersList = () => {
  const [popularLecturers, setPopularLecturers] = useState<PopularLecturersType[]>([]);

  const requestPopularLecturers = useCallback(() => {
    let ignore = false;
    getPopularLecturersList()
      .then((data) => {
        if (!ignore) {
          setPopularLecturers(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestPopularLecturers();
  }, [requestPopularLecturers]);

  return { requestLearningAppPopularLecturers: requestPopularLecturers, learningAppPopularLecturers: popularLecturers, setLearningAppPopularLecturers: setPopularLecturers };
}

export const useGetAllCoursesList = () => {
  const [allCourses, setAllCourses] = useState<AllCoursesType[]>([]);

  const requestAllCourses = useCallback(() => {
    let ignore = false;
    getAllCoursesList()
      .then((data) => {
        if (!ignore) {
          setAllCourses(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestAllCourses();
  }, [requestAllCourses]);

  return { requestLearningAppAllCourses: requestAllCourses, learningAppAllCourses: allCourses, setLearningAppAllCourses: setAllCourses };
}
