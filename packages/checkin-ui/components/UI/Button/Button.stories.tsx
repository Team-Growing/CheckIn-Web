import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "ui/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>adfasdfadsfasdf</Button>
);

export const Common = Template.bind({});
Common.args = {};
