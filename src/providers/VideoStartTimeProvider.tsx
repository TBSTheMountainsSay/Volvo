import React, { useState } from 'react';

export const VideoStartTimeContext = React.createContext<{
  startTime: number;
  changeStartTime: (newStartTime: number) => void;
}>({
  startTime: 0,
  changeStartTime: () => {},
});

type TVideoStartTimeProviderProps = { children: JSX.Element };

const VideoStartTimeProvider: React.FC<TVideoStartTimeProviderProps> = ({
  children,
}) => {
  const [startTime, setStartTime] = useState<number>(0);

  const changeStartTime = (newStartTime: number) => {
    setStartTime(newStartTime);
  };

  return (
    <VideoStartTimeContext.Provider value={{ startTime, changeStartTime }}>
      {children}
    </VideoStartTimeContext.Provider>
  );
};

export default VideoStartTimeProvider;
