require('@babel/register')

const CheckAnswers = require('shinkansen-pinion/components/check-answers')
const ErrorSummary = require('shinkansen-pinion/components/error-summary')
const {
  default: Pinion
} = require('shinkansen-pinion/components/pinion')

module.exports.CheckAnswers = CheckAnswers
module.exports.ErrorSummary = ErrorSummary
module.exports.Pinion = Pinion
