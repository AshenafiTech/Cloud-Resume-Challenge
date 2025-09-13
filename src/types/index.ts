export interface VisitorCount {
  count: number;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}