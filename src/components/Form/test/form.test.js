import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
    it ("should pass the props", () => {
        // create an intance of the component
        const props = {
            color: "red"
        }
        const wrapper = shallow(<Button {...props}/>);
        const text = wrapper.find("button");
        expect(text.prop("color")).toBe("red");
    })
})