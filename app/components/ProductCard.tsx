import AddToCard from "./AddToCard";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <p className="text-base font-semibold text-gray-600">
        Pay once, own it forever
      </p>
      <p className="mt-6 flex items-baseline justify-center gap-x-2">
        <span className="text-5xl font-bold tracking-tight text-gray-900">
          $349
        </span>
        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
          USD
        </span>
      </p>
      <AddToCard />
      <p className="mt-6 text-xs leading-5 text-gray-600">
        Invoices and receipts available for easy company reimbursement
      </p>
    </div>
  );
};

export default ProductCard;
