import React, {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import LemonDivider from '../components/main/LemonDivider';
import AuthContext from '../context/AuthContext';
const backendURL = process.env.REACT_APP_BACKENDURL;

const Companies = () => {
  const [companies, setCompanies] = useState();
  const [isOpenCompany, setIsOpenCompany] = useState(false);

  const {setBuy} = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    axios.get(`${backendURL}/api/companies`).then((data) => {
      setCompanies(data.data.companies);
    });
  }, []);

  return (
    <Layout>
      <div className="flex flex-row justify-center gap-4 my-12">
        {companies &&
          companies.map((company) => {
            return (
              <div
                key={company._id}
                className="flex flex-col border rounded-xl shadow m-4 w-48 text-center"
              >
                <h2 className="bg-linen p-2 rounded-t-xl">{company.name}</h2>
                <div className="mt-6 mb-2">({company.founded_in})</div>
                <button
                  type="button"
                  className="self-center smallButton p-2 my-4"
                  onClick={() => {
                    setIsOpenCompany(company);
                  }}
                >
                  See details
                </button>
              </div>
            );
          })}
      </div>
      {isOpenCompany && (
        <>
          <LemonDivider className="mx-auto" />
          <div className="text-center mx-2 my-12">
            <h1 className="underline">{isOpenCompany.name}</h1>
            <div>{isOpenCompany.description}</div>
            <div className="mb-10">
              Sustainability Rating: {isOpenCompany.sustainability_rating}
            </div>
            <button
              onClick={() => {
                setBuy(isOpenCompany);
                history.push('/buyshare');
              }}
              className="smallButton p-2"
            >
              Buy Shares
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Companies;
