import { Action } from './action';
import { debug, setFailed } from '@actions/core';
import PrettyError from 'pretty-error';

const pe = new PrettyError();

(async () => {
  try {
    const action = new Action();
    await action.run();
  } catch (e) {
    if (e instanceof Error) {
      debug(pe.render(e));
      setFailed(e.message);
      return;
    }
    throw e;
  }
  process.exit(0);
})();
