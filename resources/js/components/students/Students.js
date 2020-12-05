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

        let table = $('#students').DataTable({
            "processing": true,
            "serverSide": true,
            "bFilter": true,
            "ajax": {
                url: "/api/students",
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
                {data: 'edit', name: 'edit'},
                {data: 'delete', name: 'delete'},
            ],
            "order": [[ 0, "desc" ]],
        });

        table.on('click', 'button.edit', function () {
            setItemId($(this).attr("item"));
        });

        table.on('click', 'button.delete', function () {
            const id = ($(this).attr("item"));
            const fire = UseDeleteFire({url:`/api/students/${id}`,thisObject:this});
            fire();
        });
    }, []);

    if (itemId > 0) return <Redirect to={`/students/${itemId}/edit`} />;

    return (
        <div className="card">
            <div className="card-header">სტუნდეტები</div>

            <div className="card-body">
                <table id="students" className="table table-bordered">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>სახელი</th>
                        <th>რედაქტირება</th>
                        <th>წაშლა</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    )
}
