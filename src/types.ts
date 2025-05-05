export interface VideoData {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  author: string;
  downloadUrl: string;
  format: string;
  date: string;
}

export interface DownloadHistoryItem {
  id: string;
  url: string;
  date: string;
  thumbnail?: string;
  title?: string;
}