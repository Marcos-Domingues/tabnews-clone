function status(request, response) {
    response.status(200).json({key: "we are above the average"})
}

export default status;