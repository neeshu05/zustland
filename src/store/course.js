import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

//BluePrint of the store
const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => set((state) => ({
        courses: [...state.courses,course]
    })),
    removeCourse: (courseId) => set((state) => ({
        courses: state.courses.filter((course) => course.id !== courseId)
    })),
    toogleCourseStatus: (courseId) => set((state) => ({
        courses:state.courses.map((course) => (course.id === courseId ? {...course, completed: !course.completed}: course))
    }))
})

//Create the store

const useCourseStore = create(devtools(
    persist(courseStore, {
        name:"course-storage"
        })
    )
);

// export the store
export default useCourseStore;