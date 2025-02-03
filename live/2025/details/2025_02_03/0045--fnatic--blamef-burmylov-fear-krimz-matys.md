### Roster Details<br />
Team Name: fnatic<br />
Roster: blameF, Burmylov, fear, KRIMZ, MATYS<br />
Global Rank: [45](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [32]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1094.4<br />
<br />
Final Rank Value (1094.4) = Starting Rank Value (1091.9) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.570[<sup>1</sup>](#table2)
- Bounty Collected: 0.388[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.404[<sup>2</sup>](#table1)

The average of these factors is 0.357<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1091.9
- 400 + ( ( 0.357 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1091.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |       28 | 2025-02-01 | OG                | W   | 1.000      | 0.435        | 0.166 (0.072)    | 0.257 (0.111)    | 0 (0.000) |     9.22 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           30 |      341 | 2025-01-14 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.24 | blameF, Burmylov, fear, KRIMZ, MATYS |
|           29 |      806 | 2024-12-01 | Rare Atom         | L   | 0.771      | -            | -                | -                | -         |   -16.33 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           28 |      838 | 2024-11-30 | Cloud9            | L   | 0.764      | -            | -                | -                | -         |   -14.09 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           27 |      841 | 2024-11-29 | Wildcard          | L   | 0.763      | -            | -                | -                | -         |    -5.30 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           26 |     1032 | 2024-11-20 | ECLOT             | W   | 0.697      | 0.143        | 0.288 (0.029)    | 0.978 (0.097)    | 1 (0.697) |    12.30 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           25 |     1042 | 2024-11-19 | FaZe              | L   | 0.691      | -            | -                | -                | -         |    -0.37 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           24 |     1056 | 2024-11-17 | BetBoom           | W   | 0.683      | 0.143        | 0.230 (0.022)    | 0.518 (0.051)    | 1 (0.683) |    11.32 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           23 |     1074 | 2024-11-17 | Rebels            | W   | 0.678      | 0.143        | 0.031 (0.003)    | 0.382 (0.037)    | 1 (0.678) |     4.25 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           22 |     1086 | 2024-11-16 | Natus Vincere     | L   | 0.676      | -            | -                | -                | -         |    -0.43 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           21 |     1576 | 2024-10-26 | Falcons           | L   | 0.533      | -            | -                | -                | -         |    -0.61 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           20 |     1603 | 2024-10-25 | Cloud9            | W   | 0.525      | 0.477        | 0.067 (0.017)    | 0.297 (0.074)    | 0 (0.000) |     6.36 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           19 |     1630 | 2024-10-22 | The MongolZ       | L   | 0.507      | -            | -                | -                | -         |    -0.22 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           18 |     1633 | 2024-10-22 | 9z                | W   | 0.506      | 0.477        | 0.051 (0.012)    | 0.168 (0.041)    | 0 (0.000) |     4.47 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           17 |     1698 | 2024-10-19 | Nemiga            | L   | 0.485      | -            | -                | -                | -         |    -5.16 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           16 |     1739 | 2024-10-17 | PARIVISION        | W   | 0.474      | 0.624        | 0.018 (0.005)    | 0.303 (0.090)    | 1 (0.474) |     3.20 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           15 |     1772 | 2024-10-16 | UNPAID            | W   | 0.467      | 0.624        | 0.136 (0.040)    | 0.172 (0.050)    | 1 (0.467) |     4.73 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           14 |     1865 | 2024-10-10 | Metizport         | L   | 0.425      | -            | -                | -                | -         |    -3.77 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           13 |     2460 | 2024-09-24 | moneyF            | L   | 0.319      | -            | -                | -                | -         |    -7.86 | blameF, bodyy, KRIMZ, MATYS, nawwk   |
|           12 |     2759 | 2024-09-14 | MOUZ              | L   | 0.252      | -            | -                | -                | -         |    -0.26 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           11 |     2811 | 2024-09-12 | BIG               | L   | 0.240      | -            | -                | -                | -         |    -1.12 | afro, blameF, bodyy, KRIMZ, MATYS    |
|           10 |     2838 | 2024-09-11 | M80               | L   | 0.234      | -            | -                | -                | -         |    -3.67 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            9 |     2882 | 2024-09-10 | Astralis          | W   | 0.226      | 0.889        | 0.311 (0.062)    | 0.414 (0.083)    | 1 (0.226) |     6.30 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            8 |     3208 | 2024-08-29 | ECSTATIC          | L   | 0.146      | -            | -                | -                | -         |    -3.29 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            7 |     3302 | 2024-08-27 | Falcons           | L   | 0.134      | -            | -                | -                | -         |    -0.14 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            6 |     3314 | 2024-08-27 | Cloud9            | W   | 0.133      | -            | -                | -                | 0 (0.000) |     1.55 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            5 |     3375 | 2024-08-26 | OG                | W   | 0.127      | 0.143        | 0.166 (0.003)    | -                | -         |     1.11 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            4 |     3387 | 2024-08-26 | 3DMAX             | L   | 0.126      | -            | -                | -                | -         |    -0.32 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            3 |     3739 | 2024-08-15 | QUAZAR            | W   | 0.054      | -            | -                | -                | -         |     0.13 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            2 |     3745 | 2024-08-15 | Gaimin Gladiators | W   | 0.053      | 0.143        | -                | 0.864 (0.007)    | -         |     0.44 | afro, blameF, bodyy, KRIMZ, MATYS    |
|            1 |     3755 | 2024-08-15 | Rebels            | W   | 0.053      | -            | -                | -                | -         |     0.32 | afro, blameF, bodyy, KRIMZ, MATYS    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($33,210.24)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      0.785 | $10,000.00     | $7,847.71       |
| 2024-10-26 |      0.535 | $20,000.00     | $10,691.95      |
| 2024-10-19 |      0.487 | $25,000.00     | $12,186.32      |
| 2024-09-26 |      0.333 | $1,000.00      | $333.23         |
| 2024-09-22 |      0.307 | $7,000.00      | $2,151.03       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
