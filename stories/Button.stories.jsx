import React from "react";
import { Button } from "../components";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
