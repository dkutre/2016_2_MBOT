(function () {
  'use strict';

  const View = window.View
  const SnakeGame = window.SnakeGame;

  class SingleGameView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.js-game');
      this.hide();
    }

    init(options = {}) {
    }

    _initCanvas() {
      this.canvas = this._el.querySelector('.js-canvas');
      this.canvas.width = this._el.clientWidth / 2 + '';
      this.canvas.height = this._el.clientWidth / 2 + '';
      this.canvas.style.border = '1px solid #444';
    }

    resume() {
      let session = new window.SessionModel({}, {});
      session.is_authenticated()
        .then(result => {
            if (result) {
              super.resume();
              this._initCanvas();

              this._game = new SnakeGame({
                ctx: this.canvas.getContext('2d'),
                width: +this.canvas.width,
                height: +this.canvas.height
              });

              this._game.start();
              alert('вы авторизованы');
            } else {
              alert('вы не авторизованиы =(');
              this.router.go('/');
            }
          }
        );
    }
  }


  // export
  window.SingleGameView = SingleGameView;

})();