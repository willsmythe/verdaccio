workflow "New workflow" {
  on = "push"
  resolves = [
    "Install",
    "Test Publish Verdaccio"
  ]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install --frozen-lockfile --non-interactive"
}

action "Audit" {
  uses = "nuxt/actions-yarn@master"
  args = "audit"
}

action "Test" {
  needs = "Build"
  uses = "borales/actions-yarn@master"
  args = "test:all"
  needs = ["Install"]
}

action "Test Publish Verdaccio" {
  uses = "verdaccio/github-actions/publish@v0.1.0"
  needs = ["Install", "Test"]
  args = "-ddd"
}
