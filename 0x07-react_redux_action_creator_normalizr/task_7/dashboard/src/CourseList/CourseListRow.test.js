import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("tr").childAt(0).html()).toEqual('<th colSpan="2" class=\"thcenter_1rn10vl\">test</th>');
  });

  it("should render two cells when textSecondCell not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("tr").childAt(0).html()).toEqual("<td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>test</td>");
    expect(wrapper.find("tr").childAt(1).html()).toEqual("<td class=\"td_1uxrx9c\">test</td>");
  });
});