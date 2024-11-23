type ArrayType<T> = T[];

/**
   * Returns a random element from given array
   */
export function pickRandom<Type extends string> (list: Array<Type>): Type {
  return list[Math.floor((Math.random() * list.length))];
}
