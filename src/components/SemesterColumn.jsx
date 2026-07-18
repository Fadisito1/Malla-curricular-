import React from 'react';
import CourseCard from './CourseCard';

const SemesterColumn = ({ semester, courses, completedCourses, unlockedCourses, blockedCourses, onToggleCourse }) => {
  return (
    <div className="rounded-xl p-6 border-2" style={{ 
      backgroundColor: '#F2D1D9',
      borderColor: '#D93664'
    }}>
      <div className="sticky top-4 z-10 mb-4">
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#731731' }}>
          Semestre {semester}
        </h2>
        <div className="text-sm font-medium" style={{ color: '#731731' }}>
          {courses.length} materias
        </div>
      </div>
      
      <div className="space-y-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isCompleted={completedCourses.includes(course.id)}
            isUnlocked={unlockedCourses.includes(course.id) && !completedCourses.includes(course.id)}
            isBlocked={blockedCourses.includes(course.id)}
            onToggle={onToggleCourse}
          />
        ))}
      </div>
    </div>
  );
};

export default SemesterColumn;