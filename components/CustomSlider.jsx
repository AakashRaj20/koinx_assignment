import { Slider } from "./ui/slider"

const CustomSlider = ({low, high}) => {
  const defaultValues = high * 0.65
  return (
    <Slider
      defaultValue={[defaultValues]}
      max={high}
      min={low}
      step={10}
      className="w-[72%]"
    />
  );
}

export default CustomSlider;
