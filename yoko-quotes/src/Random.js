import React from 'react';
import Letter from './Letter';

function getDelta(scrollY, finish) {
  const delta = finish - scrollY;
  return Math.max(delta, 0)/finish;
}

function Random({ text, scrollY, finish }){
  
  const letters = [...text].map(value => <Letter 
                                            delta={getDelta(scrollY, finish)}
                                          >
                                           {value}
                                          </Letter>);
 
  return <div id="full">{letters}</div>;

}

export default Random;