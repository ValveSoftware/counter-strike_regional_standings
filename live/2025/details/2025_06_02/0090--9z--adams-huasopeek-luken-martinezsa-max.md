### Roster Details<br />
Team Name: 9z<br />
Roster: adamS, HUASOPEEK, Luken, MartinezSa, max<br />
Global Rank: [90](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [22]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  844.6<br />
<br />
Final Rank Value (844.6) = Starting Rank Value (810.4) + Head To Head Adjustments (34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.105[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 810.4
- 400 + ( ( 0.224 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 810.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      578 | 2025-05-02 | Imperial      | L   | 1.000      | -            | -                | -                | -         |    -7.03 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           19 |      579 | 2025-05-02 | BESTIA        | W   | 0.999      | 0.500        | 0.031 (0.016)    | 0.360 (0.180)    | 1 (0.999) |    16.83 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           18 |     1150 | 2025-04-06 | KRÜ           | W   | 0.826      | 0.143        | 0.003 (0.000)    | 0.294 (0.035)    | 0 (0.000) |     8.53 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           17 |     1185 | 2025-04-04 | Dusty Roots   | W   | 0.814      | 0.143        | -                | 0.315 (0.037)    | 0 (0.000) |     8.02 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           16 |     1211 | 2025-04-03 | LOBOARMY      | W   | 0.807      | 0.143        | 0.012 (0.001)    | 0.217 (0.025)    | 0 (0.000) |     8.68 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           15 |     1415 | 2025-03-29 | Sharks        | L   | 0.773      | -            | -                | -                | -         |    -8.22 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           14 |     1437 | 2025-03-29 | BURN          | W   | 0.771      | -            | -                | -                | 0 (0.000) |     3.72 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           13 |     1478 | 2025-03-28 | RED Canids    | L   | 0.767      | -            | -                | -                | -         |   -12.82 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           12 |     1541 | 2025-03-27 | Floripa Stars | W   | 0.760      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     5.85 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           11 |     1989 | 2025-03-12 | Legacy        | L   | 0.660      | -            | -                | -                | -         |    -6.93 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|           10 |     2006 | 2025-03-11 | Solid         | W   | 0.654      | 0.143        | 0.029 (0.003)    | 0.506 (0.047)    | 0 (0.000) |    11.58 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            9 |     2034 | 2025-03-10 | BESTIA        | W   | 0.646      | 0.143        | 0.031 (0.003)    | 0.360 (0.033)    | 0 (0.000) |    10.10 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            8 |     2070 | 2025-03-09 | BESTIA        | W   | 0.640      | 0.143        | 0.031 (0.003)    | 0.360 (0.033)    | 0 (0.000) |    10.30 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            7 |     2074 | 2025-03-09 | ShindeN       | L   | 0.640      | -            | -                | -                | -         |   -12.71 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            6 |     2140 | 2025-03-08 | Swingers      | W   | 0.633      | 0.143        | 0.012 (0.001)    | 0.620 (0.056)    | 0 (0.000) |     9.95 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            5 |     2244 | 2025-03-07 | ex-W7M        | W   | 0.624      | 0.143        | 0.005 (0.000)    | 0.233 (0.021)    | -         |     6.81 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            4 |     2726 | 2025-02-19 | ODDIK         | L   | 0.519      | -            | -                | -                | -         |    -3.88 | adamS, HUASOPEEK, Luken, MartinezSa, max |
|            3 |     3117 | 2025-02-06 | Elevate       | L   | 0.433      | -            | -                | -                | -         |   -11.13 | HUASOPEEK, Luken, MartinezSa, max, yel   |
|            2 |     3144 | 2025-02-05 | RED Canids    | L   | 0.426      | -            | -                | -                | -         |    -7.97 | dgt, HUASOPEEK, Luken, MartinezSa, max   |
|            1 |     3155 | 2025-02-05 | Flamengo      | W   | 0.425      | 0.143        | 0.004 (0.000)    | 0.317 (0.019)    | -         |     4.60 | dgt, HUASOPEEK, Luken, MartinezSa, max   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,000.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-02 |      1.000 | $30,000.00     | $30,000.00      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
