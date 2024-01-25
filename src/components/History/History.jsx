import styles from "./History.module.scss";
import { useGetPageWithTransactionsQuery } from "../../utils/store/transactionsApi";
import { useSelector } from "react-redux";
const History = () => {
    const userId = useSelector((store) => store.drawer.userId);
    const { data, isLoading, error } = useGetPageWithTransactionsQuery(userId);

    if (isLoading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    
    return (
        <div>
            <h3>История операций</h3>
            <table>
                <thead>
                    <tr>
                        <th>Тип</th>
                        <th>Сумма</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.type == "WRITE_OFF" ? "Списание" : "Пополнение"}</td>
                            <td className={item.type == "WRITE_OFF" ? styles.write__off : styles.replenish}>{item.type == "WRITE_OFF" ? `-${item.amount} BTKN` : `+${item.amount} BTKN`}</td>
                            <td>{`${item.created_at.split("T")[0].split("-").reverse().join(".")}, ${item.created_at.split("T")[1].split(".")[0]}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default History