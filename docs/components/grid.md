---
title: Grid
---

# 网格

<ClientOnly><grid-demo-1/></ClientOnly>

```
*{box-sizing: border-box;}
<d-row>
    <d-col span='8'><div class="colDiv">8</div></d-col>
    <d-col span='8'><div class="colDiv">8</div></d-col>
    <d-col span='8'><div class="colDiv">8</div></d-col>
</d-row>
<d-row>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
</d-row>
<d-row>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
</d-row>
<d-row>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
    <d-col span='2'><div class="colDiv">2</div></d-col>
</d-row>
```

<ClientOnly><grid-demo-2/></ClientOnly>

```
*{box-sizing: border-box;}
<d-row gutter="20">
    <d-col span='8'><div class="colDiv">8</div></d-col>
    <d-col span='8'><div class="colDiv">8</div></d-col>
    <d-col span='8'><div class="colDiv">8</div></d-col>
</d-row>
<d-row gutter="10">
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
</d-row>
```

<ClientOnly><grid-demo-3/></ClientOnly>

```
*{box-sizing: border-box;}
<d-row>
    <d-col span='8'><div class="colDiv">8</div></d-col>
    <d-col span='6' offset='10'><div class="colDiv">6</div></d-col>
</d-row>
<d-row gutter="10">
    <d-col span='6' offset='4'><div class="colDiv">6</div></d-col>
    <d-col span='6'><div class="colDiv">6</div></d-col>
    <d-col span='4' offset='4'><div class="colDiv">4</div></d-col>
</d-row>
```

<ClientOnly><grid-demo-4/></ClientOnly>

```
*{box-sizing: border-box;}
<d-row gutter="20" justify='center'>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
    <d-col span='4'><div class="colDiv">4</div></d-col>
</d-row>
<d-row justify='right'>
    <d-col span='5'><div class="colDiv">5</div></d-col>
    <d-col span='10'><div class="colDiv">10</div></d-col>
</d-row>
```

<ClientOnly><grid-demo-5/></ClientOnly>

```
*{box-sizing: border-box;}
<d-row>
    <d-col class='colDiv' span='24' :ipad="{span:'12'}" :pc="{span:8}">aaa</d-col>
    <d-col class='colDiv' span='24' :ipad="{span:'12'}" :pc="{span:8,offset:8}">bbb</d-col>
</d-row>
```