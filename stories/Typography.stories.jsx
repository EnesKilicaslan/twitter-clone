import React from "react";
import { TextTitle } from "../components";

export default {
  title: "Component/Typography",
  component: TextTitle,
};

const BoldTitleTemplate = (args) => (
  <TextTitle {...args}>Hello World </TextTitle>
);

export const BoldTittle = BoldTitleTemplate.bind({});
BoldTittle.args = {};

const TitleTemplate = (args) => <TextTitle {...args}>Hello World </TextTitle>;

export const Tittle = TitleTemplate.bind({});
Tittle.args = {
  isBold: false,
};
