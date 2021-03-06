# build-dependencies: observable, property, eventstream, helpers
# build-dependencies: functionconstruction

Bacon.Observable :: filter = (f, args...) ->
  assertObservableIsProperty(f)
  convertArgsToFunction this, f, args, (f) ->
    withDescription(this, "filter", f, @withHandler (event) ->
      if event.filter(f)
        @push event
      else
        Bacon.more)


