import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "ui/Input/TextInput",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input />;

export const Common = Template.bind({});
Common.args = {};
