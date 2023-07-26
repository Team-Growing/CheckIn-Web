import React from "react";
import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  title: "ui/Input",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button />;

export const Common = Template.bind({});
Common.args = {};
