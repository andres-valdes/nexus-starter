import { queryField } from 'nexus';

export default queryField('helloWorld', {
  type: 'String',
  resolve() {
    return 'Hi';
  },
});
