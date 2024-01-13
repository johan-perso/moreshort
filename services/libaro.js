const fetch = require("node-fetch")

module.exports = async function (link) {
	if(!link) throw "[service] No link specified in the function call"

	var expiresAt = new Date()
	expiresAt.setFullYear(expiresAt.getFullYear() + 1)
	expiresAt = expiresAt.toISOString()

	const response = await fetch("https://liba.ro/api/v1/shorten", {
		method: "POST",
		body: new URLSearchParams({ url: link, expiresAt })
	}).then(res => res.text()).catch(err => { return err.message })

	var json
	try { json = JSON.parse(response) } catch (error) { json = response }

	if(json.startsWith("https://liba.ro/")) return json.toString()

	else return new Error(json.message || json.error || json)
}