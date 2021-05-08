import { catchErrors } from 'errors';
import { signToken } from 'utils/authToken';

export const createGuestAccount = catchErrors(async (_req, res) => {
  //const user = await createAccount();
  res.respond({
 //   authToken: signToken({ sub: user.id }),
 authToken: signToken({ sub: 1 }),
  });
});
export const checkUserLogin = catchErrors(async (_req, res) => {  
  
  res.respond({
    authToken: signToken({ sub: 1 })
  });
});
