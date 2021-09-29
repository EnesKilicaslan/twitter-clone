import React from "react";
import { Avatar, ProfileCard } from "../components";

export default {
  title: "Component/ProfileCard",
  component: ProfileCard,
};

const ProfileAvatarTemplate = (args) => <Avatar {...args} />;

export const ProfileAvatar = ProfileAvatarTemplate.bind({});
ProfileAvatar.args = {
  src:
    "https://pbs.twimg.com/profile_images/1312920774072770560/G_NfS1Mo_400x400.jpg",
  alt: "enes",
};

const ProfileCardTemplate = (args) => <ProfileCard {...args} />;

export const ProfileCardExample = ProfileCardTemplate.bind({});
ProfileCardExample.args = {};
