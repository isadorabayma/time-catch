const categorys = [
  { 
    id: 1,
    name: 'select a category',
    parentId: null,
  },
  { 
    id: 2,
    name: 'Home',
    parentId: 1,
  },
  { 
    id: 3,
    name: 'Job',
    parentId: 1,
  },
  { 
    id: 4,
    name: 'Lavar Louça',
    parentId: 2,
  },
  { 
    id: 5,
    name: 'Varrer',
    parentId: 2,
  },
  { 
    id: 6,
    name: 'Arquitetura',
    parentId: 3,
  },
  { 
    id: 7,
    name: 'Obra Jay',
    parentId: 6,
  },
  { 
    id: 8,
    name: 'Compras',
    parentId: 7,
  },
  { 
    id: 9,
    name: 'Projeto',
    parentId: 7,
  },
];

export default categorys;