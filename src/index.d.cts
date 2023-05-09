declare module 'shinkansen-engine/components/cogs' {
  export * as Cogs from 'shinkansen-cogs'
}

declare module 'shinkansen-engine/components/sprockets' {
  export * as Sprockets from 'shinkansen-sprockets'
}

declare module 'shinkansen-engine/components/gears' {
  export { Gears } from 'shinkansen-gears'
}

declare module 'shinkansen-engine/components/pinion' {
  export { Pinion } from 'shinkansen-pinion'
}

declare module 'shinkansen-engine/components/rails' {
  export { Rails } from 'shinkansen-rails'
}

declare module 'shinkansen-engine/components/signals' {
  export { Signals } from 'shinkansen-signals'
}

declare module 'shinkansen-engine/components/pantograph' {
  export { Pantograph } from 'shinkansen-pantograph'
}

declare module 'shinkansen-engine' {
  export { Cogs } from 'shinkansen-engine/components/cogs'
  export { Sprockets } from 'shinkansen-engine/components/sprockets'
  export { Gears } from 'shinkansen-engine/components/gears'
  export { Pinion } from 'shinkansen-engine/components/pinion'
  export { Rails } from 'shinkansen-engine/components/rails'
  export { Signals } from 'shinkansen-engine/components/signals'
  export { Pantograph } from 'shinkansen-engine/components/pantograph'
}
