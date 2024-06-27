import React from 'react';
import { TmpUserModel } from '../Models';

type TmpUserContextType = {
    setCurrentTmpUser: (user: TmpUserModel) => void;
    getCurrentTmpUser: () => TmpUserModel;
};

export const TmpUserContext = React.createContext<TmpUserContextType>({
    setCurrentTmpUser: () => {},
    getCurrentTmpUser: () => ({} as TmpUserModel),
});
