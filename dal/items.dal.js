const items = [
  { id: 1, name: 'Item One', description: 'First item' },
  { id: 2, name: 'Item Two', description: 'Second item' },
  { id: 3, name: 'Item Three', description: 'Third item' },
];

export const getAllItemsFromDal = () => items;

export const getItemByIdFromDal = (id) => {
  return items.find(item => item.id === Number(id));
};
