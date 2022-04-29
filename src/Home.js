import React, { useEffect, useState } from 'react'

export default function Home() {


    const [category, setCategory] = useState([]);
    useEffect(() => {
        // console.log('hello')
        const getCategory = async () => {
            const res = await fetch('https://reqres.in/api/users?page=1');
            const getData = await res.json();
            setCategory(getData);
            // console.log(getData);
        };
        getCategory();
    }, []);

    return (
        <React.Fragment>
        <div id="table">
            <table>
                <thead id="tbody">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       category.map((getcate)=>(
                            <tr>
                                <td>{getcate.id}</td>
                            </tr>
                       )
                       )

                    }
                </tbody>
            </table>

        </div>
        </React.Fragment>
    )
}
