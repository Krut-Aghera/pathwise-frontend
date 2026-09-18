const formatINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(amount / 100)
}

export default formatINR
