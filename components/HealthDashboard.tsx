import React from 'react';
import { Activity, Moon, Zap, Scale, Heart, Flame, ArrowRight, TrendingUp, Palette } from 'lucide-react';
import { Card, Metric, RangeVisualizer, SectionHeading, NavBar, Button } from './DesignSystem';

const HealthDashboard: React.FC<{ onNavigateToDesignSystem: () => void }> = ({ onNavigateToDesignSystem }) => {
  return (
    <div className="min-h-screen bg-page font-sans selection:bg-black selection:text-white">
      
      {/* Navigation */}
      <NavBar 
        logo={<span className="text-lg font-bold tracking-tighter text-primary">ANTIGRAVITY</span>}
        items={[
            { label: 'Overview', active: true },
            { label: 'Trends' },
            { label: 'Settings' }
        ]}
        actions={
            <Button variant="outline" size="sm" icon={Palette} onClick={onNavigateToDesignSystem}>
                Design System
            </Button>
        }
      />

      <div className="max-w-7xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b border-border pb-8">
          <div>
             <h1 className="text-5xl font-light tracking-tight text-primary">Data</h1>
             <p className="text-secondary mt-2 text-lg">Your latest biometrics and health markers.</p>
          </div>
          <div className="text-sm font-medium text-secondary font-mono">
            UPDATED: <span className="text-primary">TODAY 09:41</span>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Feature Cards */}
          <div className="col-span-1 flex flex-col gap-8">
            
            {/* Biological Age Card - Custom Layout using Card Primitive */}
            <Card variant="gradient" className="min-h-[320px] relative overflow-hidden flex flex-col justify-between group">
               <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-20 mix-blend-overlay">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover grayscale contrast-125"
                    alt="Silhouette"
                  />
               </div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-2 text-white/90 mb-2">
                    <Activity size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Biological Age</span>
                 </div>
                 <h2 className="text-8xl font-bold text-white tracking-tighter">30</h2>
               </div>

               <div className="relative z-10">
                 <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 text-white text-xs font-bold uppercase tracking-wide mb-3">
                    <TrendingUp size={12} className="mr-2 rotate-180" />
                    Optimal Range
                 </div>
                 <p className="text-white/90 font-medium text-lg leading-relaxed max-w-[90%]">
                   2.5 years younger than your chronological age.
                 </p>
               </div>
            </Card>

            {/* Blood Biomarkers Card - Custom Layout using Card Primitive */}
            <Card variant="dark" className="min-h-[240px] relative overflow-hidden group">
               <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full h-full object-cover"
                    alt="Abstract Texture"
                  />
               </div>

               <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                     <div>
                        <h3 className="text-xl font-medium text-white">Blood Biomarkers</h3>
                        <p className="text-secondary text-sm mt-1">Based on recent lab panel.</p>
                     </div>
                     <ArrowRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-8">
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-status-green" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Optimal</span>
                        </div>
                        <span className="text-5xl font-light text-white">60</span>
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-status-yellow" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">In Range</span>
                        </div>
                        <span className="text-5xl font-light text-white">20</span>
                     </div>
                     <div>
                        <div className="flex items-center gap-2 mb-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-status-purple" />
                           <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Action</span>
                        </div>
                        <span className="text-5xl font-light text-white">3</span>
                     </div>
                  </div>
               </div>
            </Card>

          </div>

          {/* Right Column: Metrics Grid (2x3) */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <Metric 
               label="Sleep" 
               value="9 hr 12 min" 
               icon={<Moon size={16}/>}
               subtext="Deep sleep +15% vs avg"
               indicator="A+" 
               indicatorIntent="success"
               variant="dark"
            />
            <Metric 
               label="VO2 Max" 
               value="42" 
               icon={<Zap size={16}/>}
               subtext="Top 20% for your age"
               indicator="C" 
               indicatorIntent="danger"
               variant="dark"
            />
            <Metric 
               label="Body Composition" 
               value="12%" 
               icon={<Scale size={16}/>}
               subtext="Body Fat Percentage"
               indicator="A+" 
               indicatorIntent="success"
               variant="dark"
            />
            <Metric 
               label="Weight" 
               value="180 lbs" 
               icon={<Activity size={16}/>}
               subtext="-2 lbs this week"
               indicator="B+" 
               indicatorIntent="warning"
               variant="dark"
            />
            <Metric 
               label="Gut Health" 
               value="98/100" 
               icon={<Flame size={16}/>}
               subtext="GI Map Score"
               indicator="A+" 
               indicatorIntent="success"
               variant="dark"
            />
            <Metric 
               label="Metabolic Health" 
               value="4.9%" 
               icon={<Heart size={16}/>}
               subtext="HbA1c Level"
               indicator="A+" 
               indicatorIntent="success"
               variant="dark"
            />
          </div>

        </div>

        {/* Bottom Section: Biomarker List */}
        <div className="space-y-6">
           <SectionHeading 
              title="Recent Biomarkers" 
              actions={
                 <button className="text-xs font-bold text-primary uppercase tracking-widest hover:underline flex items-center gap-1">
                    View Full Report <ArrowRight size={12} />
                 </button>
              }
            />
           
           <div className="space-y-4">
              <RangeVisualizer 
                 label="Lipoprotein (a)"
                 subLabel="Cardiovascular"
                 value="75"
                 unit="ng/mL"
                 indicator="Normal"
                 intent="success"
                 min={0}
                 max={100}
                 current={75}
              />
              <RangeVisualizer 
                 label="Testosterone, Free"
                 subLabel="Hormonal"
                 value="15.2"
                 unit="pg/mL"
                 indicator="Normal"
                 intent="success"
                 min={5}
                 max={25}
                 current={15.2}
              />
              <RangeVisualizer 
                 label="Vitamin D, 25-OH"
                 subLabel="Micronutrients"
                 value="32"
                 unit="ng/mL"
                 indicator="At Risk"
                 intent="danger"
                 min={30}
                 max={100}
                 current={32}
              />
              <RangeVisualizer 
                 label="HS-CRP"
                 subLabel="Inflammation"
                 value="0.3"
                 unit="mg/L"
                 indicator="Normal"
                 intent="success"
                 min={0}
                 max={3}
                 current={0.3}
              />
           </div>
        </div>

      </div>
    </div>
  );
};

export default HealthDashboard;