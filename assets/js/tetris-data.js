---
---

// tetris-data.js

var tetrisData = {
    {% for piece in site.data.tetris.pieces %}"tetris-piece-{{ piece.id }}": {
        "link": {% if piece.link %}{% if piece.link.external %}"{{ piece.link.url }}"{% else %}"{{ piece.link.url | absolute_url }}"{% endif %}{% else %}null{% endif %},
        "text": [
            {% for path in piece.text %}"{{ path }}"{% unless forloop.last %},
            {% endunless %}{% endfor %}
        ]
    }{% unless forloop.last %},
    {% endunless %}{% endfor %}
};