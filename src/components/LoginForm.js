import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  // onButtonPress() {
  //   const { email, password } = this.state;

  //   this.setState({ error: '', loading: true });

  //   firebase.auth().signInWithEmailAndPassword(email, password)
  //     .then(this.onLoginSuccess.bind(this))
  //     .catch(() => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password)
  //         .then(this.onLoginSuccess.bind(this))
  //         .catch(this.onLoginFail.bind(this));
  //     });
  // }

  // onLoginSuccess() {
  //   this.setState({
  //     email: '',
  //     password: '',
  //     error: '',
  //     loading: false
  //   });
  // }

  // onLoginFail() {
  //   this.setState({
  //     error: 'Authentication Failed!',
  //     loading: false
  //   });
  // }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button>
        Log in
      </Button>
    );
  }

  // renderErrorText() {
  //   if (this.state.error !== '') {
  //     return (
  //       <Text style={styles.errorTextStyle}>
  //         {this.state.error}
  //       </Text>
  //     );
  //   }

  //   return null;
  // }

  render() {
    return (
      <View style={{ paddingTop: 65 }}>
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            // onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password'
            placeholder='password'
            value={this.state.password}
            secureTextEntry
            // onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        {/* {this.renderErrorText()} */}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;