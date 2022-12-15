const categorys = [
  { 
    id: 1,
    category: 'select a category',
    parentId: null,
  },
  { 
    id: 2,
    category: 'Home',
    parentId: 1,
  },
  { 
    id: 3,
    category: 'Job',
    parentId: 1,
  },
  { 
    id: 4,
    category: 'Lavar Louça',
    parentId: 2,
  },
  { 
    id: 5,
    category: 'Varrer',
    parentId: 2,
  },
  { 
    id: 6,
    category: 'Arquitetura',
    parentId: 3,
  },
  { 
    id: 7,
    category: 'Obra Jay',
    parentId: 6,
  },
  { 
    id: 8,
    category: 'Compras',
    parentId: 7,
  },
  { 
    id: 9,
    category: 'Projeto',
    parentId: 7,
  },
];

export default categorys;