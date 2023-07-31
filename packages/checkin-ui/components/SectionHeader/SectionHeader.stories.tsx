import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";
export default {
  title: "ui/SectionHeader",
  component: SectionHeader,
  argTypes: {},
} as ComponentMeta<typeof SectionHeader>;

const Template: ComponentStory<typeof SectionHeader> = (args) => (
  <SectionHeader {...args}></SectionHeader>
);

export const Common = Template.bind({});
Common.args = {
  title: "방과후 수강신청",
  subTitle: "Apply for after-school classes",
};
