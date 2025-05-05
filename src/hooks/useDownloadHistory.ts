import { useEffect, useState } from 'react';
import { DownloadHistoryItem } from '../types';

export const useDownloadHistory = () => {
  const [history, setHistory] = useState<DownloadHistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('downloadHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse download history', e);
        localStorage.removeItem('downloadHistory');
      }
    }
  }, []);

  const addToHistory = (item: DownloadHistoryItem) => {
    const newHistory = [item, ...history.slice(0, 9)]; // Keep only last 10 items
    setHistory(newHistory);
    localStorage.setItem('downloadHistory', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('downloadHistory');
  };

  return { history, addToHistory, clearHistory };
};