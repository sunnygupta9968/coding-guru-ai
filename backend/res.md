❌ Bad Code:
```javascript
function sum(){ return a+b;}
```

🔍 Issues:
* ❌ `a` and `b` are not defined or passed as arguments to the function, leading to potential errors or unexpected
behavior.
* ❌ The function lacks clarity and reusability as it depends on global variables (if `a` and `b` are defined elsewhere)
instead of accepting inputs.

✅ Recommended Fix:

```javascript
function sum(a, b) {
return a + b;
}
```

💡 Improvements:

* ✔ The function now accepts `a` and `b` as parameters, making it more explicit and reusable.
* ✔ It avoids reliance on external variables, ensuring predictable behavior.
* ✔ Adding input validation (e.g., checking if `a` and `b` are numbers) could further improve robustness.