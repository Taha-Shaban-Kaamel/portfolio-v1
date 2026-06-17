import axios from 'axios';
const Test = () => {

    const handleClick =  () => {

        // axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;
// await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
        // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.post('http://admin.resaletfarah.com/api/auth/login', {
            email: 'superAdmin@gmail.com',
            password: '123456789'
        },{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }
    return (
        <div>
            <h1>test</h1>       
            <button onClick={handleClick}>sen request</button>
        </div>
    )
}

export default Test
