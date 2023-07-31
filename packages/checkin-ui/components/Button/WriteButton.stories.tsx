import { WriteButton } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ui/WriteButton",
  component: WriteButton,
  argTypes: {},
} as ComponentMeta<typeof WriteButton>;

const Template: ComponentStory<typeof WriteButton> = (args) => (
  <WriteButton {...args}>작성</WriteButton>
);

export const Common = Template.bind({});
Common.args = {};
