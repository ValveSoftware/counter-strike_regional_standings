### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Grim, nitr0, oSee, Sonic<br />
Global Rank: [55](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [11]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  1144.7<br />
<br />
Final Rank Value (1144.7) = Starting Rank Value (1118.3) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 0.501[<sup>2</sup>](#table1)

The average of these factors is 0.381<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1118.3
- 400 + ( ( 0.381 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 1118.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      516 | 2026-06-05 | BIG               | L   | 0.995      | -            | -                | -                | -         |    -7.77 | br0, Grim, nitr0, oSee, Sonic   |
|           32 |      539 | 2026-06-04 | M80               | L   | 0.988      | -            | -                | -                | -         |    -6.98 | br0, Grim, nitr0, oSee, Sonic   |
|           31 |      573 | 2026-06-03 | FlyQuest          | W   | 0.979      | 0.624        | 0.028 (0.017)    | 0.296 (0.181)    | 1 (0.979) |    14.09 | br0, Grim, nitr0, oSee, Sonic   |
|           30 |      588 | 2026-06-02 | SINNERS           | W   | 0.974      | 0.624        | 0.092 (0.056)    | 0.422 (0.256)    | 1 (0.974) |    18.61 | br0, Grim, nitr0, oSee, Sonic   |
|           29 |      597 | 2026-06-02 | GamerLegion       | L   | 0.973      | -            | -                | -                | -         |    -1.58 | br0, Grim, nitr0, oSee, Sonic   |
|           28 |     1093 | 2026-05-20 | MOUZ              | L   | 0.891      | -            | -                | -                | -         |    -0.70 | daps, Grim, nitr0, oSee, Sonic  |
|           27 |     1119 | 2026-05-19 | Legacy            | L   | 0.884      | -            | -                | -                | -         |    -0.60 | br0, Grim, nitr0, oSee, Sonic   |
|           26 |     1324 | 2026-05-12 | FaZe              | L   | 0.834      | -            | -                | -                | -         |    -5.20 | br0, Grim, nitr0, oSee, Sonic   |
|           25 |     1356 | 2026-05-11 | FUT               | L   | 0.828      | -            | -                | -                | -         |    -1.04 | br0, Grim, nitr0, oSee, Sonic   |
|           24 |     1916 | 2026-04-25 | Passion UA        | L   | 0.724      | -            | -                | -                | -         |   -12.08 | br0, Grim, nitr0, oSee, Sonic   |
|           23 |     1930 | 2026-04-25 | LAG               | W   | 0.722      | 0.371        | 0.024 (0.006)    | 0.520 (0.139)    | 1 (0.722) |     5.71 | br0, Grim, nitr0, oSee, Sonic   |
|           22 |     1955 | 2026-04-25 | Foxtrot           | W   | 0.721      | -            | -                | -                | 1 (0.721) |     0.35 | br0, Grim, nitr0, oSee, Sonic   |
|           21 |     2414 | 2026-04-07 | Legacy            | L   | 0.598      | -            | -                | -                | -         |    -0.40 | br0, Grim, nitr0, oSee, Sonic   |
|           20 |     2443 | 2026-04-06 | EYEBALLERS        | L   | 0.592      | -            | -                | -                | -         |    -6.86 | br0, Grim, nitr0, oSee, Sonic   |
|           19 |     2509 | 2026-04-05 | FUT               | L   | 0.585      | -            | -                | -                | -         |    -0.83 | br0, Grim, nitr0, oSee, Sonic   |
|           18 |     2575 | 2026-04-04 | Voca              | W   | 0.579      | 1.000        | 0.041 (0.024)    | 0.494 (0.286)    | 1 (0.579) |     8.81 | br0, Grim, nitr0, oSee, Sonic   |
|           17 |     3492 | 2026-03-22 | FURIA             | L   | 0.494      | -            | -                | -                | -         |    -0.43 | br0, Grim, nitr0, oSee, Sonic   |
|           16 |     3620 | 2026-03-20 | B8                | W   | 0.479      | 1.000        | 0.319 (0.153)    | 0.604 (0.289)    | 1 (0.479) |    14.21 | br0, Grim, nitr0, oSee, Sonic   |
|           15 |     3712 | 2026-03-18 | Falcons           | L   | 0.466      | -            | -                | -                | -         |    -0.12 | br0, Grim, nitr0, oSee, Sonic   |
|           14 |     4409 | 2026-03-03 | Ninjas in Pyjamas | L   | 0.369      | -            | -                | -                | -         |    -3.38 | br0, Grim, nitr0, oSee, Sonic   |
|           13 |     4488 | 2026-03-02 | Monte             | L   | 0.359      | -            | -                | -                | -         |    -1.31 | br0, Grim, nitr0, oSee, Sonic   |
|           12 |     4531 | 2026-03-01 | HEROIC            | L   | 0.353      | -            | -                | -                | -         |    -3.29 | br0, Grim, nitr0, oSee, Sonic   |
|           11 |     5539 | 2026-02-08 | Passion UA        | W   | 0.214      | 0.769        | 0.024 (0.004)    | 0.308 (0.051)    | -         |     3.15 | br0, Jeorge, nitr0, oSee, Sonic |
|           10 |     5564 | 2026-02-07 | Voca              | W   | 0.208      | 0.769        | 0.041 (0.007)    | 0.494 (0.079)    | -         |     2.83 | br0, Jeorge, nitr0, oSee, Sonic |
|            9 |     5607 | 2026-02-06 | Fisher College    | W   | 0.201      | 0.769        | 0.043 (0.007)    | 0.378 (0.058)    | -         |     2.48 | br0, Jeorge, nitr0, oSee, Sonic |
|            8 |     5716 | 2026-02-02 | Falcons           | L   | 0.174      | -            | -                | -                | -         |    -0.04 | br0, Jeorge, nitr0, oSee, Sonic |
|            7 |     5753 | 2026-02-01 | MOUZ              | L   | 0.166      | -            | -                | -                | -         |    -0.10 | br0, Jeorge, nitr0, oSee, Sonic |
|            6 |     5824 | 2026-01-30 | Astralis          | W   | 0.153      | 0.783        | 0.531 (0.064)    | 0.322 (0.039)    | 1 (0.153) |     4.39 | br0, Jeorge, nitr0, oSee, Sonic |
|            5 |     5873 | 2026-01-28 | B8                | W   | 0.140      | 0.783        | 0.319 (0.035)    | 0.604 (0.066)    | 1 (0.140) |     4.20 | br0, Jeorge, nitr0, oSee, Sonic |
|            4 |     6389 | 2026-01-11 | M80               | L   | 0.030      | -            | -                | -                | -         |    -0.21 | br0, Jeorge, nitr0, oSee, Sonic |
|            3 |     6390 | 2026-01-11 | Marsborne         | W   | 0.029      | -            | -                | -                | 1 (0.029) |     0.20 | br0, Jeorge, nitr0, oSee, Sonic |
|            2 |     6402 | 2026-01-10 | Voca              | W   | 0.021      | -            | -                | -                | 1 (0.021) |     0.30 | br0, Jeorge, nitr0, oSee, Sonic |
|            1 |     6411 | 2026-01-09 | Outfit 49         | W   | 0.017      | -            | -                | -                | -         |     0.03 | br0, Jeorge, nitr0, oSee, Sonic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,823.80)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.912 | $5,000.00      | $4,559.07       |
| 2026-05-17 |      0.868 | $4,000.00      | $3,473.11       |
| 2026-04-11 |      0.627 | $18,750.00     | $11,761.07      |
| 2026-03-29 |      0.539 | $32,500.00     | $17,532.57      |
| 2026-03-05 |      0.381 | $3,000.00      | $1,143.34       |
| 2026-02-08 |      0.215 | $10,000.00     | $2,145.75       |
| 2026-01-11 |      0.030 | $7,000.00      | $208.88         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
