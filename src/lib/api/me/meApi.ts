import {fetchClient} from '../../client';
export const getMyInfo = async () => {
  const me = await fetchClient.get<{id: string; username: string}>('/api/me');
  return {me: me.data};
};
