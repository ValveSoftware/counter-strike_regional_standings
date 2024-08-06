### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, Spinx, ZywOo<br />
Global Rank: [5](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [5]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1852.7<br />
<br />
Final Rank Value (1852.7) = Starting Rank Value (1851.2) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.841[<sup>1</sup>](#table2)
- Bounty Collected: 0.698[<sup>2</sup>](#table1)
- Opponent Network: 0.283[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.705<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1851.2
- 400 + ( ( 0.705 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1851.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       98 | 2024-08-03 | Astralis     | W   | 1.000      | 0.581        | 0.389 (0.226)    | 0.403 (0.234)    | 1 (1.000) |     9.50 | apEX, flameZ, mezii, Spinx, ZywOo |
|           30 |      264 | 2024-07-30 | Astralis     | W   | 1.000      | 0.581        | 0.389 (0.226)    | 0.403 (0.234)    | 1 (1.000) |    10.02 | apEX, flameZ, mezii, Spinx, ZywOo |
|           29 |      297 | 2024-07-29 | GamerLegion  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|           28 |      622 | 2024-07-19 | Virtus.pro   | L   | 1.000      | -            | -                | -                | -         |   -22.20 | apEX, flameZ, mezii, Spinx, ZywOo |
|           27 |      739 | 2024-07-17 | M80          | W   | 1.000      | 1.000        | -                | 0.562 (0.562)    | 1 (1.000) |     1.00 | apEX, flameZ, mezii, Spinx, ZywOo |
|           26 |     1090 | 2024-06-15 | Spirit       | L   | 0.853      | -            | -                | -                | -         |   -11.44 | apEX, flameZ, mezii, Spinx, ZywOo |
|           25 |     1129 | 2024-06-14 | FaZe         | W   | 0.847      | 0.729        | 0.625 (0.385)    | 0.382 (0.236)    | 1 (0.847) |     8.27 | apEX, flameZ, mezii, Spinx, ZywOo |
|           24 |     1164 | 2024-06-13 | G2           | W   | 0.840      | 0.729        | 1.000 (0.613)    | 0.478 (0.293)    | 1 (0.840) |    16.89 | apEX, flameZ, mezii, Spinx, ZywOo |
|           23 |     1191 | 2024-06-12 | Virtus.pro   | L   | 0.834      | -            | -                | -                | -         |   -19.91 | apEX, flameZ, mezii, Spinx, ZywOo |
|           22 |     1617 | 2024-06-02 | G2           | L   | 0.768      | -            | -                | -                | -         |    -9.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|           21 |     1649 | 2024-06-01 | Spirit       | W   | 0.760      | 0.624        | 1.000 (0.475)    | -                | 1 (0.760) |    13.69 | apEX, flameZ, mezii, Spinx, ZywOo |
|           20 |     1684 | 2024-05-31 | HEROIC       | W   | 0.754      | -            | -                | -                | 1 (0.754) |     4.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|           19 |     1731 | 2024-05-29 | 9z           | L   | 0.741      | -            | -                | -                | -         |   -21.11 | apEX, flameZ, mezii, Spinx, ZywOo |
|           18 |     1775 | 2024-05-27 | G2           | W   | 0.728      | 0.624        | 1.000 (0.455)    | 0.478 (0.217)    | 1 (0.728) |    13.70 | apEX, flameZ, mezii, Spinx, ZywOo |
|           17 |     1785 | 2024-05-27 | Monte        | W   | 0.727      | 0.624        | -                | 0.598 (0.271)    | 1 (0.727) |     0.22 | apEX, flameZ, mezii, Spinx, ZywOo |
|           16 |     2255 | 2024-05-12 | MOUZ         | L   | 0.627      | -            | -                | -                | -         |    -9.62 | apEX, flameZ, mezii, Spinx, ZywOo |
|           15 |     2286 | 2024-05-11 | Astralis     | W   | 0.620      | 0.889        | 0.389 (0.214)    | 0.403 (0.222)    | -         |     6.71 | apEX, flameZ, mezii, Spinx, ZywOo |
|           14 |     2304 | 2024-05-10 | FaZe         | W   | 0.614      | 0.889        | 0.625 (0.341)    | -                | -         |     6.42 | apEX, flameZ, mezii, Spinx, ZywOo |
|           13 |     2556 | 2024-04-28 | The MongolZ  | W   | 0.532      | 0.889        | 1.000 (0.473)    | 0.694 (0.328)    | -         |     9.94 | apEX, flameZ, mezii, Spinx, ZywOo |
|           12 |     2629 | 2024-04-25 | BetBoom      | W   | 0.513      | 0.889        | -                | 0.513 (0.234)    | -         |     1.21 | apEX, flameZ, mezii, Spinx, ZywOo |
|           11 |     2666 | 2024-04-23 | Sharks       | W   | 0.500      | -            | -                | -                | -         |     0.04 | apEX, flameZ, mezii, Spinx, ZywOo |
|           10 |     3329 | 2024-03-30 | FaZe         | L   | 0.340      | -            | -                | -                | -         |    -7.65 | apEX, flameZ, mezii, Spinx, ZywOo |
|            9 |     3356 | 2024-03-28 | Cloud9       | W   | 0.327      | -            | -                | -                | -         |     0.12 | apEX, flameZ, mezii, Spinx, ZywOo |
|            8 |     3443 | 2024-03-23 | Complexity   | W   | 0.294      | -            | -                | -                | -         |     2.26 | apEX, flameZ, mezii, Spinx, ZywOo |
|            7 |     3460 | 2024-03-22 | Imperial     | W   | 0.285      | -            | -                | -                | -         |     0.33 | apEX, flameZ, mezii, Spinx, ZywOo |
|            6 |     3479 | 2024-03-21 | The MongolZ  | W   | 0.280      | 1.000        | 1.000 (0.280)    | -                | -         |     5.47 | apEX, flameZ, mezii, Spinx, ZywOo |
|            5 |     3486 | 2024-03-21 | Eternal Fire | L   | 0.279      | -            | -                | -                | -         |    -6.14 | apEX, flameZ, mezii, Spinx, ZywOo |
|            4 |     4141 | 2024-02-21 | ENCE         | W   | 0.086      | -            | -                | -                | -         |     0.30 | apEX, flameZ, mezii, Spinx, ZywOo |
|            3 |     4171 | 2024-02-20 | Cloud9       | L   | 0.079      | -            | -                | -                | -         |    -2.48 | apEX, flameZ, mezii, Spinx, ZywOo |
|            2 |     4188 | 2024-02-19 | HEROIC       | W   | 0.074      | -            | -                | -                | -         |     0.38 | apEX, flameZ, mezii, Spinx, ZywOo |
|            1 |     4204 | 2024-02-19 | GamerLegion  | W   | 0.071      | -            | -                | -                | -         |     0.01 | apEX, flameZ, mezii, Spinx, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($207,055.64)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $22,500.00     | $22,500.00      |
| 2024-07-21 |      1.000 | $40,000.00     | $40,000.00      |
| 2024-06-16 |      0.860 | $40,000.00     | $34,398.07      |
| 2024-06-02 |      0.768 | $42,000.00     | $32,244.04      |
| 2024-05-12 |      0.627 | $80,000.00     | $50,125.44      |
| 2024-03-31 |      0.347 | $80,000.00     | $27,788.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
