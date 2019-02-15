workflow "New workflow" {
  on = "push"
  resolves = [
    "Install",
    "Test Publish Verdaccio",
  ]
}

action "Install" {
  uses = "verdaccio/github-actions/yarn@master"
  args = "install --frozen-lockfile --non-interactive"
}

action "Lint" {
  uses = "verdaccio/github-actions/yarn@master"
  args = "lint"
    needs = ["Install"]
}

action "Audit" {
  uses = "verdaccio/github-actions/yarn@master"
  args = "audit"
}

action "Test" {
  needs = "Build"
  uses = "verdaccio/github-actions/yarn@master"
  args = "test:unit"
  needs = ["Install", "Lint"]
}

action "Test Publish Verdaccio" {
  uses = "verdaccio/github-actions/publish@v0.1.0"
  needs = ["Install", "Test"]
  args = "-ddd"
}
