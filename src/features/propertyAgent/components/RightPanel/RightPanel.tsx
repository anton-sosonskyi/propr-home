import { FindAgentAddress } from "../steps/FindAgentAddress";
import { FindAgentFocus } from "../steps/FindAgentFocus";
import { FindAgentPrice } from "../steps/FindAgentPrice";
import { FindAgentSellPeriod } from "../steps/FindAgentSellPeriod";
import { FindAgentStart } from "../steps/FindAgentStart";
import { RightPanelLayout } from "./RightPanelLayout";

export const RightPanel = () => {
  return (
    <RightPanelLayout>
      {/* <FindAgentStart /> */}
      {/* <FindAgentSellPeriod /> */}
      {/* <FindAgentAddress /> */}
      {/* <FindAgentPrice /> */}
      <FindAgentFocus />
    </RightPanelLayout>
  );
};
