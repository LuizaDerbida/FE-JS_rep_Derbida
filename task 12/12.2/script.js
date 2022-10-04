Якщо elem – довільний вузол DOM-елемента. 
• Правда, що elem.lastChild.nextSibling завжди дорівнює null ? Так. Elem.lastChild завжди є останньою, вона не має nextSibling.
• Правда, що elem.children[0].previousSibling завжди дорівнює null? Ні. Тому що elem.children[0] є елементом-нащадком. Але перед цим можуть бути й інші вузли. 