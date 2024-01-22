import { useState, useEffect } from 'react';

function CurrencyData(currency) {
    // const [data, setData] = useState({})
    // console.log(currency)
    // useEffect(() => {
    //     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //             console.log(res);
    //             setData(res[`${currency}`]);
    //         })
    //         .catch((error) => {
    //             console.error('Fetch error:', error);
    //         });
    // }, [currency])
    // console.log(data);
    // return data

    const [data, setData] = useState({});

    useEffect(() => {
        const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
        // const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"

        // const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"

        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))  // issue is line ki thi
            .catch((error) => {
                console.error('Fetch error:', error);
            });

        // fetchData();
    }, [currency]);
    console.log(data)
    return data;
}

export default CurrencyData;



// // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

// import axios from 'axios'
// import { useEffect, useState } from 'react';


// async function CurrencyData(currency) {
//     const [currenciesData, setData] = useState({});
//     useEffect(async () => {
//         const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
//         // axios.get(url)
//         // // fetch(url)
//         //     .then(response => {
//         //         setData(response.data[`${currency}`])
//         //     })
//         //     .catch(error => {
//         //         console.error('Error fetching data:', error);
//         //     });

//         // return data
//         // const arrayFromEntries = Object.entries(data);
//         // console.log(arrayFromEntries);
//         // return arrayFromEntries

//         try {
//             // async fetch(url)
//             const response = await fetch(url)
//             // (response => {
//             // Check if the response status is OK (status code 200-299)
//             // if (!response.ok) {
//             //     throw new Error(`HTTP error! Status: ${response.status}`);
//             // }
//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             // Parse the response JSON
//             const data = await response.json();

//             // Set the data in the state
//             setData(data[`${currency}`]);
//         } catch (error) {
//             // Handle errors, e.g., network issues or server errors
//             console.error('Fetch error:', error);
//         }
//         // Parse the response JSON
//         //     // return response.json();
//         //     console.log(response)
//         //     // setData(response.data[`${currency}`])
//         //     const data = await response.json();

//         //     // Set the data in the state
//         //     setData(data[`${currency}`]);
//         // })
//         // .then(data => {
//         //     // Handle the data received from the server
//         //     console.log('Response data:', data);
//         // })
//         // .catch(error => {
//         //     // Handle errors, e.g., network issues or server errors
//         //     console.error('Fetch error:', error);
//         // });

//         fetchData();
//     }, [currency]);
// }
// return currenciesData

// // }

// export default CurrencyData