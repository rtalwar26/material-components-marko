// Compiled using marko@4.10.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/material-components-marko$1.0.1/components/m-button/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  if (input.href) {
    out.w("<a href=\"" +
      marko_escapeXmlAttr(input.href) +
      "\" class=\"" +
      marko_escapeXmlAttr(input.class) +
      "\"" +
      marko_attr("disabled", input.disabled) +
      marko_attr("data-marko", {
        onclick: __component.d("clickHandler", false)
      }, false) +
      ">");

    include_tag({
        _target: input.body
      }, out, __component, "1");

    out.w("</a>");
  } else {
    out.w("<button class=\"" +
      marko_escapeXmlAttr(input.class) +
      "\"" +
      marko_attr("disabled", input.disabled) +
      marko_attr("data-marko", {
        onclick: __component.d("clickHandler", false)
      }, false) +
      ">");

    include_tag({
        _target: input.body
      }, out, __component, "3");

    out.w("</button>");
  }
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "package: ./browser.json",
      "./style.scss"
    ],
    id: "/material-components-marko$1.0.1/components/m-button/index.marko",
    component: "./",
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
