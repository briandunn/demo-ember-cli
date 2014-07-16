import Ember from 'ember';
import Resolver from 'ember/resolver';
import stubServer from 'mc-normal-mode/utils/stub-server';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'mc-normal-mode', // TODO: loaded via config
  Resolver: Resolver
});


loadInitializers(App, 'mc-normal-mode');

new Pretender(stubServer);

export default App;