### Roster Details<br />
Team Name: FURIA<br />
Roster: chelo, FalleN, KSCERATO, kye, yuurih<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [17](../standings_global.md)<br />
Regional Rank: [4]( ../standings_americas.md)<br />
Final Rank Value:  1551.1<br />
<br />
Final Rank Value (1551.1) = Starting Rank Value (1651.8) + Head To Head Adjustments (-100.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.626[<sup>1</sup>](#table2)
- Bounty Collected: 0.573[<sup>2</sup>](#table1)
- Opponent Network: 0.314[<sup>2</sup>](#table1)
- LAN Wins: 0.818[<sup>2</sup>](#table1)

The average of these factors is 0.583<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1651.8
- 400 + ( ( 0.583 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1651.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      607 | 2024-06-08 | Ninjas in Pyjamas  | L   | 0.941      | -            | -                | -                | -         |    -9.26 | chelo, FalleN, KSCERATO, kye, yuurih |
|           41 |      730 | 2024-06-06 | Complexity         | W   | 0.927      | 0.715        | 0.445 (0.295)    | 0.412 (0.273)    | 1 (0.927) |    22.21 | chelo, FalleN, KSCERATO, kye, yuurih |
|           40 |      742 | 2024-06-06 | fnatic             | W   | 0.926      | 0.715        | 0.300 (0.199)    | 0.632 (0.419)    | 1 (0.926) |    12.69 | chelo, FalleN, KSCERATO, kye, yuurih |
|           39 |      762 | 2024-06-06 | Eternal Fire       | W   | 0.924      | 0.715        | 1.000 (0.661)    | 0.401 (0.265)    | 1 (0.924) |    21.14 | chelo, FalleN, KSCERATO, kye, yuurih |
|           38 |      795 | 2024-06-05 | BetBoom            | W   | 0.920      | 0.715        | 0.403 (0.265)    | 0.704 (0.463)    | 1 (0.920) |    14.37 | chelo, FalleN, KSCERATO, kye, yuurih |
|           37 |      809 | 2024-06-05 | BIG                | L   | 0.919      | -            | -                | -                | -         |   -18.04 | chelo, FalleN, KSCERATO, kye, yuurih |
|           36 |      888 | 2024-06-02 | GUN5               | L   | 0.900      | -            | -                | -                | -         |   -26.61 | chelo, FalleN, KSCERATO, kye, yuurih |
|           35 |      893 | 2024-06-02 | MOUZ NXT           | W   | 0.899      | 0.435        | 0.150 (0.059)    | 1.000 (0.391)    | -         |     2.90 | chelo, FalleN, KSCERATO, kye, yuurih |
|           34 |      931 | 2024-06-01 | Zero Tenacity      | W   | 0.892      | 0.435        | 0.154 (0.060)    | 1.000 (0.387)    | -         |     2.73 | chelo, FalleN, KSCERATO, kye, yuurih |
|           33 |      982 | 2024-05-30 | RUBY               | W   | 0.879      | 0.435        | 0.144 (0.055)    | 0.580 (0.222)    | -         |     1.40 | chelo, FalleN, KSCERATO, kye, yuurih |
|           32 |     1086 | 2024-05-25 | 1WIN               | L   | 0.846      | -            | -                | -                | -         |   -24.92 | chelo, FalleN, KSCERATO, kye, yuurih |
|           31 |     1102 | 2024-05-24 | Passion UA         | W   | 0.840      | 0.435        | 0.087 (0.032)    | 0.847 (0.309)    | -         |     1.33 | chelo, FalleN, KSCERATO, kye, yuurih |
|           30 |     1665 | 2024-05-05 | Monte              | L   | 0.714      | -            | -                | -                | -         |   -20.60 | chelo, FalleN, KSCERATO, kye, yuurih |
|           29 |     1684 | 2024-05-04 | ENCE               | W   | 0.707      | 0.889        | 0.212 (0.133)    | 0.377 (0.237)    | 1 (0.707) |     5.62 | chelo, FalleN, KSCERATO, kye, yuurih |
|           28 |     1701 | 2024-05-03 | Bad News Kangaroos | W   | 0.700      | -            | -                | -                | 1 (0.700) |     0.41 | chelo, FalleN, KSCERATO, kye, yuurih |
|           27 |     1744 | 2024-05-01 | FORZE              | L   | 0.687      | -            | -                | -                | -         |   -20.68 | chelo, FalleN, KSCERATO, kye, yuurih |
|           26 |     1765 | 2024-04-30 | Liquid             | L   | 0.681      | -            | -                | -                | -         |   -11.39 | chelo, FalleN, KSCERATO, kye, yuurih |
|           25 |     2014 | 2024-04-19 | MIBR               | L   | 0.609      | -            | -                | -                | -         |    -9.99 | chelo, FalleN, KSCERATO, kye, yuurih |
|           24 |     2034 | 2024-04-19 | Metizport          | W   | 0.607      | 0.589        | -                | 0.478 (0.171)    | 1 (0.607) |     0.68 | chelo, FalleN, KSCERATO, kye, yuurih |
|           23 |     2069 | 2024-04-18 | 9z                 | L   | 0.601      | -            | -                | -                | -         |    -6.54 | chelo, FalleN, KSCERATO, kye, yuurih |
|           22 |     2355 | 2024-04-09 | HEROIC             | L   | 0.539      | -            | -                | -                | -         |    -5.76 | arT, chelo, FalleN, KSCERATO, yuurih |
|           21 |     2378 | 2024-04-08 | MOUZ               | L   | 0.533      | -            | -                | -                | -         |    -1.80 | arT, chelo, FalleN, KSCERATO, yuurih |
|           20 |     2397 | 2024-04-07 | Lynn Vision        | W   | 0.530      | 0.624        | 0.126 (0.042)    | -                | 1 (0.530) |     1.02 | arT, chelo, FalleN, KSCERATO, yuurih |
|           19 |     2715 | 2024-03-22 | Gaimin Gladiators  | L   | 0.421      | -            | -                | -                | -         |   -12.48 | arT, chelo, FalleN, KSCERATO, yuurih |
|           18 |     2734 | 2024-03-21 | FaZe               | L   | 0.415      | -            | -                | -                | -         |    -2.40 | arT, chelo, FalleN, KSCERATO, yuurih |
|           17 |     2745 | 2024-03-21 | G2                 | L   | 0.413      | -            | -                | -                | -         |    -1.68 | arT, chelo, FalleN, KSCERATO, yuurih |
|           16 |     2767 | 2024-03-20 | SAW                | W   | 0.407      | -            | -                | -                | 1 (0.407) |     1.55 | arT, chelo, FalleN, KSCERATO, yuurih |
|           15 |     2783 | 2024-03-19 | ENCE               | W   | 0.401      | -            | -                | -                | 1 (0.401) |     3.31 | arT, chelo, FalleN, KSCERATO, yuurih |
|           14 |     2791 | 2024-03-18 | KOI                | W   | 0.394      | -            | -                | -                | -         |     0.96 | arT, chelo, FalleN, KSCERATO, yuurih |
|           13 |     2805 | 2024-03-17 | Lynn Vision        | L   | 0.388      | -            | -                | -                | -         |   -11.58 | arT, chelo, FalleN, KSCERATO, yuurih |
|           12 |     2820 | 2024-03-17 | Legacy             | L   | 0.387      | -            | -                | -                | -         |   -11.58 | arT, chelo, FalleN, KSCERATO, yuurih |
|           11 |     3167 | 2024-03-03 | Complexity         | W   | 0.295      | -            | -                | -                | -         |     6.69 | arT, chelo, FalleN, KSCERATO, yuurih |
|           10 |     3202 | 2024-03-02 | Liquid             | W   | 0.287      | -            | -                | -                | -         |     3.59 | arT, chelo, FalleN, KSCERATO, yuurih |
|            9 |     3224 | 2024-03-01 | Nouns              | W   | 0.281      | -            | -                | -                | -         |     0.21 | arT, chelo, FalleN, KSCERATO, yuurih |
|            8 |     3356 | 2024-02-23 | 9z                 | L   | 0.236      | -            | -                | -                | -         |    -2.83 | arT, chelo, FalleN, KSCERATO, yuurih |
|            7 |     3369 | 2024-02-22 | 9z                 | W   | 0.229      | -            | -                | -                | -         |     4.54 | arT, chelo, FalleN, KSCERATO, yuurih |
|            6 |     3377 | 2024-02-22 | Imperial           | W   | 0.228      | -            | -                | -                | -         |     2.19 | arT, chelo, FalleN, KSCERATO, yuurih |
|            5 |     3658 | 2024-02-10 | Metizport          | L   | 0.147      | -            | -                | -                | -         |    -4.53 | arT, chelo, FalleN, KSCERATO, yuurih |
|            4 |     3660 | 2024-02-10 | ex-Anonymo         | W   | 0.147      | -            | -                | -                | -         |     0.00 | arT, chelo, FalleN, KSCERATO, yuurih |
|            3 |     3662 | 2024-02-10 | Metizport          | L   | 0.146      | -            | -                | -                | -         |    -4.50 | arT, chelo, FalleN, KSCERATO, yuurih |
|            2 |     3816 | 2024-02-01 | Apeks              | L   | 0.088      | -            | -                | -                | -         |    -2.69 | arT, chelo, FalleN, KSCERATO, yuurih |
|            1 |     3839 | 2024-01-31 | The MongolZ        | L   | 0.081      | -            | -                | -                | -         |    -0.35 | arT, chelo, FalleN, KSCERATO, yuurih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($62,139.86)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.25) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.947 | $28,000.00     | $26,515.21      |
| 2024-06-02 |      0.900 | $10,000.00     | $9,000.14       |
| 2024-05-26 |      0.854 | $2,000.00      | $1,707.24       |
| 2024-05-12 |      0.760 | $12,000.00     | $9,122.94       |
| 2024-04-20 |      0.615 | $5,000.00      | $3,075.95       |
| 2024-04-14 |      0.572 | $5,000.00      | $2,860.61       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-02-02 |      0.095 | $2,500.00      | $237.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
