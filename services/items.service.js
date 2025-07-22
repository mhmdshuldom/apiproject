import { getAllItems, getItemById } from '../dal/items.dal.js';

export function fetchAllItems() {
  return getAllItems();
}

export function fetchItemById(id) {
  return getItemById(id);
}
