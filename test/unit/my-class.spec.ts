import MyClass from '../../src/scripts/my-class';

describe('MyClass', function () {

  const { expect } = chai;

  it('should create an instance of itself', function () {
    let instance = new MyClass();

    expect(instance).to.be.instanceof(MyClass);
  });
});
