const deviceWidth = screen.availWidth;
document.querySelector('.VPN').textContent = `Please Wait............`;
if (deviceWidth > 990) {
    const vpnData = {
        timezone: data.timezone
    }
    let options = {
        timeZone: vpnData.timezone,
        hour: 'numeric',
        minute: 'numeric',
        month: 'numeric',
        second: 'numeric',
        year: 'numeric',
        day: 'numeric'
    };
    formatter = new Intl.DateTimeFormat([], options);
    const stringTime = formatter.format(new Date());
    const IPtime = Date.parse(stringTime)
    let diff = IPtime - Date.now()
    if (diff < 0) {
        diff = -1 * diff
    }
    if (diff > 50000) {
        console.log("YAY VPN")
        document.querySelector('.VPN').textContent = `You ARE using a VPN`;
    } else {
        console.log("NO VPN");
        document.querySelector('.VPN').textContent = `You donot seem to Use a VPN`;
    }
} else {
    document.querySelector('.VPN').textContent = `This feature is not available on mobile phones lol... So yeah.`;
}