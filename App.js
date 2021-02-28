import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styled from "styled-components";
import Card from "./components/Card";
import Logo from "./components/Logo";
import { NotificationIcon } from "./components/Icons";

export default class App extends React.Component {
  render() {
    return (
      <Container>
       <TitleBar>
        <Avatar source={require("./assets/avatar.jpeg")} />
        <Title>Welcome back,</Title>
        <Name>Meng</Name>
        <NotificationIcon 
          style={{ position: "absolute", right: 20, top: 5 }}
        />
       </TitleBar>
       <ScrollView
  style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }}
  horizontal={true}
>
  <Logo image={require("./assets/logo-framerx.png")} text="Framer X" />
  <Logo image={require("./assets/logo-figma.png")} text="Figma" />
</ScrollView>
       <Subtitle>Continue Learning</Subtitle>
       <SafeAreaView>
       <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
        <Card
          title="Styled Components"
          image={require("./assets/background2.jpg")}
          caption="React Native"
          logo={require("./assets/logo-react.png")}
          subtitle="5 of 12 sections"
        />
        <Card
          title="Styled Components"
          image={require("./assets/background2.jpg")}
          caption="React Native"
          logo={require("./assets/logo-react.png")}
          subtitle="5 of 12 sections"
        />
        <Card
          title="Styled Components"
          image={require("./assets/background2.jpg")}
          caption="React Native"
          logo={require("./assets/logo-react.png")}
          subtitle="5 of 12 sections"
        />
        <Card
        title="Styled Components"
        image={require("./assets/background2.jpg")}
        caption="React Native"
        logo={require("./assets/logo-react.png")}
        subtitle="5 of 12 sections"
      />
    </ScrollView>
    </SafeAreaView>

      </Container>
    );
  }
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;