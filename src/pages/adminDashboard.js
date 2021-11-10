import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Stack, InputGroup, FormControl } from "react-bootstrap";
import { updatestock } from "../store/updatestock";
import { fetchProduct } from "../store/fetch";
import { HeaderAdmin } from "../components/index";
import { Redirect } from "react-router-dom";

const AdminDashboard = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_LOAD",
      payload: true,
    });
    if (JSON.parse(localStorage.getItem("login-admin"))) {
      dispatch(fetchProduct(fetchCart));
    }
  }, []);

  const updateStock = (type, item) => {
    dispatch(updatestock(type, state.stock, item, filter, 0));
  };

  const filter = (productId) => {
    let product = state.stock.findIndex((item) => item.id == productId);
    return product;
  };

  const fetchCart = () => {
    dispatch({
      type: "SET_LOAD",
      payload: false,
    });
  };

  return (
    JSON.parse(localStorage.getItem("login-admin")) ?
      <>
        <HeaderAdmin />
        {
          !state.loading ? (
            <div className="d-flex justify-content-center p-5">
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Stocks</th>
                  </tr>
                </thead>
                <tbody>
                  {state.stock.map((item) => (
                    <tr>
                      <td className="col-lg-1">
                        <img src={`${item.image}`} alt="" width="100" />
                      </td>
                      <td className="col-lg-9">
                        <Stack>
                          <p className="fw-bold">{item.title}</p>
                          <p>{item.description}</p>
                        </Stack>
                      </td>
                      <td className="col-lg-2">
                        <Stack
                          className="flex-grow-0 align-items-center"
                          direction="horizontal"
                        >
                          <InputGroup className="w-50" size="sm">
                            <InputGroup.Text
                              role="button"
                              onClick={() => updateStock("decrement", item)}
                            >
                              -
                            </InputGroup.Text>
                            <FormControl
                              aria-label="Amount (to the nearest dollar)"
                              value={item.stock}
                              readOnly
                              className="text-center bg-light shadow-none border-0"
                            />
                            <InputGroup.Text
                              role="button"
                              onClick={() => updateStock("increment", item)}
                            >
                              +
                            </InputGroup.Text>
                          </InputGroup>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) :
            ''
        }
      </>
      :
      <Redirect to={`/loginadmin`} />
  );
};

export default AdminDashboard;
