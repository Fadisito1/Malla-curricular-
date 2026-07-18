import React from 'react';

const CourseCard = ({ course, isCompleted, isUnlocked, isBlocked, onToggle }) => {
  const getStatusClasses = () => {
    let classes = 'course-card p-4 rounded-lg font-medium text-sm cursor-pointer border-2 transition-all';
    
    if (isCompleted) {
      classes += ' text-white shadow-lg ring-2';
      return classes;
    } else if (isUnlocked) {
      classes += ' text-white unlocked';
      return classes;
    } else if (isBlocked) {
      classes += ' opacity-60 cursor-not-allowed';
      return classes;
    } else {
      classes += ' text-white hover:shadow-lg hover:-translate-y-1';
      return classes;
    }
  };

  const getBackgroundStyle = () => {
    if (isCompleted) {
      return {
        backgroundColor: '#D93664',
        borderColor: '#731731'
      };
    } else if (isUnlocked) {
      return {
        backgroundColor: '#F294A5',
        borderColor: '#D93664'
      };
    } else if (isBlocked) {
      return {
        backgroundColor: '#F2D1D9',
        borderColor: '#D93664',
        color: '#731731'
      };
    } else {
      return {
        backgroundColor: '#F294A5',
        borderColor: '#D93664'
      };
    }
  };

  const handleClick = () => {
    if (!isBlocked) {
      onToggle(course.id);
    }
  };

  return (
    <div className={getStatusClasses()} style={getBackgroundStyle()} onClick={handleClick}>
      <div className="font-bold text-xs mb-1 opacity-90">{course.id}</div>
      <div className="text-xs leading-tight">{course.name}</div>
      {isBlocked && (
        <div className="mt-2 text-xs font-semibold">🔒 Bloqueado</div>
      )}
      {isUnlocked && !isCompleted && (
        <div className="mt-2 text-xs font-semibold animate-bounce">✨ ¡Desbloqueado!</div>
      )}
      {isCompleted && (
        <div className="mt-2 text-xs font-semibold">✓ Aprobado</div>
      )}
    </div>
  );
};

export default CourseCard;