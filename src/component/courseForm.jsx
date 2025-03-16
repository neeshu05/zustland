import React from "react"
import useCourseStore from "../store/course"

function CourseForm() {
    const addCourse = useCourseStore((state) => state.addCourse)
    const [courseTitle, setCourseTitle] = React.useState('')

    return (
        <div style={{
            width: '50%',
            margin: 'auto',
            display: 'flex',       
            alignItems: 'center',  
        }}>
            <input
                style={{
                    padding: '8px 12px',
                    flex: 1,                   // Take remaining space
                    border: '2px solid #4CAF50', // Green border
                    borderRight: 'none',        // Remove right border
                    borderRadius: '5px 0 0 5px',
                    fontSize: '1rem',
                    outline: 'none',
                }} 
                type='text'
                value={courseTitle}
                placeholder='Enter Course title'
                onChange={(e) => setCourseTitle(e.target.value)}
            />
            <button 
                style={{
                    padding: '8px 20px',
                    backgroundColor: '#4CAF50', // Green background
                    color: 'white',
                    border: '2px solid #4CAF50',
                    borderLeft: 'none',         // Remove left border
                    borderRadius: '0 5px 5px 0',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    outline: 'none',
                }}
                
                onClick={(e) => {
                    addCourse({ 
                        id: 1 + Math.random(), 
                        title: courseTitle,
                        completed: false 
                    })
                    setCourseTitle('')
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
            > 
                Save 
            </button>
        </div>
    )
}

export default CourseForm