async function getOnlineUsers() {
    try {
        const res = await fetch('https://relay-race-backend-1.onrender.com/admin/users', {
            headers: { 'x-admin-token': 'admin123' }
        });
        const users = await res.json();
        console.log("Online Users:");
        users.forEach(u => console.log(`- ID: ${u._id}, Name: ${u.name}, Email: ${u.email}`));
    } catch (err) {
        console.error(err);
    }
}
getOnlineUsers();
