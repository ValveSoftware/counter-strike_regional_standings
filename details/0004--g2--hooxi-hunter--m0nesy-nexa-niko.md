### Roster Details<br />
Team Name: G2<br />
Roster: HooXi, huNter-, m0NESY, nexa, NiKo<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [4](../standings_global.md)<br />
Regional Rank: [4]( ../standings_europe.md)<br />
Final Rank Value:  1899.8<br />
<br />
Final Rank Value (1899.8) = Starting Rank Value (1925.3) + Head To Head Adjustments (-25.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.887[<sup>1</sup>](#table2)
- Bounty Collected: 0.685[<sup>2</sup>](#table1)
- Opponent Network: 0.340[<sup>2</sup>](#table1)
- LAN Wins: 0.981[<sup>2</sup>](#table1)

The average of these factors is 0.723<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1925.3
- 400 + ( ( 0.723 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1925.3


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
|           43 |      262 | 2024-06-13 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -13.87 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           42 |      283 | 2024-06-12 | Spirit            | L   | 1.000      | -            | -                | -                | -         |   -11.85 | HooXi, huNter-, nexa, NiKo, TaZ       |
|           41 |      715 | 2024-06-02 | Vitality          | W   | 0.941      | 0.624        | 0.733 (0.430)    | 0.395 (0.232)    | 1 (0.941) |    17.31 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           40 |      739 | 2024-06-01 | 9z                | W   | 0.935      | 0.624        | 0.586 (0.342)    | 0.749 (0.437)    | 1 (0.935) |     4.66 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           39 |      775 | 2024-05-31 | FaZe              | W   | 0.928      | 0.624        | 0.936 (0.542)    | 0.491 (0.284)    | 1 (0.928) |    15.58 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           38 |      825 | 2024-05-29 | Liquid            | W   | 0.916      | 0.624        | 0.494 (0.282)    | 0.546 (0.312)    | 1 (0.916) |     5.98 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           37 |      849 | 2024-05-28 | MOUZ              | W   | 0.909      | 0.624        | 1.000 (0.567)    | 0.442 (0.251)    | 1 (0.909) |    18.74 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           36 |      873 | 2024-05-27 | Vitality          | L   | 0.901      | -            | -                | -                | -         |    -9.81 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           35 |      884 | 2024-05-27 | Falcons           | W   | 0.900      | 0.624        | 0.352 (0.198)    | -                | 1 (0.900) |     4.63 | huNter-, m0NESY, nexa, NiKo, Stewie2K |
|           34 |     1423 | 2024-05-09 | MOUZ              | L   | 0.781      | -            | -                | -                | -         |    -9.31 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           33 |     1449 | 2024-05-08 | 3DMAX             | W   | 0.773      | 0.889        | -                | 1.000 (0.687)    | 1 (0.773) |     0.82 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           32 |     1468 | 2024-05-07 | BIG               | W   | 0.766      | 0.889        | -                | 0.405 (0.276)    | 1 (0.766) |     1.56 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           31 |     1644 | 2024-04-28 | M80               | W   | 0.707      | 0.889        | -                | 0.649 (0.408)    | 1 (0.707) |     0.65 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           30 |     1678 | 2024-04-27 | Falcons           | W   | 0.699      | 0.889        | 0.352 (0.218)    | -                | 1 (0.699) |     3.30 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           29 |     1699 | 2024-04-26 | M80               | L   | 0.693      | -            | -                | -                | -         |   -21.25 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           28 |     1731 | 2024-04-25 | The MongolZ       | L   | 0.685      | -            | -                | -                | -         |   -10.23 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           27 |     1751 | 2024-04-24 | TYLOO             | W   | 0.679      | -            | -                | -                | -         |     0.05 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           26 |     2051 | 2024-04-13 | MOUZ              | L   | 0.604      | -            | -                | -                | -         |    -8.14 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           25 |     2064 | 2024-04-12 | Virtus.pro        | W   | 0.597      | -            | -                | -                | -         |     5.42 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           24 |     2134 | 2024-04-10 | HEROIC            | W   | 0.585      | -            | -                | -                | -         |     5.59 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           23 |     2193 | 2024-04-09 | Lynn Vision       | W   | 0.579      | -            | -                | -                | -         |     0.28 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           22 |     2224 | 2024-04-08 | Liquid            | L   | 0.572      | -            | -                | -                | -         |   -15.25 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           21 |     2234 | 2024-04-07 | 9z                | W   | 0.570      | 0.624        | 0.586 (0.209)    | 0.749 (0.266)    | -         |     4.52 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           20 |     2426 | 2024-03-30 | Natus Vincere     | L   | 0.515      | -            | -                | -                | -         |    -8.33 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           19 |     2433 | 2024-03-29 | MOUZ              | W   | 0.508      | 1.000        | 1.000 (0.508)    | -                | -         |     9.06 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           18 |     2530 | 2024-03-24 | Virtus.pro        | W   | 0.473      | 1.000        | 0.347 (0.164)    | -                | -         |     4.46 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           17 |     2542 | 2024-03-23 | Gaimin Gladiators | W   | 0.467      | 1.000        | -                | 0.528 (0.246)    | -         |     0.26 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           16 |     2561 | 2024-03-22 | Cloud9            | L   | 0.458      | -            | -                | -                | -         |   -14.06 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           15 |     2571 | 2024-03-21 | Natus Vincere     | L   | 0.454      | -            | -                | -                | -         |    -7.43 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           14 |     2581 | 2024-03-21 | FURIA             | W   | 0.453      | -            | -                | -                | -         |     2.49 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           13 |     3397 | 2024-02-15 | FaZe              | W   | 0.219      | -            | -                | -                | -         |     3.36 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           12 |     3428 | 2024-02-14 | Eternal Fire      | W   | 0.214      | -            | -                | -                | -         |     1.79 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           11 |     3444 | 2024-02-14 | Into the Breach   | W   | 0.212      | -            | -                | -                | -         |     0.01 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|           10 |     3509 | 2024-02-09 | FaZe              | L   | 0.180      | -            | -                | -                | -         |    -2.95 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            9 |     3537 | 2024-02-06 | HEROIC            | W   | 0.161      | -            | -                | -                | -         |     1.54 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            8 |     3543 | 2024-02-06 | Monte             | W   | 0.159      | -            | -                | -                | -         |     0.14 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            7 |     3549 | 2024-02-05 | ENCE              | L   | 0.153      | -            | -                | -                | -         |    -4.42 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            6 |     3602 | 2024-02-03 | HEROIC            | W   | 0.139      | -            | -                | -                | -         |     1.31 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            5 |     3716 | 2024-01-28 | Liquid            | W   | 0.100      | -            | -                | -                | -         |     0.47 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            4 |     3733 | 2024-01-27 | Natus Vincere     | L   | 0.093      | -            | -                | -                | -         |    -1.53 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            3 |     3749 | 2024-01-26 | Ninjas in Pyjamas | W   | 0.086      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            2 |     3810 | 2024-01-23 | Natus Vincere     | L   | 0.066      | -            | -                | -                | -         |    -1.09 | HooXi, huNter-, m0NESY, nexa, NiKo    |
|            1 |     3842 | 2024-01-22 | Ninjas in Pyjamas | W   | 0.058      | -            | -                | -                | -         |     0.00 | HooXi, huNter-, m0NESY, nexa, NiKo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($192,577.18)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.75) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-06-02 |      0.941 | $100,000.00    | $94,100.29      |
| 2024-05-12 |      0.800 | $32,000.00     | $25,595.38      |
| 2024-04-14 |      0.612 | $20,000.00     | $12,234.65      |
| 2024-03-31 |      0.521 | $80,000.00     | $41,651.08      |
| 2024-02-11 |      0.194 | $40,000.00     | $7,741.83       |
| 2024-01-28 |      0.100 | $12,500.00     | $1,253.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
