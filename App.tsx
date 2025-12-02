import React, { useState } from 'react';
import HealthDashboard from './components/HealthDashboard';
import StyleGuide from './components/StyleGuide';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'styleguide'>('dashboard');

  return (
    <>
      {currentView === 'dashboard' ? (
        <HealthDashboard onNavigateToDesignSystem={() => setCurrentView('styleguide')} />
      ) : (
        <StyleGuide onNavigateToDashboard={() => setCurrentView('dashboard')} />
      )}
    </>
  );
};

export default App;