### Roster Details<br />
Team Name: Passion UA<br />
Roster: Grim, hallzerk, JT, Kvem, nicx<br />
Global Rank: [39](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [9]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  1288.3<br />
<br />
Final Rank Value (1288.3) = Starting Rank Value (1279.8) + Head To Head Adjustments (8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.465<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1279.8
- 400 + ( ( 0.465 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1279.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      348 | 2026-02-21 | Gentle Mates      | L   | 1.000      | -            | -                | -                | -         |    -8.29 | Grim, JT, Kvem, nicx, try      |
|           45 |      413 | 2026-02-19 | Rebels            | W   | 1.000      | 0.342        | -                | 0.349 (0.119)    | 1 (1.000) |     6.24 | Grim, JT, Kvem, nicx, try      |
|           44 |      424 | 2026-02-19 | ALGO              | W   | 1.000      | 0.342        | -                | 0.383 (0.131)    | 1 (1.000) |     4.06 | Grim, JT, Kvem, nicx, try      |
|           43 |      426 | 2026-02-19 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -25.60 | Grim, JT, Kvem, nicx, try      |
|           42 |      785 | 2026-02-12 | Wildcard          | W   | 1.000      | -            | -                | -                | -         |     3.05 | Grim, hallzerk, JT, Kvem, nicx |
|           41 |      826 | 2026-02-11 | Wildcard          | W   | 1.000      | -            | -                | -                | -         |     2.83 | Grim, hallzerk, JT, Kvem, nicx |
|           40 |      858 | 2026-02-10 | SportsBetExpert   | W   | 1.000      | -            | -                | -                | -         |     1.42 | Grim, hallzerk, JT, Kvem, nicx |
|           39 |      875 | 2026-02-10 | mouse             | W   | 1.000      | -            | -                | -                | -         |     0.38 | Grim, hallzerk, JT, Kvem, nicx |
|           38 |      928 | 2026-02-08 | NRG               | L   | 1.000      | -            | -                | -                | -         |   -10.68 | Grim, hallzerk, JT, Kvem, nicx |
|           37 |      950 | 2026-02-07 | M80               | W   | 1.000      | 0.143        | 0.109 (0.016)    | -                | -         |    17.16 | Grim, hallzerk, JT, Kvem, nicx |
|           36 |      980 | 2026-02-06 | BOSS              | W   | 1.000      | -            | -                | -                | -         |     2.27 | Grim, hallzerk, JT, Kvem, nicx |
|           35 |     1225 | 2026-01-29 | Ninjas in Pyjamas | L   | 0.987      | -            | -                | -                | -         |   -14.29 | Grim, hallzerk, JT, Kvem, nicx |
|           34 |     1241 | 2026-01-28 | G2                | L   | 0.981      | -            | -                | -                | -         |    -6.02 | Grim, hallzerk, JT, Kvem, nicx |
|           33 |     1721 | 2026-01-14 | GamerLegion       | L   | 0.886      | -            | -                | -                | -         |    -6.28 | Grim, hallzerk, JT, Kvem, nicx |
|           32 |     2103 | 2025-12-07 | FaZe              | L   | 0.634      | -            | -                | -                | -         |    -3.95 | Grim, hallzerk, JT, Kvem, nicx |
|           31 |     2126 | 2025-12-06 | Imperial          | W   | 0.627      | 1.000        | 0.080 (0.050)    | 0.670 (0.420)    | 1 (0.627) |     9.01 | Grim, hallzerk, JT, Kvem, nicx |
|           30 |     2152 | 2025-12-05 | Liquid            | W   | 0.620      | 1.000        | 0.441 (0.274)    | 0.230 (0.142)    | 1 (0.620) |    12.01 | Grim, hallzerk, JT, Kvem, nicx |
|           29 |     2178 | 2025-12-04 | Falcons           | L   | 0.614      | -            | -                | -                | -         |    -0.81 | Grim, hallzerk, JT, Kvem, nicx |
|           28 |     2188 | 2025-12-04 | G2                | L   | 0.613      | -            | -                | -                | -         |    -3.58 | Grim, hallzerk, JT, Kvem, nicx |
|           27 |     2215 | 2025-12-02 | M80               | W   | 0.600      | 0.809        | 0.109 (0.053)    | 0.525 (0.255)    | 1 (0.600) |    10.80 | Grim, hallzerk, JT, Kvem, nicx |
|           26 |     2237 | 2025-12-01 | fnatic            | W   | 0.593      | 0.809        | 0.115 (0.055)    | 0.504 (0.242)    | 1 (0.593) |     9.74 | Grim, hallzerk, JT, Kvem, nicx |
|           25 |     2257 | 2025-11-30 | 3DMAX             | L   | 0.586      | -            | -                | -                | -         |    -5.88 | Grim, hallzerk, JT, Kvem, nicx |
|           24 |     2283 | 2025-11-29 | MIBR              | W   | 0.581      | 0.809        | 0.153 (0.072)    | 0.666 (0.313)    | 1 (0.581) |    12.40 | Grim, hallzerk, JT, Kvem, nicx |
|           23 |     2306 | 2025-11-29 | FaZe              | L   | 0.579      | -            | -                | -                | -         |    -3.43 | Grim, hallzerk, JT, Kvem, nicx |
|           22 |     2448 | 2025-11-23 | FUT               | L   | 0.540      | -            | -                | -                | -         |    -3.69 | Grim, hallzerk, JT, Kvem, nicx |
|           21 |     2467 | 2025-11-22 | ECSTATIC          | L   | 0.534      | -            | -                | -                | -         |    -7.21 | Grim, hallzerk, JT, Kvem, nicx |
|           20 |     2482 | 2025-11-22 | Nexus             | W   | 0.532      | 0.339        | -                | 0.684 (0.123)    | 1 (0.532) |     2.85 | Grim, hallzerk, JT, Kvem, nicx |
|           19 |     2504 | 2025-11-21 | GenOne            | W   | 0.527      | 0.339        | -                | 0.692 (0.123)    | 1 (0.527) |     2.80 | Grim, hallzerk, JT, Kvem, nicx |
|           18 |     2531 | 2025-11-21 | Acend             | W   | 0.524      | -            | -                | -                | 1 (0.524) |     4.81 | Grim, hallzerk, JT, Kvem, nicx |
|           17 |     2675 | 2025-11-14 | paiN              | L   | 0.478      | -            | -                | -                | -         |    -7.46 | Grim, hallzerk, JT, Kvem, nicx |
|           16 |     2706 | 2025-11-12 | Falcons           | L   | 0.470      | -            | -                | -                | -         |    -0.54 | Grim, hallzerk, JT, Kvem, nicx |
|           15 |     2742 | 2025-11-11 | The MongolZ       | W   | 0.463      | 0.687        | 0.672 (0.214)    | 0.300 (0.096)    | -         |    12.39 | Grim, hallzerk, JT, Kvem, nicx |
|           14 |     4265 | 2025-09-30 | EYEBALLERS        | W   | 0.182      | 0.323        | 0.182 (0.011)    | -                | -         |     2.56 | Grim, hallzerk, JT, Kvem, nicx |
|           13 |     4275 | 2025-09-30 | EYEBALLERS        | W   | 0.180      | 0.323        | 0.182 (0.011)    | -                | -         |     2.55 | Grim, hallzerk, JT, Kvem, nicx |
|           12 |     4293 | 2025-09-30 | BIG               | W   | 0.179      | -            | -                | -                | -         |     3.47 | Grim, hallzerk, JT, Kvem, nicx |
|           11 |     4304 | 2025-09-30 | Fingers Crossed   | W   | 0.178      | -            | -                | -                | -         |     0.06 | Grim, hallzerk, JT, Kvem, nicx |
|           10 |     4344 | 2025-09-28 | OG                | L   | 0.168      | -            | -                | -                | -         |    -4.63 | Grim, hallzerk, JT, Kvem, nicx |
|            9 |     4359 | 2025-09-28 | BASEMENT BOYS     | W   | 0.166      | -            | -                | -                | -         |     0.19 | Grim, hallzerk, JT, Kvem, nicx |
|            8 |     4401 | 2025-09-27 | ex-Zero Tenacity  | W   | 0.161      | -            | -                | -                | -         |     0.25 | Grim, hallzerk, JT, Kvem, nicx |
|            7 |     4420 | 2025-09-27 | GenOne            | W   | 0.159      | -            | -                | -                | -         |     0.89 | Grim, hallzerk, JT, Kvem, nicx |
|            6 |     4453 | 2025-09-26 | BASEMENT BOYS     | L   | 0.154      | -            | -                | -                | -         |    -4.68 | Grim, hallzerk, JT, Kvem, nicx |
|            5 |     4483 | 2025-09-26 | ex-Zero Tenacity  | W   | 0.152      | -            | -                | -                | -         |     0.22 | Grim, hallzerk, JT, Kvem, nicx |
|            4 |     4525 | 2025-09-25 | MANA              | W   | 0.145      | -            | -                | -                | -         |     0.39 | Grim, hallzerk, JT, Kvem, nicx |
|            3 |     4640 | 2025-09-20 | B8                | L   | 0.112      | -            | -                | -                | -         |    -1.36 | Grim, hallzerk, JT, Kvem, nicx |
|            2 |     4660 | 2025-09-19 | Natus Vincere     | L   | 0.107      | -            | -                | -                | -         |    -0.31 | Grim, hallzerk, JT, Kvem, nicx |
|            1 |     4701 | 2025-09-18 | Gentle Mates      | W   | 0.100      | 0.769        | 0.206 (0.016)    | -                | -         |     2.37 | Grim, hallzerk, JT, Kvem, nicx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,141.97)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $2,500.00      | $2,485.19       |
| 2026-01-18 |      0.914 | $7,500.00      | $6,858.18       |
| 2025-12-14 |      0.681 | $20,000.00     | $13,622.07      |
| 2025-11-23 |      0.541 | $1,674.00      | $905.23         |
| 2025-11-16 |      0.492 | $25,000.00     | $12,305.43      |
| 2025-09-30 |      0.182 | $6,000.00      | $1,090.38       |
| 2025-09-28 |      0.168 | $2,814.00      | $471.74         |
| 2025-09-21 |      0.120 | $20,000.00     | $2,403.74       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
