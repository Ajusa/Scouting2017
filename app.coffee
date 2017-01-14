app = new Vue(
  el: '#app'
  data:
    d:
      match: null
      team: null
      drive: 'tank'
      wheels: '4'
      color: 'blue'
      foul: false
      autonmovement: [ 'moves' ]
      autongears: ''
      autonballs: ''
      autonhighaccu: 0
      autonlowaccu: 0
      telopballdefense: false
      telopgears: ''
      telopgearsplaced: 0
      telopgearsfailed: 0
      telopgearwhere: ''
      telopgearstime: 0
      teloprobostuck: false
      telopballscore: ''
      telopballcollec: ''
      teloplowaccu: 0
      telophighaccu: 0
      human: 'mid'
      driver: 'mid'
      comments: ''
    default: {}
    data: []
    menu: false
    viewData: false
    s: {}
    auth: atob('Ymx1ZWJhYmllc2FyZXVuaGVhbHRoeQ==')
  created: ->
    @default = JSON.parse(JSON.stringify(@d))
    @data = store('data') or []
    @s = store('settings') or
      password: ''
      name: ''
  methods:
    submit: ->
      @data.push @d
      store 'data', @data
      @d.name = @s.name
      @d = JSON.parse(JSON.stringify(@default)) #thanks deep cloning
      @$loading.toggle 'Attempting to send...'
      @$http.post('', @data).then (->
        @$loading.toggle()
        @clear()
        @$alert
          message: 'Form Submitted'
          title: ':D'
          okText: 'Okay'
      ), ->
        @$loading.toggle()
        @$alert
          message: 'Form was not submitted. There are now ' + @data.length + ' forms not submitted'
          title: ':('
          okText: 'Okay'
    clear: ->
      store false
      @data = []
      @$toast
        position: 'bottom'
        message: 'Stored Data Cleared'
    saveSettings: ->
      store 'settings', @s
      @$toast
        position: 'bottom'
        message: 'Saved'
)