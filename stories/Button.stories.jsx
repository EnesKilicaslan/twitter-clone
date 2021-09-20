import React from "react";
import { Button, NavButton, TextTitle } from "../components";
import { Home } from "../components/icons";
import styles from "../components/Button.module.css";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {},
};

const ButtonTemplate = (args) => <Button {...args}>Primary</Button>;

export const Primary = ButtonTemplate.bind({});
Primary.args = {};

const NavButtonTemplate = (args) => (
  <NavButton {...args}>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
);

export const NavigationButton = NavButtonTemplate.bind({});
NavigationButton.args = {
  selected: true,
};
