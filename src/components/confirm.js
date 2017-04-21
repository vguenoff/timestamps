import Confirmation from './Confirmation';
import { createConfirmation } from 'react-confirm';

const defaultConfirmation = createConfirmation(Confirmation);

export default function confirm(confirmation, options = {}) {
  return defaultConfirmation({ confirmation, ...options });
}
