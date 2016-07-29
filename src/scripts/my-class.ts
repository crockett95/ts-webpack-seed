import formatMessage from 'format-message';
import template from '../templates/main.hbs';

export default class MyClass {
  constructor() {
    console.log(formatMessage(`{
       count, plural,
          =0 {No unread messages, {name}}
         one {# unread message, {name}}
       other {# unread messages, {name}}
     }`, {count: this.count, name: this.name}));
  }

  public get template(): string {
    return template(this);
  }

  public get count(): number {
    return Math.floor(Math.random() * 10);
  }

  public get name(): string {
    return 'foo';
  }
}
