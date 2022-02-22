import { components } from "react-select";
import {
  HiOutlineChevronDoubleUp,
  HiOutlineChevronDown,
  HiOutlineChevronUp
} from "react-icons/hi";
import React from "react";
import { Avatar } from "../Avatar";
import { IncidentPriority } from "../../constants/incident-priority";

export const IncidentPrioritySingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex flex-wrap">
      {props.data.icon({ className: "mr-2 mt-1" })}
      {children}
    </div>
  </components.SingleValue>
);
export const IncidentPriorityOption = ({ children, ...props }) => (
  <components.Option {...props}>
    <div className="flex flex-row">
      {props.data.icon({ className: "mr-2 mt-1" })}
      {children}
    </div>
  </components.Option>
);
export const IncidentCommandersSingleValue = ({ ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex flex-wrap gap-1.5 text-sm align-baseline">
      <Avatar srcList={props.data.avatar} size="sm" />
      <p className="mt-0.5">{props.data.label.split(" ")[0]}</p>
    </div>
  </components.SingleValue>
);
export const IncidentCommandersOption = ({ ...props }) => (
  <components.Option {...props}>
    <div className="flex flex-row gap-1.5 text-sm">
      <Avatar srcList={props.data.avatar} size="sm" />
      <p className="mt-0.5">{props.data.label.split(" ")[0]}</p>
    </div>
  </components.Option>
);
export const IncidentRespondentsMultiValueLabel = ({ ...props }) => (
  <components.MultiValueLabel {...props}>
    <div className="flex flex-wrap gap-1.5 text-sm">
      <Avatar srcList={props.data.avatar} size="sm" />
      <p className="mt-0.5">{props.data.label.split(" ")[0]}</p>
    </div>
  </components.MultiValueLabel>
);

export const IncidentRespondentsOption = ({ ...props }) => (
  <components.Option {...props}>
    <div className="flex flex-row gap-1.5 text-sm">
      <Avatar srcList={props.data.avatar} size="sm" />
      <p className="mt-0.5">{props.data.label.split(" ")[0]}</p>
    </div>
  </components.Option>
);
export const priorities = [
  {
    label: "Low",
    value: IncidentPriority.Low,
    icon: function IconToProps(props) {
      return <HiOutlineChevronDown color="green" {...props} />;
    }
  },
  {
    label: "Medium",
    value: IncidentPriority.Medium,
    icon: function IconToProps(props) {
      return <HiOutlineChevronUp color="red" {...props} />;
    }
  },
  {
    label: "High",
    value: IncidentPriority.High,
    icon: function IconToProps(props) {
      return <HiOutlineChevronDoubleUp color="red" {...props} />;
    }
  }
];
