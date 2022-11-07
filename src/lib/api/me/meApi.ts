import {fetchClient} from '../../client';
export const getMyInfo = async () => {
  const me = await fetchClient.get('/api/me');
  return {me};
};
