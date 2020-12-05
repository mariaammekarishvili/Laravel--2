import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/UserContext";
import $ from "jquery";
import {Link, Redirect} from "react-router-dom";
import UseDeleteFire from "../alerts/UseDeleteFire";

export default function () {
    const context = useContext(UserContext);

    const [itemId, setItemId] = useState(0);

    useEffect(() => {
        const bearer = context?.user?.apiToken || "";

        let table = $('#classes').DataTable({
            "processing": true,
            "serverSide": true,
            "bFilter": true,
            "ajax": {
                url: "/api/classes",
                method: 'GET',
                beforeSend: function (request) {
                    request.setRequestHeader("Authorization", 'Bearer ' + bearer);
                },
                error: function(xhr) {
                    if(xhr?.status===401) {
                        context.resetUser();
                    }
                }
            },
            "columns": [
                {data: 'id', name: 'id'},
                {data: 'name', name: 'name'},
                {data: 'show', name: 'show'},
            ],
            "order": [[ 0, "desc" ]],
        });

        table.on('click', 'button.show', function () {
            setItemId($(this).attr("item"));
        });
    }, []);

    if (itemId > 0) return <Redirect to={`/classes/${itemId}/show`} />;

    return (
        <div className="card">
            <div className="card-header">classes</div>

            <div className="card-body">
                <table id="classes" className="table table-bordered">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>სახელი</th>
                        <th>ნახვა</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
