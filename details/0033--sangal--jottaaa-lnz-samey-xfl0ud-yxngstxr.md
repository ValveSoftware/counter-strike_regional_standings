### Roster Details<br />
Team Name: Sangal<br />
Roster: jottAAA, LNZ, SaMey, xfl0ud, yxngstxr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [33](../standings_global.md)<br />
Regional Rank: [21]( ../standings_europe.md)<br />
Final Rank Value:  1192.3<br />
<br />
Final Rank Value (1192.3) = Starting Rank Value (1112.6) + Head To Head Adjustments (79.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.585[<sup>1</sup>](#table2)
- Bounty Collected: 0.484[<sup>2</sup>](#table1)
- Opponent Network: 0.339[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.352<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1112.6
- 400 + ( ( 0.352 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1112.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |       44 | 2024-07-23 | brazylijski luz   | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.49 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           67 |      145 | 2024-07-20 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -6.09 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           66 |      273 | 2024-07-17 | SAW               | L   | 1.000      | -            | -                | -                | -         |   -16.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           65 |      285 | 2024-07-17 | B8                | W   | 1.000      | 0.500        | 0.206 (0.103)    | 0.933 (0.466)    | 0 (0.000) |    14.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           64 |      382 | 2024-07-15 | RUSH B            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.54 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           63 |      401 | 2024-07-15 | Rebels            | W   | 1.000      | 0.500        | -                | 0.661 (0.330)    | 0 (0.000) |     9.39 | imoRR, jottAAA, SaMey, xfl0ud, yxngstxr |
|           62 |      819 | 2024-06-09 | KOI               | W   | 0.900      | -            | -                | -                | 0 (0.000) |    10.68 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           61 |      883 | 2024-06-08 | SINNERS           | W   | 0.894      | 0.500        | -                | 0.769 (0.344)    | 0 (0.000) |     7.62 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           60 |      948 | 2024-06-07 | Aurora            | W   | 0.887      | 0.500        | 0.423 (0.187)    | 0.783 (0.347)    | 0 (0.000) |    23.29 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           59 |     1006 | 2024-06-06 | 3DMAX             | W   | 0.880      | 0.500        | 0.175 (0.077)    | 1.000 (0.440)    | 0 (0.000) |    16.08 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           58 |     1069 | 2024-06-05 | SAW               | W   | 0.874      | 0.500        | 0.121 (0.053)    | -                | 0 (0.000) |    16.40 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           57 |     1125 | 2024-06-04 | 9 Pandas          | W   | 0.867      | 0.500        | 0.105 (0.046)    | 0.578 (0.251)    | 0 (0.000) |    13.46 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           56 |     1240 | 2024-05-31 | SAW               | L   | 0.840      | -            | -                | -                | -         |    -8.66 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           55 |     1243 | 2024-05-31 | FAVBET            | W   | 0.839      | -            | -                | -                | -         |     4.12 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           54 |     1248 | 2024-05-31 | fnatic            | L   | 0.839      | -            | -                | -                | -         |    -2.96 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           53 |     1273 | 2024-05-30 | MOUZ NXT          | L   | 0.831      | -            | -                | -                | -         |   -14.18 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           52 |     1445 | 2024-05-22 | Zero Tenacity     | W   | 0.780      | 0.500        | 0.173 (0.068)    | 1.000 (0.390)    | -         |    12.28 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           51 |     1492 | 2024-05-21 | Monte             | W   | 0.772      | -            | -                | -                | -         |     9.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           50 |     1527 | 2024-05-20 | PARIVISION        | W   | 0.765      | -            | -                | -                | -         |    10.40 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           49 |     1543 | 2024-05-19 | Ninjas in Pyjamas | W   | 0.761      | 0.500        | 0.287 (0.109)    | -                | -         |    22.61 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           48 |     1549 | 2024-05-19 | Endpoint          | W   | 0.759      | -            | -                | -                | -         |     8.19 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           47 |     1585 | 2024-05-18 | Rare Atom         | W   | 0.752      | -            | -                | -                | -         |     2.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           46 |     1624 | 2024-05-17 | Permitta          | W   | 0.744      | 0.435        | -                | 0.790 (0.256)    | -         |     6.86 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           45 |     1644 | 2024-05-16 | Ninjas in Pyjamas | L   | 0.740      | -            | -                | -                | -         |    -0.98 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           44 |     1706 | 2024-05-15 | Verdant           | L   | 0.732      | -            | -                | -                | -         |   -15.53 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           43 |     1769 | 2024-05-14 | DMS               | L   | 0.724      | -            | -                | -                | -         |   -17.23 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           42 |     2015 | 2024-05-02 | Metizport         | L   | 0.646      | -            | -                | -                | -         |   -13.45 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           41 |     2048 | 2024-05-01 | ALTERNATE aTTaX   | L   | 0.638      | -            | -                | -                | -         |   -13.31 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           40 |     2060 | 2024-04-30 | Zero Tenacity     | W   | 0.633      | 0.500        | 0.173 (0.055)    | 1.000 (0.316)    | -         |     8.79 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           39 |     2090 | 2024-04-29 | SINNERS           | W   | 0.625      | -            | -                | -                | -         |     7.87 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           38 |     2097 | 2024-04-28 | 1WIN              | W   | 0.620      | -            | -                | -                | -         |     6.03 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           37 |     2122 | 2024-04-27 | PARIVISION        | L   | 0.613      | -            | -                | -                | -         |   -11.25 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           36 |     2153 | 2024-04-26 | Nemiga            | W   | 0.605      | 0.435        | 0.415 (0.109)    | -                | -         |    12.71 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           35 |     2226 | 2024-04-23 | Grannys Knockers  | W   | 0.584      | -            | -                | -                | -         |     2.68 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           34 |     2231 | 2024-04-22 | BLEED             | L   | 0.579      | -            | -                | -                | -         |    -8.85 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           33 |     2242 | 2024-04-22 | ex-Guild Eagles   | L   | 0.578      | -            | -                | -                | -         |   -14.12 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           32 |     2257 | 2024-04-21 | Alliance          | W   | 0.571      | -            | -                | -                | -         |     4.06 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           31 |     2273 | 2024-04-20 | brazylijski luz   | W   | 0.567      | -            | -                | -                | -         |     3.67 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           30 |     2292 | 2024-04-20 | JANO              | W   | 0.564      | -            | -                | -                | -         |     1.72 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           29 |     2317 | 2024-04-19 | TSM               | W   | 0.560      | -            | -                | -                | -         |     1.81 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           28 |     2323 | 2024-04-19 | Nemiga            | L   | 0.560      | -            | -                | -                | -         |    -6.34 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           27 |     2421 | 2024-04-17 | 9 Pandas          | W   | 0.545      | -            | -                | -                | -         |     7.04 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           26 |     2444 | 2024-04-16 | Zero Tenacity     | W   | 0.540      | -            | -                | -                | -         |     7.65 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           25 |     2464 | 2024-04-15 | B8                | W   | 0.534      | 0.500        | 0.206 (0.055)    | 0.933 (0.249)    | -         |     7.91 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           24 |     2467 | 2024-04-15 | Aurora Young Blud | W   | 0.533      | -            | -                | -                | -         |     2.80 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           23 |     2509 | 2024-04-12 | Monte             | L   | 0.513      | -            | -                | -                | -         |    -8.77 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           22 |     2763 | 2024-04-04 | EYEBALLERS        | W   | 0.460      | -            | -                | -                | -         |     3.93 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           21 |     2842 | 2024-04-02 | 9 Pandas          | L   | 0.447      | -            | -                | -                | -         |    -7.75 | jottAAA, LNZ, SaMey, xfl0ud, yxngstxr   |
|           20 |     3202 | 2024-03-13 | KOI               | L   | 0.314      | -            | -                | -                | -         |    -4.59 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           19 |     3307 | 2024-03-09 | Zero Tenacity     | L   | 0.286      | -            | -                | -                | -         |    -4.49 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           18 |     3359 | 2024-03-07 | 500               | L   | 0.273      | -            | -                | -                | -         |    -7.62 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           17 |     3381 | 2024-03-06 | TSM               | W   | 0.267      | -            | -                | -                | -         |     0.79 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           16 |     3450 | 2024-03-04 | Sampi             | W   | 0.252      | -            | -                | -                | -         |     1.99 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           15 |     3476 | 2024-03-03 | Rebels            | L   | 0.246      | -            | -                | -                | -         |    -4.66 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           14 |     3502 | 2024-03-02 | HAVU              | W   | 0.238      | -            | -                | -                | -         |     0.81 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           13 |     3523 | 2024-02-29 | Rebels            | L   | 0.227      | -            | -                | -                | -         |    -4.36 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           12 |     3544 | 2024-02-28 | Alliance          | L   | 0.219      | -            | -                | -                | -         |    -5.46 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           11 |     3551 | 2024-02-27 | 9INE              | W   | 0.214      | -            | -                | -                | -         |     0.25 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|           10 |     3597 | 2024-02-25 | Sashi             | W   | 0.201      | -            | -                | -                | -         |     3.63 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            9 |     3771 | 2024-02-18 | 500               | W   | 0.151      | -            | -                | -                | -         |     0.48 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            8 |     3978 | 2024-02-08 | AURA              | L   | 0.086      | -            | -                | -                | -         |    -2.61 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            7 |     3997 | 2024-02-06 | ex-Preasy         | L   | 0.072      | -            | -                | -                | -         |    -1.90 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            6 |     4031 | 2024-02-04 | ALTERNATE aTTaX   | W   | 0.058      | -            | -                | -                | -         |     0.68 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            5 |     4050 | 2024-02-03 | Entropiq          | L   | 0.053      | -            | -                | -                | -         |    -1.59 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            4 |     4060 | 2024-02-03 | Metizport         | L   | 0.051      | -            | -                | -                | -         |    -1.19 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            3 |     4112 | 2024-02-01 | Spirit Academy    | W   | 0.039      | -            | -                | -                | -         |     0.05 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            2 |     4120 | 2024-02-01 | ALTERNATE aTTaX   | W   | 0.038      | -            | -                | -                | -         |     0.45 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |
|            1 |     4173 | 2024-01-28 | Gaimin Gladiators | L   | 0.012      | -            | -                | -                | -         |    -0.23 | Ganginho, LNZ, sausol, xfl0ud, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,847.08)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.900 | $16,500.00     | $14,856.27      |
| 2024-05-22 |      0.780 | $50,000.00     | $38,990.81      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
