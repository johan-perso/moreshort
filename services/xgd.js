const fetch = require("node-fetch")

module.exports = async function (provider, url, shortCode) {
	if(!provider) return new Error("[service] No provider specified in the function call")
	if(!url) return new Error("[service] No link specified in the function call")

	var toReturn

	const response = await fetch(`https://${provider}/create.php`, {
		method: "POST",
		body: new URLSearchParams({ url, format: "json", shorturl: shortCode || "" })
	}).then(res => res.text()).catch(err => { return { fetcherror: err } })

	if(typeof response === "string") try { toReturn = JSON.parse(response) } catch (error) { toReturn = response }

	if(!toReturn?.shorturl){
		var errorMessage = toReturn?.errormessage || toReturn?.fetcherror || toReturn
		if(typeof errorMessage == "string" && errorMessage?.startsWith("Error: ")) errorMessage = errorMessage.slice(7)
		return new Error(errorMessage)
	} else return toReturn.shorturl
}