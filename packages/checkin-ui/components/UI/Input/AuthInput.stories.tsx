import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AuthInput } from "./Input";

export default {
  title: "ui/Input/AuthInput",
  component: AuthInput,
  argTypes: {},
} as ComponentMeta<typeof AuthInput>;

const Template: ComponentStory<typeof AuthInput> = (args) => <AuthInput />;

export const Common = Template.bind({});
Common.args = {};
