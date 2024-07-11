### Roster Details<br />
Team Name: BIG<br />
Roster: JDC, Krimbo, prosus, syrsoN, tabseN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [25](../standings_global.md)<br />
Regional Rank: [17]( ../standings_europe.md)<br />
Final Rank Value:  1379.8<br />
<br />
Final Rank Value (1379.8) = Starting Rank Value (1408.8) + Head To Head Adjustments (-28.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.600[<sup>1</sup>](#table2)
- Bounty Collected: 0.485[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.611[<sup>2</sup>](#table1)

The average of these factors is 0.478<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1408.8
- 400 + ( ( 0.478 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1408.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      203 | 2024-06-15 | Permitta      | L   | 1.000      | -            | -                | -                | -         |   -28.68 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           42 |      229 | 2024-06-14 | Space         | W   | 1.000      | 0.435        | -                | 0.404 (0.176)    | 0 (0.000) |     2.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           41 |      558 | 2024-06-06 | fnatic        | L   | 0.967      | -            | -                | -                | -         |   -12.28 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           40 |      590 | 2024-06-06 | Eternal Fire  | L   | 0.965      | -            | -                | -                | -         |    -5.46 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           39 |      621 | 2024-06-05 | BetBoom       | L   | 0.960      | -            | -                | -                | -         |   -12.30 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           38 |      635 | 2024-06-05 | Complexity    | L   | 0.959      | -            | -                | -                | -         |    -3.46 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           37 |      645 | 2024-06-05 | FURIA         | W   | 0.958      | 0.715        | 0.253 (0.174)    | 0.509 (0.349)    | 1 (0.958) |    18.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           36 |      827 | 2024-05-29 | HEROIC        | L   | 0.915      | -            | -                | -                | -         |    -4.28 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           35 |      837 | 2024-05-29 | Virtus.pro    | W   | 0.914      | 0.624        | 0.347 (0.198)    | 0.391 (0.223)    | 1 (0.914) |    24.38 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           34 |      854 | 2024-05-28 | FlyQuest      | W   | 0.908      | 0.624        | 0.116 (0.066)    | 0.417 (0.236)    | 1 (0.908) |    13.72 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           33 |      878 | 2024-05-27 | Natus Vincere | L   | 0.901      | -            | -                | -                | -         |    -1.56 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           32 |     1073 | 2024-05-20 | MIBR          | L   | 0.853      | -            | -                | -                | -         |    -7.00 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           31 |     1092 | 2024-05-19 | Astralis      | L   | 0.847      | -            | -                | -                | -         |    -1.43 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           30 |     1468 | 2024-05-07 | G2            | L   | 0.766      | -            | -                | -                | -         |    -1.56 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           29 |     1530 | 2024-05-03 | HEROIC        | W   | 0.741      | 0.889        | 0.338 (0.222)    | 0.480 (0.316)    | 1 (0.741) |    20.55 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           28 |     1539 | 2024-05-03 | PERA          | W   | 0.739      | 0.889        | 0.066 (0.043)    | 0.433 (0.285)    | 1 (0.739) |     2.25 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           27 |     1566 | 2024-05-02 | Natus Vincere | L   | 0.732      | -            | -                | -                | -         |    -1.04 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           26 |     1591 | 2024-05-01 | BOSS          | W   | 0.725      | 0.889        | -                | 0.349 (0.225)    | 1 (0.725) |     1.23 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           25 |     1802 | 2024-04-21 | BLEED         | L   | 0.659      | -            | -                | -                | -         |   -10.60 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           24 |     1828 | 2024-04-20 | GamerLegion   | W   | 0.653      | 0.384        | 0.243 (0.061)    | -                | -         |     6.31 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           23 |     1938 | 2024-04-18 | LEON          | W   | 0.638      | -            | -                | -                | -         |     0.51 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           22 |     2047 | 2024-04-13 | OG            | L   | 0.606      | -            | -                | -                | -         |   -14.28 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           21 |     2056 | 2024-04-12 | FORZE         | W   | 0.600      | 0.684        | 0.095 (0.039)    | 0.293 (0.120)    | -         |     2.35 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           20 |     2127 | 2024-04-10 | Gods Reign    | W   | 0.587      | 0.684        | 0.066 (0.027)    | 0.284 (0.114)    | -         |     0.92 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           19 |     2186 | 2024-04-09 | BetBoom       | L   | 0.580      | -            | -                | -                | -         |    -4.31 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           18 |     2365 | 2024-04-03 | EYEBALLERS    | W   | 0.539      | 0.384        | -                | 0.646 (0.134)    | -         |     1.25 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           17 |     2845 | 2024-03-09 | Spirit        | L   | 0.374      | -            | -                | -                | -         |    -0.37 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           16 |     2874 | 2024-03-08 | GamerLegion   | W   | 0.367      | -            | -                | -                | -         |     1.09 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           15 |     3008 | 2024-03-03 | Young Ninjas  | L   | 0.334      | -            | -                | -                | -         |   -10.14 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           14 |     3066 | 2024-03-01 | AMKAL         | W   | 0.319      | 0.500        | 0.135 (0.021)    | -                | -         |     1.85 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           13 |     3093 | 2024-02-28 | BLEED         | L   | 0.305      | -            | -                | -                | -         |    -5.29 | JDC, Krimbo, prosus, syrsoN, tabseN |
|           12 |     3617 | 2024-02-02 | Apeks         | L   | 0.134      | -            | -                | -                | -         |    -3.73 | Krimbo, mantuu, prosus, s1n, tabseN |
|           11 |     3672 | 2024-01-31 | HEROIC        | L   | 0.121      | -            | -                | -                | -         |    -0.45 | Krimbo, mantuu, prosus, s1n, tabseN |
|           10 |     3679 | 2024-01-31 | ENCE          | W   | 0.120      | -            | -                | -                | 1 (0.120) |     2.29 | Krimbo, mantuu, prosus, s1n, tabseN |
|            9 |     3719 | 2024-01-28 | Astralis      | L   | 0.100      | -            | -                | -                | -         |    -0.17 | Krimbo, mantuu, prosus, s1n, tabseN |
|            8 |     3727 | 2024-01-27 | Virtus.pro    | L   | 0.094      | -            | -                | -                | -         |    -0.37 | Krimbo, mantuu, prosus, s1n, tabseN |
|            7 |     3743 | 2024-01-26 | Cloud9        | W   | 0.088      | -            | -                | -                | 1 (0.088) |     0.77 | Krimbo, mantuu, prosus, s1n, tabseN |
|            6 |     3766 | 2024-01-25 | HEROIC        | W   | 0.081      | 0.581        | 0.338 (0.016)    | -                | 1 (0.081) |     2.26 | Krimbo, mantuu, prosus, s1n, tabseN |
|            5 |     3783 | 2024-01-24 | Virtus.pro    | L   | 0.074      | -            | -                | -                | -         |    -0.29 | Krimbo, mantuu, prosus, s1n, tabseN |
|            4 |     3906 | 2024-01-20 | Romania       | L   | 0.046      | -            | -                | -                | -         |    -1.37 | Krimbo, mantuu, prosus, s1n, tabseN |
|            3 |     3960 | 2024-01-19 | fnatic        | L   | 0.039      | -            | -                | -                | -         |    -0.28 | Krimbo, mantuu, prosus, s1n, tabseN |
|            2 |     4012 | 2024-01-18 | BetBoom       | L   | 0.033      | -            | -                | -                | -         |    -0.20 | Krimbo, mantuu, prosus, s1n, tabseN |
|            1 |     4022 | 2024-01-18 | Permitta      | W   | 0.033      | -            | -                | -                | -         |     0.08 | Krimbo, mantuu, prosus, s1n, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,518.70)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-06-02 |      0.941 | $6,000.00      | $5,646.02       |
| 2024-05-12 |      0.800 | $17,500.00     | $13,997.47      |
| 2024-04-14 |      0.613 | $35,000.00     | $21,466.59      |
| 2024-03-10 |      0.381 | $7,500.00      | $2,857.44       |
| 2024-02-02 |      0.134 | $4,500.00      | $605.19         |
| 2024-01-28 |      0.100 | $10,500.00     | $1,053.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
