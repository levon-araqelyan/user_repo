import React from "react"
import { Title, Description, Props } from "@storybook/addon-docs/blocks"
import { addDecorator, addParameters } from "@storybook/react"

addDecorator((storyFn) => (
  <div style={{ padding: "20px", textAlign: "center" }}>{storyFn()}</div>
))
addParameters({
  docs: {
    page: () => (
      <>
        <Title />
        <Description />
        <Props />
      </>
    ),
  },
  backgrounds: [
    { name: "Dark Mode", value: "#434343", default: true },
    { name: "Light Mode", value: "#fff" },
  ],
  viewport: {
    viewports: {
      view360px: {
        name: "360px",
        styles: {
          width: "360px",
          height: "600px",
        },
        type: "mobile",
      },
      view768px: {
        name: "768px",
        styles: {
          width: "768px",
          height: "600px",
        },
        type: "mobile",
      },
      view1440px: {
        name: "1440px",
        styles: {
          width: "1440px",
          height: "600px",
        },
        type: "tablet",
      },
      view1920px: {
        name: "1920px",
        styles: {
          width: "1920px",
          height: "600px",
        },
        type: "desktop",
      },
    },
  },
})
