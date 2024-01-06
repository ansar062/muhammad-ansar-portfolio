export const fetcher = (url) =>
	fetch(url, {
		headers: {
			// Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`
			Authorization: `Bearer skID6YLzHg8ZwLrAuDf8W2mKLjQtxeVWBER81sGA8x3V824zKRoxc4QRJ3eqc0URXfWZFeS96gOZg86dDn0sXZzQuAtEVLpSAsP1cPDQrQ11BOeJXvCxn1sXSS6JjhBC8UqDFrqpXP5GoPACS60vqBCY3U2icbfKNC2bFuREzC9n0YkGNZ54`
		}
	}).then((response) => response.json());
