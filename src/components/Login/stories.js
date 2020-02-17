import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginForm from './index';

class Consumer extends React.Component {
  render() {
    return (
      <LoginForm
        account={this.props.account}
        onSubmit={action('onSubmit called')}
        onCancel={action('onCancel called')}
      />
    );
  }
}

storiesOf('components/Login', module)
  .add('new form', () => <Consumer account={{ email: 'banana@bunch.com' }} />)
  .add('edit form', () => <Consumer />);
