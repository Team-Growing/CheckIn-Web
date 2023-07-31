import { PrevButton } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ui/PrevButton",
  component: PrevButton,
  argTypes: {},
} as ComponentMeta<typeof PrevButton>;

const Template: ComponentStory<typeof PrevButton> = (args) => (
  <PrevButton {...args}>이전</PrevButton>
);

export const Common = Template.bind({});
Common.args = {};
