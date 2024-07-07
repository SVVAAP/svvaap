import React, { useEffect, useState } from 'react';

// Shared Tailwind CSS class strings
const SHARED_CLASSES = {
  textMutedForeground: 'text-[var(--muted-foreground)]',
  textSm: 'text-sm',
  textXs: 'text-xs',
  textCenter: 'text-center',
  flex: 'flex',
  flexCol: 'flex-col',
  flexRow: 'flex-row',
  mdFlexRow: 'md:flex-row',
  mdW1_2: 'md:w-1/2',
  mt6: 'mt-6',
  mdMt0: 'md:mt-0',
  wFull: 'w-full',
  hAuto: 'h-auto',
  rounded: 'rounded',
  borderT: 'border-t',
  border: 'border-[var(--border)]',
  pt4: 'pt-4',
  spaceX4: 'space-x-4',
  fontBold: 'font-bold',
};

const items = [
  {
    title: "SIGGRAPH Event",
    description: "Fireside Chat With NVIDIA CEO Jensen Huang"
  },
  {
    title: "AI",
    description: "See Jensen Huang Live at HPC Discover 2024"
  },
  {
    title: "Automotive",
    description: "NVIDIA Wins Autonomous Grand Challenge at CVPR"
  },
  {
    title: "Simulation",
    description: "NVIDIA Advances Physical AI With the Largest Indoor..."
  },
  {
    title: "Data Center",
    description: "Latest MLPerf Results Showcase Unprecedented..."
  }
];

const interval = 2000;

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSlider = () => {
      setCurrentIndex((currentIndex + 1) % items.length);
    };

    const sliderInterval = setInterval(updateSlider, interval);
    return () => clearInterval(sliderInterval);
  }, [currentIndex]);

  return (
    <div className={`${SHARED_CLASSES.flex} ${SHARED_CLASSES.spaceX4}`}>
      {items.map((item, index) => (
        <div key={index} className={SHARED_CLASSES.textCenter}>
          <h3 className={`${SHARED_CLASSES.textSm} ${SHARED_CLASSES.fontBold}`}>{item.title}</h3>
          <p className={`${SHARED_CLASSES.textMutedForeground} ${SHARED_CLASSES.textXs}`}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const ProgressBar = () => (
  <div className="w-1/4 h-1 bg-[var(--accent)] rounded-full relative overflow-hidden">
    <div className="absolute top-0 left-0 h-full bg-[var(--accent-foreground)] animate-loader"></div>
  </div>
);

const MainContent = () => (
  <div className={`${SHARED_CLASSES.flex} ${SHARED_CLASSES.flexCol} ${SHARED_CLASSES.mdFlexRow}`}>
    <div className={SHARED_CLASSES.mdW1_2}>
      <h2 className={`${SHARED_CLASSES.textMutedForeground} ${SHARED_CLASSES.textSm}`}>Data Center</h2>
      <h1 className="text-4xl font-bold">Latest MLPerf Results Showcase Unprecedented Performance</h1>
      <p className="mt-4 text-lg">
        The NVIDIA platform, powered by NVIDIA Hopper GPUs and NVIDIA Quantum-2 InfiniBand networking, delivered exceptional AI training performance in the latest MLPerf Training benchmarks.
      </p>
      <button className="mt-6 bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--accent)]/80 py-2 px-4 rounded">Learn More</button>
    </div>
    <div className={`${SHARED_CLASSES.mdW1_2} ${SHARED_CLASSES.mt6} ${SHARED_CLASSES.mdMt0}`}>
      <img src="https://placehold.co/600x400" alt="Data Center Image" className={`${SHARED_CLASSES.wFull} ${SHARED_CLASSES.hAuto} ${SHARED_CLASSES.rounded}`} />
    </div>
  </div>
);

const App = () => (
  <div className="bg-[var(--background)] text-[var(--foreground)] p-6">
    <MainContent />
    <div className={`mt-6 ${SHARED_CLASSES.flex} justify-between items-center ${SHARED_CLASSES.borderT} ${SHARED_CLASSES.pt4}`}>
      <Slider />
      <ProgressBar />
    </div>
  </div>
);

export default App;
