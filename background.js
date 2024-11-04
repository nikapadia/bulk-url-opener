// Right click menu button
chrome.contextMenus.create({
	id: "openLinks",
	title: "Open links",
	contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "openLinks" && info.selectionText) {
		const urlPattern = /(https?:\/\/[^\s]+)/g; // url regex
		const urls = info.selectionText.match(urlPattern);

		if (urls) {
			urls.forEach((url) => {
				chrome.tabs.create({ url: url });
			});
		} else {
			console.log("No URLs found in the highlighted text.");
		}
	}
});
