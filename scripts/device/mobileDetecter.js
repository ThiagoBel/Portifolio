let mobile = false;

setTimeout(() => {
    if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    } else {
        mobile = false
    }
}, 1000)