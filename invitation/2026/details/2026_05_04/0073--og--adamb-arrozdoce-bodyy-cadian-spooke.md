### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, bodyy, cadiaN, spooke<br />
Global Rank: [73](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [50]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  1164.6<br />
<br />
Final Rank Value (1164.6) = Starting Rank Value (1132.1) + Head To Head Adjustments (32.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.356[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.755[<sup>2</sup>](#table1)

The average of these factors is 0.395<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1132.1
- 400 + ( ( 0.395 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 1132.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1168 | 2026-04-01 | ALGO              | L   | 0.980      | -            | -                | -                | -         |   -24.71 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           24 |     1376 | 2026-03-30 | BESTIA            | L   | 0.965      | -            | -                | -                | -         |   -10.53 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           23 |     1441 | 2026-03-29 | BIG               | W   | 0.959      | 0.341        | 0.177 (0.058)    | 0.934 (0.305)    | 1 (0.959) |    25.08 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           22 |     1451 | 2026-03-29 | JiJieHao          | W   | 0.958      | 0.341        | 0.017 (0.006)    | 0.503 (0.164)    | 1 (0.958) |    17.12 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           21 |     1453 | 2026-03-29 | SINNERS           | L   | 0.958      | -            | -                | -                | -         |    -5.10 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           20 |     1690 | 2026-03-24 | 9INE              | L   | 0.928      | -            | -                | -                | -         |   -10.49 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           19 |     1706 | 2026-03-24 | INFINITE Talent   | W   | 0.927      | -            | -                | -                | 1 (0.927) |     0.38 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           18 |     1723 | 2026-03-24 | Inner Circle      | L   | 0.926      | -            | -                | -                | -         |   -11.93 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           17 |     2168 | 2026-03-15 | Ninjas in Pyjamas | L   | 0.868      | -            | -                | -                | -         |    -5.81 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           16 |     2187 | 2026-03-15 | Liquid            | W   | 0.866      | 0.350        | 0.164 (0.050)    | 0.269 (0.082)    | 1 (0.866) |    17.82 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           15 |     2215 | 2026-03-14 | JiJieHao          | W   | 0.861      | 0.350        | 0.017 (0.005)    | 0.503 (0.152)    | 1 (0.861) |    15.14 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           14 |     2246 | 2026-03-13 | BC.Game           | W   | 0.855      | 0.350        | 0.057 (0.017)    | 0.255 (0.076)    | 1 (0.855) |    14.60 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           13 |     2247 | 2026-03-13 | Alliance          | L   | 0.855      | -            | -                | -                | -         |    -6.10 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           12 |     2252 | 2026-03-13 | Nexus             | W   | 0.854      | 0.350        | 0.000 (0.000)    | 0.332 (0.099)    | 1 (0.854) |     5.83 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           11 |     2263 | 2026-03-13 | GRINGOS           | W   | 0.854      | -            | -                | -                | 1 (0.854) |     0.41 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           10 |     3810 | 2026-02-11 | Alliance          | L   | 0.653      | -            | -                | -                | -         |    -4.19 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            9 |     3826 | 2026-02-10 | Nemesis           | W   | 0.649      | 0.143        | 0.168 (0.016)    | 1.000 (0.093)    | -         |    14.70 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            8 |     3852 | 2026-02-10 | fnatic            | L   | 0.646      | -            | -                | -                | -         |   -10.88 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            7 |     3887 | 2026-02-08 | Phantom           | W   | 0.634      | 0.143        | 0.011 (0.001)    | 0.803 (0.073)    | -         |    11.68 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            6 |     3901 | 2026-02-08 | Metizport         | W   | 0.634      | 0.143        | 0.043 (0.004)    | 0.571 (0.052)    | -         |     6.99 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            5 |     4728 | 2026-01-13 | FUT               | L   | 0.459      | -            | -                | -                | -         |    -0.27 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            4 |     5028 | 2025-12-12 | SIXSEVEN          | L   | 0.246      | -            | -                | -                | -         |    -7.14 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            3 |     5259 | 2025-11-30 | Monte             | L   | 0.166      | -            | -                | -                | -         |    -0.72 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            2 |     5276 | 2025-11-29 | Venom             | W   | 0.161      | 0.333        | 0.000 (0.000)    | -                | 1 (0.161) |     0.46 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            1 |     5292 | 2025-11-29 | INFINITE          | W   | 0.160      | 0.333        | -                | 0.066 (0.004)    | 1 (0.160) |     0.21 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,405.71)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.868 | $4,066.00      | $3,530.33       |
| 2026-01-18 |      0.494 | $7,500.00      | $3,708.65       |
| 2025-11-30 |      0.167 | $1,000.00      | $166.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
