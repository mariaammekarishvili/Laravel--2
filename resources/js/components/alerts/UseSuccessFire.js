import React from 'react';
import Swal from "sweetalert2";

export default function () {
    const successFire = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'მონაცემები წარმატებით განახლდა',
            showConfirmButton: false,
            timer: 1500
        })
    };

    return successFire;
}

