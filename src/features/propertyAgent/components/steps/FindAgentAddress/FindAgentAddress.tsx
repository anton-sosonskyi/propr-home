import { Select } from "antd";

export const FindAgentAddress = () => {
  return (
    <>
      <h4 className="mb-14 text-2xl text-[#232b2f] tracking-wider">
        What is the address of the property you want to sell, please.
      </h4>

      <Select
        defaultValue="lucy"
        style={{ width: "100%" }}
        className=""
        size="large"
        allowClear
        options={[
          { value: 'rua', label: 'Rua' },
          { value: 'rua1', label: 'Rua Frederico Arouca Cascais' },
          { value: 'rua2', label: 'Rua Augusta Lisbon' },
        ]}
      />
    </>
  );
};
