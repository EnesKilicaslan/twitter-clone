import React from "react";
import { Avatar, ProfileCard } from "../components";

export default {
  title: "Component/ProfileCard",
  component: ProfileCard,
};

const ProfileAvatarTemplate = (args) => <Avatar {...args} />;

export const ProfileAvatar = ProfileAvatarTemplate.bind({});
ProfileAvatar.args = {
  alt: "enes",
};

const ProfileCardTemplate = (args) => <ProfileCard {...args} />;

export const ProfileCardExample = ProfileCardTemplate.bind({});
ProfileCardExample.args = {};
