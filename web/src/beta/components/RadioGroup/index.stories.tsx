import { useArgs } from "@storybook/preview-api";
import { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";

import RadioGroup from "./index";

type Props = React.ComponentProps<typeof RadioGroup>;

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const options = [
  { key: "option1", value: "Option 1", selected: false },
  { key: "option2", value: "Option 2", selected: false },
];

export const VerticalSingleSelect: Story = (args: Props) => {
  const [_, updateArgs] = useArgs();

  const handleChange = useCallback((value: string) => updateArgs({ value }), [updateArgs]);

  return (
    <div>
      <RadioGroup {...args} onChange={handleChange} />
    </div>
  );
};
VerticalSingleSelect.args = {
  options: options,
  layout: "vertical",
  onChange: () => console.log("clicked"),
};

export const HorizontalMultiSelect: Story = (args: Props) => {
  const [_, updateArgs] = useArgs();

  const handleChange = useCallback((value: string) => updateArgs({ value }), [updateArgs]);

  return (
    <div>
      <RadioGroup {...args} onChange={handleChange} />
    </div>
  );
};
HorizontalMultiSelect.args = {
  options: options,
  layout: "horizontal",
  onChange: () => console.log("clicked"),
};
