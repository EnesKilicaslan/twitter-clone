import React from "react";
import { Navigation } from "../components";

export default {
  title: "Component/Navigation",
  component: Navigation,
  argTypes: {
    selectedItem: {
      options: ["home", "notification", "messages"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
    isFlat: {
      control: { type: "boolean" }, // Automatically inferred when 'options' is defined
    },
  },
};

const Template = (args) => <Navigation {...args} />;

export const LeftNavigation = Template.bind({});

LeftNavigation.args = {
  selectedItem: "home",
  isFlat: false,
};
