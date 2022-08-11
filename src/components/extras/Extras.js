import Swal from "sweetalert2";

export const Toaster = (icon, title) => {
    const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
    });
    return Toast.fire({
    icon: icon,
    title: title
    });
};