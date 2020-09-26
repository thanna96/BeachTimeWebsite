import React from "react";

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto mb-0 text-center text-title mt-0">
                <h1 className="text-capitalize text-muted text-4xl">
                    {name} {title}
                </h1>
            </div>
        </div>

    )
}