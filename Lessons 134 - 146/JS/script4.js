// Explain the following RegExp Pattern part by part
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// `https?:` matches `http:` or `https:`

// In `\/\/`, each `\/` matches a slash `/` 

// The non-capturing group `(?:)` groups multiple tokens together without creating a capture group.
    // The character set `[]` will match any character in the set
        // `-\w` matches a dash, followed by a word character
    // The quantifier `+` matches one or more of the previous character set
// The quantifier `?` will match zero or one of the previous non-capturing group

// The capturing group `()` groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
    // `[]` This is another character set
        // `-\w` matches a dash, followed by a word character
    // The quantifier `+` matches one or more of the previous character set

// `\.` matches a dot

// `\w+` matches one or more word character(s)

// `(?:)` This is another non-capturing group
    // `\.` matches a dot
    // `\w+` matches one or more word character(s)
// The quantifier `?` will match zero or one of the previous non-capturing group

// `\/?` matches zero or one slash

// `.*` matches zero or more dots

// The Flag `i` indicates case-insensitivity