import { BASE_API, API_KEY } from '../constants/api';

export const httpRequestWrapper = (path: string) => `${BASE_API}${path}apiKey=${API_KEY}`;