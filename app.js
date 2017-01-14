// Generated by CoffeeScript 1.12.2
(function() {
  var app;

  app = new Vue({
    el: '#app',
    data: {
      d: {
        match: '',
        team: '',
        drive: 'tank',
        wheels: '4',
        color: 'blue',
        foul: false,
        autonmovement: ['moves'],
        autongears: '',
        autonballs: '',
        autonhighaccu: 0,
        autonlowaccu: 0,
        telopballdefense: false,
        telopgears: '',
        telopgearsplaced: 0,
        telopgearsfailed: 0,
        telopgearwhere: '',
        telopgearstime: 0,
        teloprobostuck: false,
        telopballscore: '',
        telopballcollec: '',
        teloplowaccu: 0,
        telophighaccu: 0,
        human: 'mid',
        driver: 'mid',
        comments: ''
      },
      "default": {},
      data: [],
      menu: false,
      viewData: false,
      s: {},
      auth: atob('Ymx1ZWJhYmllc2FyZXVuaGVhbHRoeQ==')
    },
    created: function() {
      this["default"] = JSON.parse(JSON.stringify(this.d));
      this.data = store('data') || [];
      return this.s = store('settings') || {
        password: '',
        name: ''
      };
    },
    methods: {
      submit: function() {
        this.data.push(this.d);
        store('data', this.data);
        this.d.name = this.s.name;
        this.d = JSON.parse(JSON.stringify(this["default"]));
        this.$loading.toggle('Attempting to send...');
        return this.$http.post('', this.data).then((function() {
          this.$loading.toggle();
          this.clear();
          return this.$alert({
            message: 'Form Submitted',
            title: ':D',
            okText: 'Okay'
          });
        }), function() {
          this.$loading.toggle();
          return this.$alert({
            message: 'Form saved. There are now ' + this.data.length + ' forms saved',
            title: ':(',
            okText: 'Okay'
          });
        });
      },
      clear: function() {
        store(false);
        this.data = [];
        return this.$toast({
          position: 'bottom',
          message: 'Stored Data Cleared'
        });
      },
      saveSettings: function() {
        store('settings', this.s);
        return this.$toast({
          position: 'bottom',
          message: 'Saved'
        });
      }
    }
  });

}).call(this);
