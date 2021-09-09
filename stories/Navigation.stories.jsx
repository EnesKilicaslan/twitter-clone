import React from "react";
import { Navigation } from "../components";

export default {
  title: "Component/Navigation",
  component: Navigation,
};

const Template = (args) => <Navigation {...args} />;

export const LeftNavigation = Template.bind({});
LeftNavigation.args = {};
