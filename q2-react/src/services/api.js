export const fetchPeople = async () => {
    try {
        const response = await fetch('https://api.json-generator.com/templates/-xdNcNKYtTFG/data', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer b2atclr0nk1po45amg305meheqf4xrjt9a1bo410'
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return await response.json()
    } catch (e) {
        console.error(e)
        return []
    }
}