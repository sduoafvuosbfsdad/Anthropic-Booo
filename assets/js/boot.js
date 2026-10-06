(function(){
  document.documentElement.lang = A.lang === 'zh' ? 'zh' : 'en';
  A.chrome();
  A.fab();
  A.notice();
  A.route(true);
  A.hooks.langChange.push(() => A.fab());
  if (A.store.get('plain', false)) A.setPlain(true);
  setTimeout(() => A.cookie(), 2600);
  A.console();
})();
