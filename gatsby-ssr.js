const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'dark-mode-init',
      dangerouslySetInnerHTML: {
        __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`,
      },
    }),
  ]);
};
