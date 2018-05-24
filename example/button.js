var myComponent = require('./button.marko');
myComponent.renderSync({ name: 'Marko' }).appendTo(document.body);
