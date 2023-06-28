import { Select, SelectProps, Spin } from "antd";
import { FindAgentStepNavigation } from "../FindAgentStepNavigation/FindAgentStepNavigation";
import { StepProps } from "../FindAgentForm";
import { useCallback, useState } from "react";
import _ from "lodash";
import { MapApi } from "src/features/map/api/map-api";
import { useController } from "react-hook-form";
import { PinIcon } from "./icons/PinIcon";
import "./AgentAddress.style.css";

export const FindAgentAddress: React.FC<StepProps> = (props) => {
  const [data, setData] = useState<SelectProps["options"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const controller = useController({ name: "address" });

  const handleSearch = useCallback(async (newValue: string) => {
    if (newValue === "") {
      return;
    }
    setIsLoading(true);

    const resp = await MapApi.getAddress(newValue);

    const result = resp.results
      .map((item: any) => {
        return {
          value: item.address_line1,
          text: item.address_line1,
        };
      })
      .filter((item: any) => item !== undefined);
    setIsLoading(false);
    setData(_.uniqWith(result, _.isEqual));
  }, []);

  const handleChange = useCallback((newValue: string) => 
    setSearchValue(newValue), []);
  

  const handleSelect = useCallback((value: string) => 
    controller.field.onChange(value), []);
  
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What is the address of the property you want to sell, please.
      </h4>

      <div className="w-full relative">
        <Select
          showSearch
          defaultOpen={true}
          value={controller.field.value}
          placeholder="Property address"
          style={{ width: "100%" }}
          popupClassName="ant-select-item-custom"
          optionFilterProp="label"
          onSearch={_.debounce(handleSearch, 500)}
          onChange={handleChange}
          onSelect={handleSelect}
          notFoundContent={isLoading ? <Spin className="w-full" size="small" /> : null}
          loading={isLoading}
          bordered
          options={(data || []).map((d) => ({
            value: d.value,
            label: d.text,
          }))}
        />

        <PinIcon className="absolute left-[20px] bottom-[25px]" />
      </div>

      <FindAgentStepNavigation
        {...props}
        isNextDisabled={controller.field.value === ""}
      />
    </>
  );
};
