import React, { useState, useMemo } from 'react';
import coursesData from './data/courses.json';
import Header from './components/Header';
import Legend from './components/Legend';
import SemesterColumn from './components/SemesterColumn';
import ResetButton from './components/ResetButton';

function App() {
  const [completedCourses, setCompletedCourses] = useState([]);

  // Calcular qué materias están bloqueadas y desbloqueadas
  const { blockedCourses, unlockedCourses } = useMemo(() => {
    const blocked = new Set();
    const unlocked = new Set();

    coursesData.forEach((course) => {
      const hasPrerequisites = course.prerequisites.length > 0;
      const allPrerequisitesMet = course.prerequisites.every((prereq) =>
        completedCourses.includes(prereq)
      );

      if (hasPrerequisites && !allPrerequisitesMet) {
        blocked.add(course.id);
      } else if (hasPrerequisites && allPrerequisitesMet && !completedCourses.includes(course.id)) {
        unlocked.add(course.id);
      }
    });

    return { blockedCourses: Array.from(blocked), unlockedCourses: Array.from(unlocked) };
  }, [completedCourses]);

  const handleToggleCourse = (courseId) => {
    const course = coursesData.find((c) => c.id === courseId);
    if (!course) return;

    // Verificar si la materia está bloqueada
    if (blockedCourses.includes(courseId)) {
      return;
    }

    // Toggle del estado de completado
    setCompletedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const handleReset = () => {
    if (window.confirm('¿Deseas reiniciar todo tu progreso?')) {
      setCompletedCourses([]);
    }
  };

  // Agrupar materias por semestre
  const coursesBySemester = useMemo(() => {
    const grouped = {};
    coursesData.forEach((course) => {
      if (!grouped[course.semester]) {
        grouped[course.semester] = [];
      }
      grouped[course.semester].push(course);
    });
    return grouped;
  }, []);

  const semesters = Object.keys(coursesBySemester)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: 'var(--rosa-nube)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <Header completedCount={completedCourses.length} totalCount={coursesData.length} />
        <Legend />

        {/* Grid de semestres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mb-12">
          {semesters.map((semester) => (
            <SemesterColumn
              key={semester}
              semester={semester}
              courses={coursesBySemester[semester]}
              completedCourses={completedCourses}
              unlockedCourses={unlockedCourses}
              blockedCourses={blockedCourses}
              onToggleCourse={handleToggleCourse}
            />
          ))}
        </div>
      </div>

      <ResetButton onReset={handleReset} />
    </div>
  );
}

export default App;