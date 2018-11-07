declare var Polyglot: any;

export class MetamindModule {

  constructor(moduleName: string) {
    Polyglot.export(moduleName, this);
  }

  getStoryVariable(name: string) {
    const variableState = Polyglot.import("storyVariablesState");
    return variableState.get(name);
  }

  setStoryVariable(name: string, value: any) {
    const variableState = Polyglot.import("storyVariablesState");
    variableState.set(name, value);
  }

}