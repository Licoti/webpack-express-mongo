const debug = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'none';

export function initHome () {
  const Base = {
    init: function () {
      if (debug) console.log('Base-init !');
      console.log(process.env.NODE_ENV);

      this._hello();

      $('#registerForm').on('click', this._register);
    },

    _hello: function (e) {
      if (debug) console.log('_hello');
    },

    _register: function (e) {
      e.preventDefault();

      if (debug) console.log('_register');

      const user = $('#username').val();
      const pass = $('#password').val();
      let userInfo;

/*      userInfo.push({
        username: user,
        password: pass,
      });*/

      userInfo = {
        username: user,
        password: pass
      };

      $.post('/register', userInfo, function (data) {
        if (debug) console.log('data : ', data);
      });
    }
  };

  Base.init();
}