import { createContext, ReactNode, useState } from "react";
import { IRegister } from "../components/Register";
import api from "../services/api";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  values: IRegister;
  setValues: (values: IRegister) => void;
  calculate: (data: IRegister) => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [values, setValues] = useState<IRegister>({} as IRegister);

  const calculate = async (data: IRegister) => {
    try {
      await api.post<IRegister>("", data).then((res) => {
        setValues({ ...values, ...res.data });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        setValues,
        values,
        calculate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
