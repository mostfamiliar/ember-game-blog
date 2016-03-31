import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    body: DS.attr(),
    date: DS.attr(),
    author: DS.attr(),
    image: DS.attr(),
    tag: DS.attr(),
    comments: DS.hasMany('comment', { async: true})
});
