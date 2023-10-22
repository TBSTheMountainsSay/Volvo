import { useContext } from 'react';
import { VideoStartTimeContext } from '../providers/VideoStartTimeProvider';

export const useVideo = () => useContext(VideoStartTimeContext);
