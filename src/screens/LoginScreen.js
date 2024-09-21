import { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { postUserRequest } from '../store/actions/users';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/icons/logo.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setForm({
      ...form,
      [field]: value.nativeEvent ? value.nativeEvent.text : value,
    });
  };
  const userToken = useSelector((state) => state.postUserReducer.userToken);
  const errorMessage = useSelector((state) => state.postUserReducer.error);

  const handleLogin = useCallback(async () => {
    await dispatch(postUserRequest(form));
    if (userToken) {
      await AsyncStorage.setItem("token", userToken);
      navigation.navigate('MainTabs', { screen: 'Home' });
    } else {
      console.log("Login Error", errorMessage || "An error occurred during login.");
    }
  }, [errorMessage, form, userToken])

  return (
    <View style={styles.container}>
      <View style={styles.loginImg}>
        <Logo width={72} height={72} />
      </View>

      <View>
        <Text style={styles.loginTitle}>Welcome to E-com</Text>
        <Text style={styles.loginDown}>Sign in to continue</Text>
      </View>

      <View style={styles.loginForm}>
        <Input
          placeholder="Your Email"
          type={false}
          value={form.username}
          iconSource="mail"
          iconStyle={styles.iconInput}
          onChangeText={(value) => handleInputChange('username', value)}
        />
        <Input
          placeholder="Password"
          type={true}
          value={form.password}
          iconSource="password"
          secureTextEntry={true}
          onChangeText={(value) => handleInputChange('password', value)}
        />
        <Button
          title="Sign In"
          iconSource={null}
          onClickButton={handleLogin}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.leftBorder} />
        <Text style={styles.text}>OR</Text>
        <Text style={styles.leftBorder} />
      </View>

      <View style={{ marginTop: 16 }}>
        <Button
          title="Login with Google"
          customStyle={styles.buttonGoogle}
          textStyle={styles.textGoogle}
          iconSource="google"
        />
        <Button
          title="Login with Facebook"
          customStyle={styles.buttonGoogle}
          textStyle={styles.textGoogle}
          iconSource="facebook"
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
        <Text style={styles.termsAndConditions}>Don’t have an account? <Text style={styles.register}>Register</Text></Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  loginImg: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 68,
  },
  loginTitle: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(34,50,99)",
    textAlign: "center",
    marginTop: 16,
  },
  loginDown: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "300",
    color: "rgb(144,152,177)",
    textAlign: "center",
    marginTop: 8,
  },
  loginForm: {
    marginTop: 28,
  },
  textContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 21,
  },
  leftBorder: {
    width: 135,
    borderColor: 'rgb(235, 240, 255)',
    borderBottomWidth: 2,
    marginBottom: 16,
  },
  text: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    color: "rgb(144, 152, 177)",
    textAlign: "center",
  },
  buttonGoogle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgb(235, 240, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    shadowColor: 'rgba(64, 191, 255, 0.24)',
  },
  textGoogle: {
    width: '95%',
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "700",
    color: "rgb(144, 152, 177)",
    textAlign: "center",
  },
  forgotPassword: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold",
    color: "rgb(64, 191, 255)",
    textAlign: "center",
  },
  termsAndConditions: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    color: "rgb(92, 97, 244)",
    textAlign: "center",
    paddingTop: 8,
  },
  register: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "700",
    color: "rgb(92, 97, 244)",
    textAlign: "center",
  },
});