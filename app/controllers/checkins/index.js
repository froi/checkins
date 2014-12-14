import Ember from 'ember';

export default Ember.ArrayController.extend({
    itemController: 'checkin',

    checkinCount: function() {
        return this.get('content.length');
    }.property('content.[]')
});
