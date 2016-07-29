describe('The styles', function () {
  // const { expect } = chai;

  var frame: QFrame;
  before(function (done) {
    frame = quixote.createFrame({ stylesheet: '/styles/main.css' }, done);
  });

  after(function () {
    frame.remove();
  });

  it('should load the styles', function () {
    frame.add(`<div class="bar"><p class="foo">bar</p></div>`, 'The foo element');
    frame.get('.foo').assert({
      width: frame.get('.bar').width
    });
  });
});
