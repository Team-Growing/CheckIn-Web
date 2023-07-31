import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";
import CalendarImg from "../../assets/Icons/Calendar.svg";
export default {
  title: "ui/Card",
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Common = Template.bind({});
Common.args = {};
