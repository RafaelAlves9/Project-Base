import { useNavigate } from "react-router-dom";
import React from "react";
import { toastMessage } from "../../../src/utils/toastMessage";
import { instances } from "../../../config/axios/axios.instances";

export abstract class Base extends React.Component {
    protected _private = instances.private;
    protected _public = instances.public;
    private _navigate = useNavigate();

    constructor() {
        super({});
    };

    protected message(message: string, type: "error" | "success") {
        toastMessage(message, type);
    };
    protected navigate(route: string) {
        this._navigate(`/${route}`);
    };
};
