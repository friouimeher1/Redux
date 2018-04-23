 const Add=(a,b)=>{
  return a+b
}

export const Multipaly=(a,b)=>{
  return a*b
}

export const Sustraction=(a,b)=>{
  return a-b
}

export const Divison=(a,b)=>{
  if (b === 0){
    return 'Divison Imposible by '+b
  }
  return a/b
}

export default Add
