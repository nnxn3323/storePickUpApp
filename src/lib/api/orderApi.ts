import {fetchClient} from '../client';
export interface IOrderInfo {
  id: string;
  userId: string;
  cash: number;
  orderStatus: string;
  createdAt: string;
  qrUrl: string;
}
export const requestOrder = async ({
  cash,
}: {
  cash: number;
}): Promise<{order: IOrderInfo}> => {
  const FetchedData = await fetchClient.post<{order: IOrderInfo}>(
    '/api/order',
    {
      cash,
    },
  );
  return {order: FetchedData.data.order};
};
export const getOrderHistory = async (): Promise<{
  orderHistory: IOrderInfo[];
}> => {
  const FetchedData = await fetchClient.get<{orderHistory: IOrderInfo[]}>(
    '/api/order/history',
  );
  return {orderHistory: FetchedData.data.orderHistory};
};
