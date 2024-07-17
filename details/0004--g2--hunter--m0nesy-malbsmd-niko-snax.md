### Roster Details<br />
Team Name: G2<br />
Roster: huNter-, m0NESY, malbsMd, NiKo, Snax<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1956.5<br />
<br />
Final Rank Value (1956.5) = Starting Rank Value (1979.6) + Head To Head Adjustments (-23.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.884[<sup>1</sup>](#table2)
- Bounty Collected: 0.722[<sup>2</sup>](#table1)
- Opponent Network: 0.359[<sup>2</sup>](#table1)
- LAN Wins: 0.977[<sup>2</sup>](#table1)

The average of these factors is 0.736<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1979.6
- 400 + ( ( 0.736 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1979.6


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
|           43 |        9 | 2024-07-17 | The MongolZ       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.653 (0.653)    | 1 (1.000) |     9.39 | huNter-, m0NESY, malbsMd, NiKo, Snax  |
|           42 |      426 | 2024-06-13 | Vitality          | L   | 0.974      | -            | -                | -                | -         |   -14.76 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           41 |      879 | 2024-06-02 | Vitality          | W   | 0.901      | 0.624        | 0.733 (0.412)    | 0.416 (0.234)    | 1 (0.901) |    15.84 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           40 |      903 | 2024-06-01 | 9z                | W   | 0.895      | 0.624        | 0.606 (0.338)    | 0.728 (0.407)    | 1 (0.895) |     4.06 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           39 |      939 | 2024-05-31 | FaZe              | W   | 0.888      | 0.624        | 0.902 (0.500)    | 0.479 (0.266)    | 1 (0.888) |    13.31 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           38 |      989 | 2024-05-29 | Liquid            | W   | 0.876      | 0.624        | 0.494 (0.270)    | 0.510 (0.279)    | 1 (0.876) |     4.22 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           37 |     1013 | 2024-05-28 | MOUZ              | W   | 0.869      | 0.624        | 1.000 (0.543)    | 0.455 (0.247)    | 1 (0.869) |    17.65 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           36 |     1037 | 2024-05-27 | Vitality          | L   | 0.862      | -            | -                | -                | -         |   -10.29 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           35 |     1048 | 2024-05-27 | Falcons           | W   | 0.860      | 0.624        | 0.344 (0.185)    | -                | 1 (0.860) |     3.21 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           34 |     1587 | 2024-05-09 | MOUZ              | L   | 0.741      | -            | -                | -                | -         |    -8.97 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           33 |     1613 | 2024-05-08 | 3DMAX             | W   | 0.733      | 0.889        | -                | 1.000 (0.652)    | 1 (0.733) |     0.58 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           32 |     1632 | 2024-05-07 | BIG               | W   | 0.727      | 0.889        | -                | 0.382 (0.247)    | 1 (0.727) |     1.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           31 |     1808 | 2024-04-28 | M80               | W   | 0.668      | 0.889        | -                | 0.621 (0.368)    | 1 (0.668) |     0.58 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1842 | 2024-04-27 | Falcons           | W   | 0.659      | 0.889        | 0.344 (0.202)    | -                | -         |     2.20 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1863 | 2024-04-26 | M80               | L   | 0.653      | -            | -                | -                | -         |   -20.07 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     1895 | 2024-04-25 | The MongolZ       | L   | 0.646      | -            | -                | -                | -         |   -10.94 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     1915 | 2024-04-24 | TYLOO             | W   | 0.639      | -            | -                | -                | -         |     0.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     2215 | 2024-04-13 | MOUZ              | L   | 0.565      | -            | -                | -                | -         |    -7.68 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     2228 | 2024-04-12 | Virtus.pro        | W   | 0.558      | -            | -                | -                | -         |     3.98 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     2298 | 2024-04-10 | HEROIC            | W   | 0.546      | -            | -                | -                | -         |     4.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     2357 | 2024-04-09 | Lynn Vision       | W   | 0.539      | -            | -                | -                | -         |     0.18 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2388 | 2024-04-08 | Liquid            | L   | 0.532      | -            | -                | -                | -         |   -15.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2398 | 2024-04-07 | 9z                | W   | 0.530      | 0.624        | 0.606 (0.200)    | 0.728 (0.241)    | -         |     3.67 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2590 | 2024-03-30 | Natus Vincere     | L   | 0.475      | -            | -                | -                | -         |    -9.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2597 | 2024-03-29 | MOUZ              | W   | 0.468      | 1.000        | 1.000 (0.468)    | -                | -         |     8.23 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2694 | 2024-03-24 | Virtus.pro        | W   | 0.434      | -            | -                | -                | -         |     3.13 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2706 | 2024-03-23 | Gaimin Gladiators | W   | 0.427      | -            | -                | -                | -         |     0.14 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2725 | 2024-03-22 | Cloud9            | L   | 0.419      | -            | -                | -                | -         |   -12.98 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     2735 | 2024-03-21 | Natus Vincere     | L   | 0.414      | -            | -                | -                | -         |    -8.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     2745 | 2024-03-21 | FURIA             | W   | 0.413      | -            | -                | -                | -         |     1.68 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3561 | 2024-02-15 | FaZe              | W   | 0.179      | -            | -                | -                | -         |     2.32 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3592 | 2024-02-14 | Eternal Fire      | W   | 0.174      | -            | -                | -                | -         |     1.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3608 | 2024-02-14 | Into the Breach   | W   | 0.172      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3673 | 2024-02-09 | FaZe              | L   | 0.140      | -            | -                | -                | -         |    -2.63 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3701 | 2024-02-06 | HEROIC            | W   | 0.121      | -            | -                | -                | -         |     0.86 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     3707 | 2024-02-06 | Monte             | W   | 0.120      | -            | -                | -                | -         |     0.03 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3713 | 2024-02-05 | ENCE              | L   | 0.114      | -            | -                | -                | -         |    -3.40 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3766 | 2024-02-03 | HEROIC            | W   | 0.100      | -            | -                | -                | -         |     0.70 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3880 | 2024-01-28 | Liquid            | W   | 0.061      | -            | -                | -                | -         |     0.18 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     3897 | 2024-01-27 | Natus Vincere     | L   | 0.053      | -            | -                | -                | -         |    -1.04 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     3913 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.047      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     3974 | 2024-01-23 | Natus Vincere     | L   | 0.026      | -            | -                | -                | -         |    -0.51 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     4006 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.019      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($181,244.36)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.74) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.994 | $10,000.00     | $9,936.29       |
| 2024-06-02 |      0.901 | $100,000.00    | $90,139.26      |
| 2024-05-12 |      0.760 | $32,000.00     | $24,327.85      |
| 2024-04-14 |      0.572 | $20,000.00     | $11,442.45      |
| 2024-03-31 |      0.481 | $80,000.00     | $38,482.26      |
| 2024-02-11 |      0.154 | $40,000.00     | $6,157.42       |
| 2024-01-28 |      0.061 | $12,500.00     | $758.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
