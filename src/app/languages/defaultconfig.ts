export const defaultOptions = {
    firstMethod: 'I have an array, I would like to',
    findMethod: "I'm trying to find",
    methodOptions: 'I need to',
    singleItem: 'one item',
    manyItems: 'one or many items',
    primaryOptions: [
      {name :'add', desc: 'add items or other arrays'},
      {name: 'remove',desc: 'remove items'},
      {name:'find',desc:'find items'},
      {name:'iterate',desc:'walk over items'},
      {name:'string',desc: 'return a string'},
      {name:'ordering',desc:'order an array'},
      {name: 'others',desc: 'something else'}
  ] 
}

export enum methodTypes {
  add = 'add',
  remove =  'remove',
  find = 'find',
  iterateby =  'iterate by',
  string = 'string'
}