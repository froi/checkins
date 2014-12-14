import DS from 'ember-data';

export default DS.Model.extend({
    username: DS.attr('string'),
    locationName: DS.attr('string', {
        defaultValue: function() { return 'Puerto Rico'; }
    }),
    lat: DS.attr('string', {
        defaultValue: function() { return '18.4500';}
    }),
    lon: DS.attr('string', {
        defaultValue: function() { return '-66.1000'; }
    })
});
