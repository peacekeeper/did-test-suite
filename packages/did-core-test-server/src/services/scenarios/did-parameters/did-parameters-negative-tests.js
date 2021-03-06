const {
  isAsciiString,
  decodeBase64UrlToString,
  generateScenarioResults,
} = require('../../utils');

const assertions = {
  '[hl] The associated value MUST be an ASCII string.': (scenario) => {
    const value = decodeBase64UrlToString(
      scenario.input['hl_base64url_encoded_non_ascii_string']
    );
    return isAsciiString(value) === false;
  },
  '[service] The associated value MUST be an ASCII string.': (scenario) => {
    const value = decodeBase64UrlToString(
      scenario.input['service_base64url_encoded_non_ascii_string']
    );
    return isAsciiString(value) === false;
  },
  '[version-id] The associated value MUST be an ASCII string.': (scenario) => {
    const value = decodeBase64UrlToString(
      scenario.input['version_id_base64url_encoded_non_ascii_string']
    );
    return isAsciiString(value) === false;
  },
  '[version-time] The associated value MUST be an ASCII string.': (
    scenario
  ) => {
    const value = decodeBase64UrlToString(
      scenario.input['version_time_base64url_encoded_non_ascii_string']
    );
    return isAsciiString(value) === false;
  },
  '[relative-ref] The associated value MUST be an ASCII string and MUST use percent-encoding for certain characters as specified in RFC3986 Section 2.1.': (
    scenario
  ) => {
    const value = decodeBase64UrlToString(
      scenario.input['relative_ref_base64url_encoded_non_ascii_string']
    );
    return isAsciiString(value) === false;
  },
};

module.exports = generateScenarioResults(assertions);
