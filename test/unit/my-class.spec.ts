import MyClass from '../../src/scripts/my-class';

const { expect } = chai;

describe('MyClass', function () {
  it('should create an instance of itself', function () {
    let instance = new MyClass();

    expect(instance).to.be.instanceof(MyClass);
  });
});
