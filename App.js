import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator.js";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ProfileContext } from "./Context.js";

export default function App() {
  return (
    <ProfileContext>
      <StripeProvider publishableKey="pk_test_51OetAUSCvFww83U4K2wpArmwpc3O0uAFBkmGohk3gQtEv6pUwdWZFRGjx2yw9COoapRpW4lDe9q5CgmXg1d5AMMY00rzXtIEX5">
        <StackNavigator />
      </StripeProvider>
    </ProfileContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ff',
  },
});
