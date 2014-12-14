import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createCheckin: function() {
            var self = this;

            navigator.geolocation.getCurrentPosition(function(data) {

                var lat = data.coords.latitude,
                lon = data.coords.longitude;

                self.store.createRecord('checkin', {
                    username: self.get('username'),
                    locationName: self.get('location_name'),
                    lat: lat,
                    lon: lon
                }).save().then(function() {
                    self.set('username', '');
                    self.set('location_name', '');
                    self.transitionToRoute('checkins.index');
                });
                console.log('Checkin created...');
            });
        }
    }
});
