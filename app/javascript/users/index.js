import Vue from 'vue/dist/vue.common'
import axios from 'axios'

let AUTH_TOKEN = document.querySelectorAll('meta[name="csrf-token"]')[0].content
let App = new Vue({
  el: '#app',
  data: {
    firstName: ''
  },
  methods: {
    submit: function () {
      let _this = this;
      axios.post('/users', {
        firstName: _this.firstName,
        'authenticity_token': AUTH_TOKEN
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})

export default App