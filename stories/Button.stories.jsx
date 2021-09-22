import React from "react";
import {
  Button,
  NavButton,
  TextTitle,
  ThemeButton,
  Stack,
} from "../components";
import { Home } from "../components/icons";

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

const ThemeButtonTemplate = () => (
  <Stack isColumn gap={30}>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton isFullWidth>Tweet</ThemeButton>
    <ThemeButton isFullWidth isLarge>
      Tweet
    </ThemeButton>
  </Stack>
);
export const TweetButton = ThemeButtonTemplate.bind({});

// const ThemeButtonTemplate = (args) => (
//   <ThemeButton {...args}>Tweet</ThemeButton>
// );
// export const TweetButton = ThemeButtonTemplate.bind({});

// const FullThemeButtonTemplate = (args) => (
//   <ThemeButton {...args}>Tweet</ThemeButton>
// );
// export const FullTweetButton = FullThemeButtonTemplate.bind({});
// FullTweetButton.args = {
//   isFullWidth: true,
// };

// const FullLargeThemeButtonTemplate = (args) => (
//   <ThemeButton {...args}>Tweet</ThemeButton>
// );
// export const FullLargeTweetButton = FullLargeThemeButtonTemplate.bind({});
// FullLargeTweetButton.args = {
//   isFullWidth: true,
//   isLarge: true,
// };
