import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { useState } from "react";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Plans from "../data/Plans";
import { useStripe } from "@stripe/stripe-react-native";
import { useNavigation } from "@react-navigation/native";

const PlansScreen = () => {
  const navigation=useNavigation()
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState();
  const stripe = useStripe();
  const plans = Plans;
  function subscribe(){
    Alert.alert("Message","Payment Succesfull")
    navigation.navigate("Loading")
  }
  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            choose the plan
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}>
            <Entypo name="check" size={24} color="#e50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Watch all you want Ad free
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}>
            <Entypo name="check" size={24} color="#e50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Recommondations Just For You
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}>
            <Entypo name="check" size={24} color="#e50914" />
            <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
              Change Or Cancel your plan anytime
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            {plans.map((item, index) => (
              <Pressable
                onPress={() => {
                  setSelected(item.name);
                  setPrice(item.price);
                }}
                key={index}
                style={
                  selected.includes(item.name)
                    ? {
                        height: 160,
                        borderRadius: 7,
                        borderColor: "#e50914",
                        borderWidth: 2,
                        padding: 15,
                        margin: 10,
                      }
                    : {
                        height: 160,
                        borderRadius: 7,
                        borderColor: "#e50914",
                        borderWidth: 0.5,
                        padding: 15,
                        margin: 10,
                      }
                }>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <View
                    style={{
                      backgroundColor: "#e50914",
                      padding: 10,
                      width: 100,
                      borderRadius: 6,
                    }}>
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        fontSize: 16,
                        fontWeight: "600",
                      }}>
                      {item.name}
                    </Text>
                  </View>
                  <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    Price: <FontAwesome name="rupee" size={15} color="black" />
                    {item.price}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <View>
                    <Text
                      style={{
                        color: "grey",
                        fontSize: 15,
                        fontWeight: "300",
                      }}>
                      Video Quality: {item.videoQuality}
                    </Text>
                    <Text
                      style={{ fontSize: 16, fontWeight: "300", marginTop: 3 }}>
                      Resolution: {item.resolution}
                    </Text>
                  </View>
                  <Fontisto
                    name="netflix"
                    size={24}
                    color="black"
                    style={{ marginRight: 6 }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <Text style={{ fontSize: 16 }}>
                    Devices You can Watch on:{" "}
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {item.devices.map((device) => (
                      <Entypo
                        name={device.name}
                        size={18}
                        color="#e50914"
                        style={{ marginRight: 6 }}
                      />
                    ))}
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
          style={{
            backgroundColor: "#e50914",
            padding: 10,
            marginBottom: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: 55,
          }}>
          <View>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>
              Selected Plan : {selected}
            </Text>
          </View>

          <Pressable onPress={subscribe}>
            <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
              Pay <FontAwesome name="rupee" size={14} color="white" /> {price}
            </Text>
          </Pressable>
        </Pressable>
      ) : null}
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});
