import {
  u
} from "./chunk-NIITUNAE.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-5BEQP2BQ.mjs";

// src/ShaderGradientUI/Slider.tsx
import { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function Slider({
  title,
  defaultValue,
  setValue,
  step,
  min,
  max
}) {
  const [sharedValue, setSharedValue] = useState(defaultValue);
  const [isMouseOver, setIsMouseOver] = useState(false);
  useEffect(() => {
    setSharedValue(defaultValue);
  }, []);
  useEffect(() => {
    setValue(sharedValue);
  }, [sharedValue]);
  useEffect(() => {
    setSharedValue(defaultValue);
  }, [defaultValue]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex items-center w-full h-[26px] flex-row gap-2",
      style: { fontFamily: "Inter Medium" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-[100px] flex items-center flex-shrink-0", children: /* @__PURE__ */ jsx("p", { className: "font-medium whitespace-nowrap", children: title }) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center w-full h-fit flex-row gap-2",
            onMouseOver: () => setIsMouseOver(true),
            onMouseLeave: () => setIsMouseOver(false),
            children: [
              /* @__PURE__ */ jsx(
                u,
                {
                  value: Number(sharedValue),
                  step,
                  min,
                  max,
                  onChange: (value, index) => setSharedValue(value),
                  className: "w-full rounded-md bg-[#F2F2F2] cursor-ew-resize overflow-hidden transition-height duration-300 " + (isMouseOver === true ? "h-[26px]" : "h-[5px]"),
                  trackClassName: "h-full duration-300 " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                  renderTrack: (props, state) => /* @__PURE__ */ jsx(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "h-full flex relative " + (isMouseOver === true ? "bg-[#ff340a]" : "bg-[#ABABAB]"),
                      style: __spreadProps(__spreadValues({}, props.style), {
                        opacity: state.index === 1 ? 0 : 1
                      })
                    })
                  ),
                  renderThumb: (props, state) => /* @__PURE__ */ jsx(
                    "div",
                    __spreadProps(__spreadValues({}, props), {
                      className: "w-[8px] h-full justify-center items-center flex",
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute w-[2px] bg-[#ffffff] rounded-full pointer-events-none duration-200 h-[30%] " + (isMouseOver === true ? "opacity-100" : "opacity-0")
                        }
                      )
                    })
                  )
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  value: sharedValue,
                  onChange: (e) => setSharedValue(e.target.value),
                  className: "font-medium w-[42px] h-[26px] outline-none text-center bg-[#F2F2F2] rounded-md flex items-center justify-center [&::-webkit-inner-spin-button]:appearance-none " + (isMouseOver === true ? "text-[#ff340a]" : "text-[#000000]"),
                  min,
                  max,
                  step
                }
              )
            ]
          }
        )
      ]
    }
  );
}

export {
  Slider
};
