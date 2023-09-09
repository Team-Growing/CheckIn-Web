import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputWrap } from "../../Layout/InputWrap/InputWrap";
import { InputInfoText } from "./style";
import { Input } from "./Input";

export default {
  title: "ui/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <InputWrap>
    <InputInfoText>
      수업 이름 <span>*</span>
    </InputInfoText>
    <Input />
  </InputWrap>
);

export const Common = Template.bind({});
Common.args = {};
