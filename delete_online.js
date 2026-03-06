async function deleteTestUsers() {
    const ids = [
        '69a9ebffb921b982b7e624cb',
        '69a9ea6fb921b982b7e624c5',
        '69a9e93d6b2116010d3d90b5',
        '69a9e55d6b2116010d3d90b1',
        '69a9e33a6b2116010d3d90ae',
        '69a9d8766b2116010d3d90a8',
        '69a9cb69c941bd97828773e7',
        '69a9c22bcfced436b5c8baaf'
    ];
    let attempts = 0;
    while (attempts < 20) {
        attempts++;
        try {
            console.log(`Attempt ${attempts}: Trying to delete test user...`);
            const res = await fetch(`https://relay-race-backend-1.onrender.com/admin/users/${ids[0]}`, {
                method: 'DELETE',
                headers: { 'x-admin-token': 'admin123' }
            });
            if (res.ok) {
                console.log("Delete API works! Deleting remaining test users...");
                for (const id of ids) {
                    await fetch(`https://relay-race-backend-1.onrender.com/admin/users/${id}`, {
                        method: 'DELETE',
                        headers: { 'x-admin-token': 'admin123' }
                    });
                    console.log(`Deleted user ${id}`);
                }
                process.exit(0);
            } else {
                console.log("API not ready or user already deleted. Status:", res.status);
            }
        } catch (e) {
            console.error(e.message);
        }
        await new Promise(r => setTimeout(r, 10000)); // wait 10 seconds before polling
    }
}
deleteTestUsers();
