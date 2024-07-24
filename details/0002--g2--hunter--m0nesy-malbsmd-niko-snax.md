### Roster Details<br />
Team Name: G2<br />
Roster: huNter-, m0NESY, malbsMd, NiKo, Snax<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [2](../standings_global.md)<br />
Regional Rank: [2]( ../standings_europe.md)<br />
Final Rank Value:  1949.3<br />
<br />
Final Rank Value (1949.3) = Starting Rank Value (1992.4) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.773[<sup>2</sup>](#table1)
- Opponent Network: 0.373[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.787<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1992.4
- 400 + ( ( 0.787 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1992.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       87 | 2024-07-21 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -15.04 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           42 |      132 | 2024-07-20 | Virtus.pro        | W   | 1.000      | 1.000        | 0.595 (0.595)    | 0.374 (0.374)    | 1 (1.000) |     7.60 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           41 |      197 | 2024-07-18 | Spirit            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.433 (0.433)    | 1 (1.000) |    15.72 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           40 |      297 | 2024-07-17 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.725 (0.725)    | 1 (1.000) |     7.95 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           39 |      714 | 2024-06-13 | Vitality          | L   | 0.927      | -            | -                | -                | -         |   -17.46 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           38 |     1167 | 2024-06-02 | Vitality          | W   | 0.854      | 0.624        | 0.749 (0.399)    | -                | 1 (0.854) |    11.46 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           37 |     1191 | 2024-06-01 | 9z                | W   | 0.848      | 0.624        | 0.511 (0.270)    | 0.671 (0.355)    | 1 (0.848) |     2.52 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           36 |     1227 | 2024-05-31 | FaZe              | W   | 0.841      | 0.624        | 0.854 (0.448)    | 0.433 (0.227)    | 1 (0.841) |     9.11 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           35 |     1277 | 2024-05-29 | Liquid            | W   | 0.829      | 0.624        | 0.411 (0.212)    | 0.459 (0.237)    | 1 (0.829) |     2.34 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           34 |     1301 | 2024-05-28 | MOUZ              | W   | 0.822      | 0.624        | 1.000 (0.513)    | 0.435 (0.223)    | 1 (0.822) |    13.98 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           33 |     1325 | 2024-05-27 | Vitality          | L   | 0.815      | -            | -                | -                | -         |   -13.86 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           32 |     1336 | 2024-05-27 | Falcons           | W   | 0.813      | -            | -                | -                | 1 (0.813) |     1.66 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           31 |     1875 | 2024-05-09 | MOUZ              | L   | 0.694      | -            | -                | -                | -         |   -10.99 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1901 | 2024-05-08 | 3DMAX             | W   | 0.686      | 0.889        | -                | 1.000 (0.610)    | 1 (0.686) |     0.47 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1920 | 2024-05-07 | BIG               | W   | 0.679      | 0.889        | -                | 0.347 (0.209)    | -         |     0.57 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     2096 | 2024-04-28 | M80               | W   | 0.620      | 0.889        | -                | 0.614 (0.338)    | -         |     0.56 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     2130 | 2024-04-27 | Falcons           | W   | 0.612      | -            | -                | -                | -         |     1.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     2151 | 2024-04-26 | M80               | L   | 0.606      | -            | -                | -                | -         |   -18.59 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     2183 | 2024-04-25 | The MongolZ       | L   | 0.598      | -            | -                | -                | -         |   -11.79 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     2203 | 2024-04-24 | TYLOO             | W   | 0.592      | -            | -                | -                | -         |     0.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     2503 | 2024-04-13 | MOUZ              | L   | 0.518      | -            | -                | -                | -         |    -9.10 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2516 | 2024-04-12 | Virtus.pro        | W   | 0.511      | -            | -                | -                | -         |     4.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2586 | 2024-04-10 | HEROIC            | W   | 0.499      | -            | -                | -                | -         |     1.95 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2645 | 2024-04-09 | Lynn Vision       | W   | 0.492      | -            | -                | -                | -         |     0.09 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2676 | 2024-04-08 | Liquid            | L   | 0.485      | -            | -                | -                | -         |   -14.51 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2686 | 2024-04-07 | 9z                | W   | 0.483      | -            | -                | -                | -         |     1.85 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2878 | 2024-03-30 | Natus Vincere     | L   | 0.428      | -            | -                | -                | -         |    -6.62 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2885 | 2024-03-29 | MOUZ              | W   | 0.421      | 1.000        | 1.000 (0.421)    | -                | -         |     5.59 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     2982 | 2024-03-24 | Virtus.pro        | W   | 0.386      | 1.000        | 0.595 (0.230)    | -                | -         |     3.09 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     2994 | 2024-03-23 | Gaimin Gladiators | W   | 0.380      | -            | -                | -                | -         |     0.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3013 | 2024-03-22 | Cloud9            | L   | 0.372      | -            | -                | -                | -         |   -11.61 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3023 | 2024-03-21 | Natus Vincere     | L   | 0.367      | -            | -                | -                | -         |    -5.66 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3033 | 2024-03-21 | FURIA             | W   | 0.366      | -            | -                | -                | -         |     2.70 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3849 | 2024-02-15 | FaZe              | W   | 0.132      | -            | -                | -                | -         |     1.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3880 | 2024-02-14 | Eternal Fire      | W   | 0.127      | -            | -                | -                | -         |     0.54 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     3896 | 2024-02-14 | Into the Breach   | W   | 0.125      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3961 | 2024-02-09 | FaZe              | L   | 0.093      | -            | -                | -                | -         |    -2.24 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3989 | 2024-02-06 | HEROIC            | W   | 0.074      | -            | -                | -                | -         |     0.25 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3995 | 2024-02-06 | Monte             | W   | 0.072      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     4001 | 2024-02-05 | ENCE              | L   | 0.067      | -            | -                | -                | -         |    -2.02 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     4054 | 2024-02-03 | HEROIC            | W   | 0.053      | -            | -                | -                | -         |     0.18 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     4168 | 2024-01-28 | Liquid            | W   | 0.013      | -            | -                | -                | -         |     0.02 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     4185 | 2024-01-27 | Natus Vincere     | L   | 0.006      | -            | -                | -                | -         |    -0.09 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($342,336.55)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $175,000.00    | $175,000.00     |
| 2024-06-16 |      0.946 | $10,000.00     | $9,464.04       |
| 2024-06-02 |      0.854 | $100,000.00    | $85,416.74      |
| 2024-05-12 |      0.713 | $32,000.00     | $22,816.64      |
| 2024-04-14 |      0.525 | $20,000.00     | $10,497.94      |
| 2024-03-31 |      0.434 | $80,000.00     | $34,704.25      |
| 2024-02-11 |      0.107 | $40,000.00     | $4,268.41       |
| 2024-01-28 |      0.013 | $12,500.00     | $168.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
