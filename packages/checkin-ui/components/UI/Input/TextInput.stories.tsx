import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextInput } from "./Input";

export default {
  title: "ui/Input/TextInput",
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput />;

export const Common = Template.bind({});
Common.args = {};
