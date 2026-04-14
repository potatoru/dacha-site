import Repository from '@app/api/axios';
import type { TOrder } from '@app/types.ts'

/**
 * Shop
 */
export const shop = {
  get: () => Repository.get('/shop/products'),
  order: (order: TOrder) => Repository.post('/shop/orders', order)
};

export const bans = {
  get: (page: number) => Repository.get(`/bans?page=${page}`),
}
