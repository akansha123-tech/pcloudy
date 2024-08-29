const devices = [
    { name: 'iphone12', os: 'Android 9.0', status: 'Available', imageUrl: "imagesiphones/iphone12.webp" },
    { name: 'iphone13', os: 'Android 10.0', status: 'Available', imageUrl: "imagesiphones/iphone13.webp" },
    { name: 'iphone14pro', os: 'iOS 13.1', status: 'Available', imageUrl: "imagesiphones/iphone14pro.webp" },
    { name: 'iphone15', os: 'Android 6.0', status: 'Available', imageUrl: "imagesiphones/iphone15.webp" },
    
    { name: 'oppo-x6-pro', os: 'Android 7.0', status: 'Offline', imageUrl: "imagesiphones/oppo-x6-pro.webp" },
    { name: 'huawei-mate', os: 'Android 7.0', status: 'Offline', imageUrl: "imagesiphones/huawei-mate.webp" }
];

function createDeviceCard(device) {
    return `
        <div class="device-card">
            <img src="${device.imageUrl || 'placeholder.jpg'}" alt="${device.name}" width="150" height="250">
            <h3>${device.name}</h3>
            <p>${device.os}</p>
            <button class="${device.status.toLowerCase() === 'available' ? 'connect' : device.status.toLowerCase()}">
                ${device.status === 'Available' ? 'Connect' : device.status}
            </button>
        </div>
    `;
}

function renderDevices() {
    const deviceGrid = document.getElementById('deviceGrid');
    deviceGrid.innerHTML = devices.map(createDeviceCard).join('');
}

document.addEventListener('DOMContentLoaded', renderDevices);
