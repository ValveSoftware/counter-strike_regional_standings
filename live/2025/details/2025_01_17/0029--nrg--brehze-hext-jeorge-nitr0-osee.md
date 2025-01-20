### Roster Details<br />
Team Name: NRG<br />
Roster: Brehze, HexT, Jeorge, nitr0, oSee<br />
Global Rank: [29](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_01_17.md)<br />
Regional Rank: [8]( ../../standings_americas_2025_01_17.md)<br />
<br />
Final Rank Value:  1190.4<br />
<br />
Final Rank Value (1190.4) = Starting Rank Value (1211.7) + Head To Head Adjustments (-21.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.567[<sup>2</sup>](#table1)

The average of these factors is 0.409<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1211.7
- 400 + ( ( 0.409 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1211.7


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
|           61 |      168 | 2024-12-15 | timbermen         | L   | 0.982      | -            | -                | -                | -         |   -25.72 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           60 |      175 | 2024-12-15 | Party Astronauts  | W   | 0.980      | 0.303        | -                | 0.390 (0.116)    | 0 (0.000) |     4.87 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           59 |      195 | 2024-12-14 | Make Your Mind    | W   | 0.975      | 0.303        | 0.029 (0.009)    | -                | 0 (0.000) |     2.47 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           58 |      289 | 2024-12-08 | Sharks            | W   | 0.935      | 0.384        | 0.110 (0.040)    | 0.596 (0.214)    | 1 (0.935) |    12.69 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           57 |      292 | 2024-12-08 | Sharks            | W   | 0.934      | 0.384        | 0.110 (0.039)    | 0.596 (0.214)    | 1 (0.934) |    13.25 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           56 |      311 | 2024-12-07 | BOSS              | W   | 0.929      | 0.384        | 0.042 (0.015)    | 0.421 (0.150)    | 1 (0.929) |    10.05 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           55 |      319 | 2024-12-07 | Undone            | W   | 0.927      | -            | -                | -                | 1 (0.927) |     3.43 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           54 |      348 | 2024-12-06 | Stand On Business | W   | 0.922      | -            | -                | -                | 1 (0.922) |     0.39 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           53 |      585 | 2024-11-24 | Nouns             | L   | 0.842      | -            | -                | -                | -         |   -16.76 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           52 |      589 | 2024-11-24 | timbermen         | W   | 0.840      | 0.303        | 0.030 (0.008)    | -                | 0 (0.000) |     3.78 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           51 |      609 | 2024-11-23 | Revenge Nation    | W   | 0.834      | -            | -                | -                | 0 (0.000) |     1.77 | Brehze, HexT, Jeorge, nitr0, oSee    |
|           50 |     1321 | 2024-10-20 | M80               | L   | 0.608      | -            | -                | -                | -         |    -9.43 | autimatic, Brehze, HexT, nitr0, oSee |
|           49 |     1347 | 2024-10-19 | Legacy            | W   | 0.602      | 0.477        | 0.074 (0.021)    | 0.502 (0.144)    | 0 (0.000) |     7.16 | autimatic, Brehze, HexT, nitr0, oSee |
|           48 |     1371 | 2024-10-18 | Party Astronauts  | W   | 0.595      | 0.477        | -                | 0.390 (0.110)    | -         |     3.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           47 |     1402 | 2024-10-17 | Wildcard          | W   | 0.588      | 0.477        | 0.231 (0.065)    | 0.636 (0.179)    | -         |    12.68 | autimatic, Brehze, HexT, nitr0, oSee |
|           46 |     1432 | 2024-10-16 | M80               | L   | 0.582      | -            | -                | -                | -         |    -9.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           45 |     1459 | 2024-10-15 | Party Astronauts  | W   | 0.575      | 0.477        | -                | 0.390 (0.107)    | -         |     3.62 | autimatic, Brehze, HexT, nitr0, oSee |
|           44 |     1576 | 2024-10-08 | Nouns             | L   | 0.528      | -            | -                | -                | -         |   -10.27 | autimatic, Brehze, HexT, nitr0, oSee |
|           43 |     1582 | 2024-10-08 | Nouns             | L   | 0.528      | -            | -                | -                | -         |   -10.72 | autimatic, Brehze, HexT, nitr0, oSee |
|           42 |     1737 | 2024-10-03 | BOSS              | L   | 0.495      | -            | -                | -                | -         |   -10.86 | autimatic, Brehze, HexT, nitr0, oSee |
|           41 |     1815 | 2024-10-01 | Legacy            | L   | 0.481      | -            | -                | -                | -         |   -10.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           40 |     1820 | 2024-10-01 | Legacy            | L   | 0.481      | -            | -                | -                | -         |   -10.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           39 |     1950 | 2024-09-27 | Legacy            | L   | 0.454      | -            | -                | -                | -         |   -10.69 | autimatic, Brehze, HexT, nitr0, oSee |
|           38 |     1955 | 2024-09-27 | E-Xolos LAZER     | W   | 0.454      | -            | -                | -                | -         |     0.85 | autimatic, Brehze, HexT, nitr0, oSee |
|           37 |     2044 | 2024-09-25 | M80               | L   | 0.441      | -            | -                | -                | -         |    -8.13 | autimatic, Brehze, HexT, nitr0, oSee |
|           36 |     2049 | 2024-09-25 | M80               | W   | 0.441      | 0.477        | 0.140 (0.029)    | -                | -         |     5.88 | autimatic, Brehze, HexT, nitr0, oSee |
|           35 |     2101 | 2024-09-24 | timbermen         | W   | 0.435      | -            | -                | -                | -         |     1.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           34 |     2104 | 2024-09-24 | timbermen         | W   | 0.434      | -            | -                | -                | -         |     1.51 | autimatic, Brehze, HexT, nitr0, oSee |
|           33 |     2180 | 2024-09-22 | Nouns             | W   | 0.421      | -            | -                | -                | -         |     4.65 | autimatic, Brehze, HexT, nitr0, oSee |
|           32 |     2184 | 2024-09-22 | FLUFFY AIMERS     | W   | 0.420      | -            | -                | -                | -         |     2.17 | autimatic, Brehze, HexT, nitr0, oSee |
|           31 |     2209 | 2024-09-21 | Party Astronauts  | W   | 0.414      | -            | -                | -                | -         |     1.80 | autimatic, Brehze, HexT, nitr0, oSee |
|           30 |     2256 | 2024-09-19 | Wildcard          | W   | 0.401      | 0.477        | 0.231 (0.044)    | 0.636 (0.122)    | -         |     8.48 | autimatic, Brehze, HexT, nitr0, oSee |
|           29 |     2260 | 2024-09-19 | Wildcard          | W   | 0.401      | 0.477        | 0.231 (0.044)    | 0.636 (0.122)    | -         |     8.74 | autimatic, Brehze, HexT, nitr0, oSee |
|           28 |     2289 | 2024-09-18 | Take Flyte        | W   | 0.395      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           27 |     2292 | 2024-09-18 | Take Flyte        | W   | 0.394      | -            | -                | -                | -         |     0.91 | autimatic, Brehze, HexT, nitr0, oSee |
|           26 |     2325 | 2024-09-17 | LAG               | W   | 0.388      | -            | -                | -                | -         |     0.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           25 |     2326 | 2024-09-17 | LAG               | W   | 0.388      | -            | -                | -                | -         |     0.49 | autimatic, Brehze, HexT, nitr0, oSee |
|           24 |     2825 | 2024-08-30 | Wildcard          | L   | 0.268      | -            | -                | -                | -         |    -2.46 | autimatic, Brehze, HexT, nitr0, oSee |
|           23 |     2826 | 2024-08-30 | Nouns             | W   | 0.267      | -            | -                | -                | -         |     3.14 | autimatic, Brehze, HexT, nitr0, oSee |
|           22 |     2851 | 2024-08-29 | Wildcard          | L   | 0.262      | -            | -                | -                | -         |    -2.42 | autimatic, Brehze, HexT, nitr0, oSee |
|           21 |     2855 | 2024-08-29 | Nouns             | W   | 0.261      | -            | -                | -                | -         |     3.08 | autimatic, Brehze, HexT, nitr0, oSee |
|           20 |     2907 | 2024-08-28 | Legacy            | L   | 0.254      | -            | -                | -                | -         |    -6.31 | autimatic, Brehze, HexT, nitr0, oSee |
|           19 |     2971 | 2024-08-27 | Nouns             | L   | 0.247      | -            | -                | -                | -         |    -4.99 | autimatic, Brehze, HexT, nitr0, oSee |
|           18 |     3019 | 2024-08-26 | timbermen         | W   | 0.241      | -            | -                | -                | -         |     0.98 | autimatic, Brehze, HexT, nitr0, oSee |
|           17 |     3040 | 2024-08-26 | Akimbo            | W   | 0.240      | -            | -                | -                | -         |     0.41 | autimatic, Brehze, HexT, nitr0, oSee |
|           16 |     3352 | 2024-08-17 | Wildcard          | L   | 0.182      | -            | -                | -                | -         |    -1.79 | autimatic, Brehze, HexT, nitr0, oSee |
|           15 |     3354 | 2024-08-17 | LAG               | W   | 0.181      | -            | -                | -                | -         |     0.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           14 |     3356 | 2024-08-17 | DETONATE          | W   | 0.180      | -            | -                | -                | -         |     0.10 | autimatic, Brehze, HexT, nitr0, oSee |
|           13 |     3403 | 2024-08-15 | LAG               | W   | 0.167      | -            | -                | -                | -         |     0.20 | autimatic, Brehze, HexT, nitr0, oSee |
|           12 |     3405 | 2024-08-15 | InControl         | W   | 0.167      | -            | -                | -                | -         |     0.22 | autimatic, Brehze, HexT, nitr0, oSee |
|           11 |     3513 | 2024-08-12 | Akimbo            | W   | 0.147      | -            | -                | -                | -         |     0.25 | autimatic, Brehze, HexT, nitr0, oSee |
|           10 |     3701 | 2024-08-06 | Revenge Nation    | W   | 0.108      | -            | -                | -                | -         |     0.18 | autimatic, Brehze, HexT, nitr0, oSee |
|            9 |     3706 | 2024-08-06 | Revenge Nation    | W   | 0.108      | -            | -                | -                | -         |     0.18 | autimatic, Brehze, HexT, nitr0, oSee |
|            8 |     3761 | 2024-08-04 | timbermen         | W   | 0.096      | -            | -                | -                | -         |     0.38 | autimatic, Brehze, HexT, nitr0, oSee |
|            7 |     3766 | 2024-08-04 | Wildcard          | W   | 0.094      | -            | -                | -                | -         |     2.05 | autimatic, Brehze, HexT, nitr0, oSee |
|            6 |     3800 | 2024-08-03 | BOSS              | W   | 0.087      | -            | -                | -                | -         |     0.95 | autimatic, Brehze, HexT, nitr0, oSee |
|            5 |     3907 | 2024-07-31 | BOSS              | W   | 0.068      | -            | -                | -                | -         |     0.75 | autimatic, Brehze, HexT, nitr0, oSee |
|            4 |     3911 | 2024-07-31 | BOSS              | W   | 0.068      | -            | -                | -                | -         |     0.75 | autimatic, Brehze, HexT, nitr0, oSee |
|            3 |     3955 | 2024-07-30 | Party Astronauts  | L   | 0.061      | -            | -                | -                | -         |    -1.64 | autimatic, Brehze, HexT, nitr0, oSee |
|            2 |     3960 | 2024-07-30 | Party Astronauts  | L   | 0.061      | -            | -                | -                | -         |    -1.64 | autimatic, Brehze, HexT, nitr0, oSee |
|            1 |     4248 | 2024-07-21 | Wildcard          | L   | 0.002      | -            | -                | -                | -         |    -0.02 | autimatic, Brehze, HexT, nitr0, oSee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,558.74)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.982 | $1,000.00      | $981.88         |
| 2024-12-08 |      0.935 | $15,000.00     | $14,026.39      |
| 2024-11-24 |      0.842 | $1,000.00      | $841.55         |
| 2024-10-20 |      0.608 | $15,000.00     | $9,116.12       |
| 2024-10-05 |      0.508 | $750.00        | $381.25         |
| 2024-09-22 |      0.421 | $4,000.00      | $1,685.76       |
| 2024-08-18 |      0.189 | $750.00        | $141.42         |
| 2024-08-04 |      0.096 | $4,000.00      | $382.68         |
| 2024-07-21 |      0.002 | $1,000.00      | $1.70           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
