// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/material-components-marko$1.0.1/examples/ex-button/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    m_button_template = marko_loadTemplate(require.resolve("../../components/m-button")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    m_button_tag = marko_loadTag(m_button_template);

function render(input, out, __component, component, state) {
  var data = input;

  m_button_tag({
      class: "foo-button mdc-button",
      ripple: true,
      body: {
          renderBody: function renderBody(out) {
            out.w("Rajat");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0", [
    [
      "click",
      "click",
      false
    ]
  ]);

  m_button_tag({
      class: "mdc-button",
      ripple: true,
      body: {
          renderBody: function renderBody(out) {
            out.w("<i class=\"material-icons mdc-button__icon\" aria-hidden=\"true\">favorite</i> Button");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "2");

  m_button_tag({
      class: "mdc-button",
      ripple: true,
      disabled: true,
      body: {
          renderBody: function renderBody(out) {
            out.w("<i class=\"material-icons mdc-button__icon\" aria-hidden=\"true\">favorite</i> Disabled");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "5");

  m_button_tag({
      href: "https://google.com",
      class: "foo-button mdc-button",
      ripple: true,
      body: {
          renderBody: function renderBody(out) {
            out.w("Google");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "8");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.scss"
    ],
    id: "/material-components-marko$1.0.1/examples/ex-button/index.marko",
    component: "./",
    tags: [
      "../../components/m-button"
    ]
  };
