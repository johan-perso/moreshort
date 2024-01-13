const fetch = require("node-fetch")

module.exports = async function (provider, link) {
	if(!provider) return new Error("[service] No provider specified in the function call")
	if(!link) return new Error("[service] No link specified in the function call")

	const response = await fetch(`https://${provider}/create.php?url=${encodeURIComponent(link)}`).then(res => res.text()).catch(err => { return `err_${err.message}` })

	if(response.includes("class=\"text-created\"><b>https://")) return response.split("class=\"text-created\"><b>")[1].split("</b>")[0]
	else if(response.startsWith("err_")) return new Error(response.slice(4))
	else return new Error("Unknown error")
}