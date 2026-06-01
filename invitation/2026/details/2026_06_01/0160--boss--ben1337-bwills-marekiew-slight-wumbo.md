### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [160](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [34]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  858.3<br />
<br />
Final Rank Value (858.3) = Starting Rank Value (892.8) + Head To Head Adjustments (-34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.315[<sup>2</sup>](#table1)

The average of these factors is 0.259<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 892.8
- 400 + ( ( 0.259 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 892.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1017 | 2026-04-30 | ex-Aether      | L   | 0.989      | -            | -                | -                | -         |   -21.82 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           33 |     1144 | 2026-04-27 | Fisher College | L   | 0.969      | -            | -                | -                | -         |    -6.20 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           32 |     1194 | 2026-04-26 | Zomblers       | L   | 0.962      | -            | -                | -                | -         |   -21.44 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           31 |     1667 | 2026-04-09 | Aether         | W   | 0.849      | 0.333        | 0.004 (0.001)    | 0.239 (0.068)    | 0 (0.000) |     9.50 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           30 |     1723 | 2026-04-07 | LAG            | W   | 0.836      | 0.333        | 0.033 (0.009)    | 0.681 (0.190)    | 0 (0.000) |    19.38 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           29 |     1853 | 2026-04-04 | LAG            | L   | 0.816      | -            | -                | -                | -         |    -6.70 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           28 |     1858 | 2026-04-04 | mouse          | W   | 0.815      | 0.333        | -                | 0.086 (0.023)    | 0 (0.000) |     3.20 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           27 |     1936 | 2026-04-03 | FlyQuest RED   | W   | 0.809      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     3.64 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           26 |     2015 | 2026-04-02 | Fisher College | L   | 0.803      | -            | -                | -                | -         |    -5.91 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           25 |     2025 | 2026-04-02 | TSG            | L   | 0.802      | -            | -                | -                | -         |   -22.74 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           24 |     2030 | 2026-04-02 | regain         | W   | 0.802      | 0.769        | 0.012 (0.007)    | 0.472 (0.291)    | 0 (0.000) |     7.62 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           23 |     2118 | 2026-04-01 | LAG            | L   | 0.796      | -            | -                | -                | -         |    -6.57 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           22 |     2206 | 2026-03-31 | 900FPSvsECO    | W   | 0.790      | 0.769        | 0.003 (0.002)    | 0.196 (0.119)    | 0 (0.000) |     6.30 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           21 |     2211 | 2026-03-31 | Akimbo         | L   | 0.789      | -            | -                | -                | -         |   -19.33 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           20 |     2372 | 2026-03-29 | LAG            | W   | 0.775      | 0.354        | 0.033 (0.009)    | 0.681 (0.187)    | 1 (0.775) |    18.67 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           19 |     2410 | 2026-03-29 | Voca           | L   | 0.773      | -            | -                | -                | -         |    -2.47 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           18 |     2451 | 2026-03-28 | Wanted Goons   | W   | 0.769      | 0.354        | -                | 0.163 (0.044)    | 1 (0.769) |     5.20 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           17 |     2489 | 2026-03-28 | NuTorious      | W   | 0.767      | -            | -                | -                | 1 (0.767) |     2.60 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           16 |     2509 | 2026-03-28 | Demolition     | W   | 0.766      | -            | -                | -                | 1 (0.766) |     1.73 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           15 |     2730 | 2026-03-23 | Incognito      | W   | 0.737      | 0.624        | -                | 0.149 (0.068)    | -         |     2.73 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           14 |     3878 | 2026-02-28 | LAG            | L   | 0.584      | -            | -                | -                | -         |    -3.64 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           13 |     3881 | 2026-02-28 | Fisher College | W   | 0.583      | 0.769        | 0.049 (0.022)    | 0.482 (0.216)    | -         |    15.17 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           12 |     3925 | 2026-02-27 | Wildcard       | L   | 0.577      | -            | -                | -                | -         |    -0.76 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           11 |     3980 | 2026-02-26 | Aether         | W   | 0.569      | 0.769        | 0.004 (0.002)    | 0.239 (0.105)    | -         |     5.42 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           10 |     4191 | 2026-02-22 | BC.Game        | L   | 0.541      | -            | -                | -                | -         |    -3.66 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|            9 |     4205 | 2026-02-22 | MASONIC        | L   | 0.540      | -            | -                | -                | -         |    -4.71 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|            8 |     4213 | 2026-02-22 | illwill        | L   | 0.540      | -            | -                | -                | -         |    -3.17 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|            7 |     4226 | 2026-02-22 | Sashi          | L   | 0.539      | -            | -                | -                | -         |    -3.04 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|            6 |     4240 | 2026-02-22 | 9INE           | L   | 0.539      | -            | -                | -                | -         |    -6.48 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|            5 |     5905 | 2025-12-19 | Voca           | L   | 0.109      | -            | -                | -                | -         |    -0.39 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            4 |     5944 | 2025-12-17 | regain         | W   | 0.096      | 0.333        | 0.012 (0.000)    | -                | -         |     1.01 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            3 |     5969 | 2025-12-16 | LAG            | W   | 0.090      | 0.333        | 0.033 (0.001)    | -                | -         |     2.28 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            2 |     6057 | 2025-12-08 | Take Flyte     | W   | 0.037      | -            | -                | -                | -         |     0.10 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            1 |     6152 | 2025-12-04 | Outfit 49      | W   | 0.009      | -            | -                | -                | -         |     0.02 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,841.99)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.776 | $1,950.00      | $1,513.52       |
| 2025-12-19 |      0.109 | $3,000.00      | $328.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
