function Home(){
    const [data, setData] = useState({
       "title":"",
       "author": "",
       "category": "",
       "gender": "",
       "edition": "",
       "url_image": "",
       "synopsis": ""
    }

    return (
        <div>
            <Input data={data}, setData={setData}, type={'title'}/>
        </div>
    );
}
function Input({setData, data, type}){

    function handleInputChange(setData, data, type, value) {
            setData({
                ...data,
                [type]: value
            })
    }

    return (<input onchange={(e)=> handleInputChange(setData, data, type, e.target.value)}/>);
}