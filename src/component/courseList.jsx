import React from 'react'
import useCourseStore from '../store/course'

function CourseList() {
    const courses = useCourseStore((state) => state.courses)
    const removeCourse = useCourseStore((state) => state.removeCourse)
    const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus) 

    return (
        <div style={{
            marginTop: '20px',
            padding: '25px',
            borderRadius: '8px',
            width: '50%',
            margin: 'auto',
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            minHeight: '70vh'
        }}>
            {courses.length === 0 ? (
                <p style={{ 
                    textAlign: 'center', 
                    color: '#666',
                    fontStyle: 'italic'
                }}>No courses added yet</p>
            ) : (
                <ul style={{ 
                    listStyle: 'none', 
                    padding: 0,
                    margin: 0
                }}>
                    {courses.map((course) => (
                        <li
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto 1fr auto',
                                gap: '15px',
                                alignItems: 'center',
                                padding: '12px 15px',
                                marginBottom: '8px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                border: '1px solid #e9ecef'
                            }}
                            key={course.id}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input 
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        accentColor: '#4CAF50',
                                        cursor: 'pointer'
                                    }}
                                    type='checkbox' 
                                    checked={course.completed}
                                    onChange={() => toggleCourseStatus(course.id)} 
                                />
                            </div>
                            <span style={{
                                textDecoration: course.completed ? 'line-through' : 'none',
                                color: course.completed ? '#6c757d' : '#212529',
                                opacity: course.completed ? 0.7 : 1,
                                fontSize: '1rem'
                            }}>
                                {course.title}
                            </span>
                            <div>
                                <button style={{
                                    padding: '6px 15px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#bb2d3b'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                                onClick={() => removeCourse(course.id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default CourseList
