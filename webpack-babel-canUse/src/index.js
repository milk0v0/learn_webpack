import a from './a';

(async () => {
  console.log(a);
  const pro = await new Promise((res, req) => {
    setTimeout(() => {
      res('hhh')
    }, 1000);
  });
  console.log(pro);
})()