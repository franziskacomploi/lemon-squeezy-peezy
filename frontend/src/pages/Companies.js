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
                className="flex flex-col border rounded-xl m-4 w-48"
              >
                <h2 className="bg-linen p-2 rounded-t-xl">{company.name}</h2>
                <div className="px-2">({company.founded_in})</div>
                <button
                  type="button"
                  className="self-center brandButton p-2 mt-4 mb-2"
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
          <div className="mx-auto mx-2 my-12">
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
              className="brandButton p-2"
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
