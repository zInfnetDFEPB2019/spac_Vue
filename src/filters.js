import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});

// "2020-Mar-11 01:04"  Timezone GMT