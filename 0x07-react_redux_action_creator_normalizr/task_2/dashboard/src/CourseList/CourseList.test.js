import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("thead").children()).toHaveLength(2);
    wrapper.find("thead").forEach((node) => {
      expect(node.equals(<CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />));
    });

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>ES6</td><td class=\"td_1uxrx9c\">60</td></tr>');
    expect(wrapper.find("tbody").childAt(1).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>Webpack</td><td class=\"td_1uxrx9c\">20</td></tr>');
    expect(wrapper.find("tbody").childAt(2).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>React</td><td class=\"td_1uxrx9c\">40</td></tr>');
  });

  it("renders correctely when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    expect(wrapper.find("tbody").children()).toHaveLength(3);
    expect(wrapper.find("tbody").childAt(0).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>ES6</td><td class=\"td_1uxrx9c\">60</td></tr>');
    expect(wrapper.find("tbody").childAt(1).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>Webpack</td><td class=\"td_1uxrx9c\">20</td></tr>');
    expect(wrapper.find("tbody").childAt(2).html()).toEqual('<tr style=\"background-color:#f5f5f5ab\" class=\"\"><td class=\"td_1uxrx9c\"><input type=\"checkbox\"/>React</td><td class=\"td_1uxrx9c\">40</td></tr>');
  });
});