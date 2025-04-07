### Roster Details<br />
Team Name: Passion UA<br />
Roster: jackasmo, Kvem, s-chilla, Topa, zeRRoFIX<br />
Global Rank: [61](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [39]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  871.7<br />
<br />
Final Rank Value (871.7) = Starting Rank Value (921.9) + Head To Head Adjustments (-50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.418[<sup>1</sup>](#table2)
- Bounty Collected: 0.385[<sup>2</sup>](#table1)
- Opponent Network: 0.164[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 921.9
- 400 + ( ( 0.283 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 921.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |       45 | 2025-04-03 | Complexity         | L   | 1.000      | -            | -                | -                | -         |    -6.86 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           41 |       52 | 2025-04-03 | Nemiga             | L   | 1.000      | -            | -                | -                | -         |   -10.30 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           40 |       60 | 2025-04-03 | Imperial Valkyries | W   | 1.000      | 0.471        | 0.110 (0.052)    | 0.088 (0.042)    | 0 (0.000) |    12.35 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           39 |       68 | 2025-04-02 | 9 Pandas           | L   | 1.000      | -            | -                | -                | -         |   -10.75 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           38 |       74 | 2025-04-02 | Metizport          | L   | 1.000      | -            | -                | -                | -         |   -11.21 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           37 |      168 | 2025-03-29 | Fire Flux          | L   | 1.000      | -            | -                | -                | -         |   -18.49 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           36 |      220 | 2025-03-28 | ECLOT              | L   | 1.000      | -            | -                | -                | -         |   -14.67 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           35 |      241 | 2025-03-28 | GTZ                | W   | 1.000      | 0.143        | 0.051 (0.007)    | 0.430 (0.061)    | 0 (0.000) |    11.22 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           34 |      311 | 2025-03-27 | Ninjas in Pyjamas  | L   | 1.000      | -            | -                | -                | -         |   -24.82 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           33 |      327 | 2025-03-25 | Sashi              | W   | 1.000      | 0.396        | -                | 0.683 (0.271)    | 0 (0.000) |    11.59 | jackasmo, Kvem, s-chilla, Topa, zeRRoFIX  |
|           32 |      489 | 2025-03-14 | Zero Tenacity      | L   | 1.000      | -            | -                | -                | -         |   -19.37 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           31 |      570 | 2025-03-10 | BC.Game            | L   | 1.000      | -            | -                | -                | -         |   -12.68 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           30 |      600 | 2025-03-09 | 500                | W   | 1.000      | 0.435        | 0.122 (0.053)    | 1.000 (0.435)    | 0 (0.000) |    19.18 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           29 |      630 | 2025-03-09 | NAVI Junior        | L   | 1.000      | -            | -                | -                | -         |   -14.28 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           28 |      682 | 2025-03-08 | OG                 | L   | 1.000      | -            | -                | -                | -         |   -13.89 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           27 |      756 | 2025-03-07 | BC.Game            | W   | 0.993      | 0.143        | 0.126 (0.018)    | 0.946 (0.134)    | 0 (0.000) |    18.57 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           26 |     1084 | 2025-02-21 | GUN5               | L   | 0.901      | -            | -                | -                | -         |   -13.57 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           25 |     1217 | 2025-02-14 | ENCE               | L   | 0.855      | -            | -                | -                | -         |   -13.85 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           24 |     1245 | 2025-02-13 | Apogee             | W   | 0.847      | 0.435        | -                | 1.000 (0.368)    | -         |     9.66 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           23 |     1429 | 2025-02-08 | HEROIC             | L   | 0.812      | -            | -                | -                | -         |   -11.75 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           22 |     1458 | 2025-02-07 | BetBoom            | W   | 0.806      | 0.143        | 0.113 (0.013)    | 0.913 (0.105)    | -         |    13.25 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           21 |     1512 | 2025-02-05 | BetBoom            | W   | 0.793      | 0.143        | 0.113 (0.013)    | 0.913 (0.103)    | -         |    13.89 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           20 |     1524 | 2025-02-05 | Metizport          | W   | 0.792      | 0.143        | 0.106 (0.012)    | 0.769 (0.087)    | -         |    13.65 | jackasmo, jambo, Kvem, Topa, zeRRoFIX     |
|           19 |     2077 | 2024-12-03 | Wildcard           | L   | 0.365      | -            | -                | -                | -         |    -3.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           18 |     2098 | 2024-12-02 | GamerLegion        | L   | 0.359      | -            | -                | -                | -         |    -0.54 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           17 |     2123 | 2024-11-30 | MIBR               | W   | 0.350      | -            | -                | -                | 1 (0.350) |     9.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           16 |     2147 | 2024-11-30 | Complexity         | W   | 0.345      | -            | -                | -                | 1 (0.345) |     6.79 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           15 |     2154 | 2024-11-29 | BIG                | L   | 0.344      | -            | -                | -                | -         |    -2.25 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           14 |     2247 | 2024-11-23 | Astralis           | W   | 0.304      | 0.143        | 0.638 (0.028)    | -                | 1 (0.304) |     9.32 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           13 |     2274 | 2024-11-23 | Falcons            | L   | 0.298      | -            | -                | -                | -         |    -0.08 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           12 |     2306 | 2024-11-22 | BIG                | L   | 0.291      | -            | -                | -                | -         |    -1.86 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           11 |     2325 | 2024-11-21 | Spirit             | W   | 0.285      | 0.143        | 1.000 (0.041)    | 0.802 (0.033)    | 1 (0.285) |     8.95 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|           10 |     2335 | 2024-11-20 | Virtus.pro         | W   | 0.284      | 0.143        | 0.356 (0.014)    | -                | 1 (0.284) |     8.66 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            9 |     2675 | 2024-11-06 | 500                | L   | 0.186      | -            | -                | -                | -         |    -2.24 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            8 |     2846 | 2024-10-29 | Sangal             | L   | 0.132      | -            | -                | -                | -         |    -2.98 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            7 |     2872 | 2024-10-27 | Sangal             | L   | 0.120      | -            | -                | -                | -         |    -2.72 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            6 |     2933 | 2024-10-25 | 9INE               | L   | 0.105      | -            | -                | -                | -         |    -2.76 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            5 |     3140 | 2024-10-13 | WildLotus          | W   | 0.028      | -            | -                | -                | -         |     0.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            4 |     3145 | 2024-10-13 | ex-Enterprise      | W   | 0.027      | -            | -                | -                | -         |     0.13 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            3 |     3160 | 2024-10-12 | WildLotus          | L   | 0.020      | -            | -                | -                | -         |    -0.57 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            2 |     3169 | 2024-10-12 | FAVBET             | L   | 0.019      | -            | -                | -                | -         |    -0.43 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |
|            1 |     3181 | 2024-10-11 | Cloud9             | W   | 0.012      | -            | -                | -                | -         |     0.10 | fear, jackasmo, jambo, s-chilla, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,085.72)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-04-03 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-03-31 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-03-11 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-02-15 |      0.861 | $2,000.00      | $1,722.97       |
| 2024-12-03 |      0.365 | $10,000.00     | $3,653.63       |
| 2024-10-27 |      0.121 | $1,275.00      | $153.82         |
| 2024-10-13 |      0.028 | $2,000.00      | $55.30          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
