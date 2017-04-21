# Contributing Guidelines
##### Some basic conventions for contributing to this project.
### Linting
##### Please check your code using ```` npm run lint ```` before submitting your pull requests, as the CI build will fail if eslint fails.

### Commit Message Format
##### Each  commit message should include a type, a scope and a subject:
###### ```` <type>(<scope>): <subject> ````

##### Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:
###### ````  #459  refactor(utils): create url mapper utility function ````
###### ```` #463  chore(webpack): update to isomorphic tools v2 ````
###### ```` #494  fix(babel): correct dependencies and polyfills ````
###### ```` #510  feat(app): add react-bootstrap responsive navbar ````
#### Subject
##### The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize first letter
* No dot (.) at the end
