import { useEffect, useState } from "react";

export const useFetchTableData = () => {
    const [tableData, setTableData] = useState<string | any>("");

    useEffect(() => {
        const fetchData = async () => {
            await fetch("http://localhost:8000/users")
                .then((res) => res.json())
                .then((data) => {
                    setTableData(data);
                })
                .then((error) => {
                    //
                });
        };
        fetchData();
    }, [tableData]);

    return { tableData };
};
export const useFetchOneEntry = (id: string | number | any) => {
    const [singleEntry, setSingleEntry] = useState<string | null | any>("");

    useEffect(() => {
        const fetchData = async () => {
            await fetch("http://localhost:8000/users/" + id)
                .then((res) => res.json())
                .then((data) => {
                    setSingleEntry(data);
                })
                .then((error) => {
                    //
                });
        };
        fetchData();
    }, [singleEntry, id]);

    return { singleEntry };
};