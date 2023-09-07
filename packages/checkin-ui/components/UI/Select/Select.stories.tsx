import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./Select";

export default {
  title: "ui/Select",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [classification, setClassification] = useState("전체보기");
  return (
    <>
      <Select
        items={["전체보기", "1학년", "2학년", "3학년"]}
        value={classification}
        onChange={setClassification}
      />
    </>
  );
};

export const Common = Template.bind({});
