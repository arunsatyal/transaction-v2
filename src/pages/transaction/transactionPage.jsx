import { Container, Card, CardBody } from "react-bootstrap";
import TopNavbar                     from "../../components/topNavbar";
import { useSelector }               from "react-redux";
import TransactionForm               from "../../components/transactionForm";
import TransactionTable              from "../../components/transactionTable";

const TransactionPage = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <TopNavbar userName={user?.name} />

      <>
        <Container>
          <Card className="rounded-4">
            <Card.Body>
              <TransactionForm userId={user?._id} />
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <TransactionTable userId={user?._id} />
        </Container>
      </>
    </div>
  );
};

export default TransactionPage;
