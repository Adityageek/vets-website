import fullSchemaHca from 'vets-json-schema/dist/10-10EZ-schema.json';
import { MedicaidDescription } from '../../../components/FormDescriptions';
import { ShortFormAlert } from '../../../components/FormAlerts';
import { NotHighDisabilityOrNotCompensationTypeHigh } from '../../../utils/helpers';
import { emptyObjectSchema } from '../../../definitions';

const { isMedicaidEligible } = fullSchemaHca.properties;

export default {
  uiSchema: {
    'view:medicaidShortFormMessage': {
      'ui:description': ShortFormAlert,
      'ui:options': {
        hideIf: NotHighDisabilityOrNotCompensationTypeHigh,
      },
    },
    'view:medicaidDescription': {
      'ui:description': MedicaidDescription,
    },
    isMedicaidEligible: {
      'ui:title': 'Are you eligible for Medicaid?',
      'ui:widget': 'yesNo',
    },
  },
  schema: {
    type: 'object',
    required: ['isMedicaidEligible'],
    properties: {
      'view:shortFormAlert': emptyObjectSchema,
      'view:medicaidShortFormMessage': emptyObjectSchema,
      'view:medicaidDescription': emptyObjectSchema,
      isMedicaidEligible,
    },
  },
};
