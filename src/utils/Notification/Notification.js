import React from 'react'
import './notification.css'
import Swal from 'sweetalert2'

export const showErrMsg = (msg) => {
    return <div className="errMsg">{msg}</div>
}
export const showSuccessMsg = (msg) => {
    return <div className="successMsg">{msg}</div>
}
export const errorNotifi = (element) => {
    return Swal.fire({
        title: 'Error!',
        html: element,
        icon: 'error',
        confirmButtonText: 'OK'
    })
}
export const successNotifi = (element) => {
    return Swal.fire({
        title: 'success!',
        html: element,
        icon: 'success',
        confirmButtonText: 'OK'
    })
}