import type {
  PinionType,
  ParamsType,
  PinionProps
} from 'shinkansen-pinion/pinion'
import type { GearsProps } from 'shinkansen-gears/gears'
import type { CheckboxProps } from 'shinkansen-cogs/cogs/checkbox'
import type { EmailProps } from 'shinkansen-cogs/cogs/email'
import type { NumberProps } from 'shinkansen-cogs/cogs/number'
import type { PasswordProps } from 'shinkansen-cogs/cogs/password'
import type { RadioProps } from 'shinkansen-cogs/cogs/radio'
import type { SelectProps } from 'shinkansen-cogs/cogs/select'
import type { TextProps } from 'shinkansen-cogs/cogs/text'
import type { TextareaProps } from 'shinkansen-cogs/cogs/textarea'
import type { CheckAnswersProps } from 'shinkansen-sprockets/sprockets/check-answers'
import type { ErrorSummaryProps } from 'shinkansen-sprockets/sprockets/error-summary'
import type { FieldsetProps } from 'shinkansen-sprockets/sprockets/fieldset'

declare global {
  namespace EngineTypes {
    export type EngineProps = PinionProps & { gears: GearsProps }

    export namespace Components {
      export namespace Pinion {
        export type {
          PinionType,
          ParamsType,
          PinionProps
        }
      }

      export namespace Gears {
        export type {
          GearsProps
        }
      }

      export namespace Cogs {
        export namespace Cog {
          export namespace Checkbox {
            export type {
              CheckboxProps
            }
          }

          export namespace Email {
            export type {
              EmailProps
            }
          }

          export namespace Number {
            export type {
              NumberProps
            }
          }

          export namespace Password {
            export type {
              PasswordProps
            }
          }

          export namespace Radio {
            export type {
              RadioProps
            }
          }

          export namespace Select {
            export type {
              SelectProps
            }
          }

          export namespace Text {
            export type {
              TextProps
            }
          }

          export namespace Textarea {
            export type {
              TextareaProps
            }
          }
        }
      }

      export namespace Sprockets {
        export namespace Sprocket {
          export namespace CheckAnswers {
            export type {
              CheckAnswersProps
            }
          }

          export namespace ErrorSummary {
            export type {
              ErrorSummaryProps
            }
          }

          export namespace Fieldset {
            export type {
              FieldsetProps
            }
          }
        }
      }
    }
  }
}
