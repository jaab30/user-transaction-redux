import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
    it ("should show the text from props", () => {
        // create an intance of the component
        const wrapper = shallow(<Button />);
        const text = wrapper.find("button");
        expect(text.length).toBe(1)
    })

    it ("should pass the props", () => {
        
        const props = {
            color: "red"
        }
        // create an intance of the component
        const wrapper = shallow(<Button {...props}/>);
        const text = wrapper.find("button");
        expect(text.prop("color")).toBe("red");
    })
})