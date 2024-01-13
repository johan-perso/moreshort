const fetch = require("node-fetch")

module.exports = async function (provider, link, shortCode) {
	if(!provider) return new Error("[service] No provider specified in the function call")
	if(!link) return new Error("[service] No link specified in the function call")

	var toReturn

	const response = await fetch(`https://${provider}/api/shorten`, {
		method: "POST",
		body: new URLSearchParams({ link, custom_code: shortCode || "" })
	}).then(res => res.text()).catch(err => { return { fetcherror: err } })

	if(typeof response === "string") try { toReturn = JSON.parse(response) } catch (error) { toReturn = response }

	if(!toReturn?.data?.shorten){
		var errorMessage = toReturn?.message || toReturn?.fetcherror || toReturn
		if(typeof errorMessage == "string" && errorMessage?.startsWith("Error: ")) errorMessage = errorMessage.slice(7)
		return new Error(errorMessage)
	} else return toReturn.data.shorten
}