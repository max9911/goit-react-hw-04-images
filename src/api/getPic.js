import { api } from './api';

export const getPics = async (searchWord, page) => {
  const data = await api(
    `?q=${searchWord}&page=${page}&key=40419544-c0f303dad1209c5e446227c13&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
