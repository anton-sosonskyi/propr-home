import { Select, SelectProps } from "antd";
import { FindAgentStepNavigation } from "../FindAgentStepNavigation/FindAgentStepNavigation";
import { StepProps } from "../FindAgentForm";
import { useState } from "react";
import _ from "lodash";
import { AgentApi } from "src/features/propertyAgent/api/agent-api";
import './agentAddress.css';
import { useController, useFormContext } from "react-hook-form";
import { PinIcon } from "./icons/PinIcon";

export const FindAgentAddress: React.FC<StepProps> = (props) => {
  const [data, setData] = useState<SelectProps['options']>([]);
  const [searchValue, setSearchValue] = useState('');
  const controller = useController({ name: "address" });
  const { watch, getValues } = useFormContext();
  const [propertySellPeriod] = watch(['address']);

  const handleSearch = _.debounce(async (newValue: string) => {
    if (newValue === '') {
      return;
    }

    const resp = await AgentApi.getAddress(newValue);
    
    const result = resp.results.map((item: any) => {
      if (!item.name) {
        return;
      }

      return {
        value: `${item.name}, ${item.country}`,
        text: `${item.name}, ${item.country}`,
      }
    }).filter((item: any) => item !== undefined);
   
    setData(_.uniqWith(result, _.isEqual));
  }, 1000);

  const handleChange = (newValue: string) => {
    setSearchValue(newValue);
  };

  const handleSelect = (value: string) => {
    controller.field.onChange(value);
  }
  
  const isNextDiasbled = getValues("address") === '';

  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What is the address of the property you want to sell, please.
      </h4>

      <div className="w-full relative">
      <Select
        showSearch
        value={propertySellPeriod || undefined}
        placeholder="Property address"
        style={{width: "100%" }}
       
        defaultActiveFirstOption={false}
        optionFilterProp="label"
        onSearch={handleSearch}
        onChange={handleChange}
        onSelect={handleSelect}
        dropdownStyle={{fontSize: "16px", lineHeight: "24px", fontWeight: "600"}}
        notFoundContent={null}
        options={(data || []).map((d) => ({
          value: d.value,
          label: d.text,
        }))}
      />

      <PinIcon className="absolute left-[20px] bottom-[25px]" />
      </div>

      <FindAgentStepNavigation
        {...props}
        isNextDisabled={isNextDiasbled}
      />
    </>
  );
};
