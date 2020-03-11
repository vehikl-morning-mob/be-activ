import React from "react";
import {render} from "@testing-library/react-native";

import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
    it("says hello world", () => {
        const {getByText} = render(<HelloWorld/>);
        expect(getByText('Hello World')).toBeDefined();
    });
});
