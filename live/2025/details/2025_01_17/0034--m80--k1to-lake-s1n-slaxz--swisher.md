### Roster Details<br />
Team Name: M80<br />
Roster: k1to, Lake, s1n, slaxz-, Swisher<br />
Global Rank: [34](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1182.5<br />
<br />
Final Rank Value (1182.5) = Starting Rank Value (1169.7) + Head To Head Adjustments (12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.539[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.470[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1169.7
- 400 + ( ( 0.388 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1169.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |        4 | 2025-01-16 | FaZe             | L   | 1.000      | -            | -                | -                | -         |    -0.74 | k1to, Lake, s1n, slaxz-, Swisher |
|           49 |      790 | 2024-11-15 | FURIA            | L   | 0.778      | -            | -                | -                | -         |    -2.49 | Lake, reck, s1n, slaxz-, Swisher |
|           48 |      806 | 2024-11-14 | BESTIA           | W   | 0.776      | -            | -                | -                | 1 (0.776) |    10.83 | Lake, reck, s1n, slaxz-, Swisher |
|           47 |      847 | 2024-11-14 | Complexity       | L   | 0.770      | -            | -                | -                | -         |    -6.50 | Lake, reck, s1n, slaxz-, Swisher |
|           46 |      882 | 2024-11-12 | Legacy           | W   | 0.762      | -            | -                | -                | 1 (0.762) |     9.17 | Lake, reck, s1n, slaxz-, Swisher |
|           45 |      896 | 2024-11-12 | RED Canids       | W   | 0.758      | -            | -                | -                | 1 (0.758) |     8.39 | Lake, reck, s1n, slaxz-, Swisher |
|           44 |      914 | 2024-11-11 | BOSS             | L   | 0.756      | -            | -                | -                | -         |   -15.01 | Lake, reck, s1n, slaxz-, Swisher |
|           43 |     1260 | 2024-10-25 | BESTIA           | L   | 0.640      | -            | -                | -                | -         |   -11.80 | Lake, reck, s1n, slaxz-, Swisher |
|           42 |     1280 | 2024-10-24 | Aurora           | W   | 0.632      | 0.477        | 0.058 (0.017)    | 0.313 (0.094)    | 0 (0.000) |     4.12 | Lake, reck, s1n, slaxz-, Swisher |
|           41 |     1283 | 2024-10-24 | BESTIA           | L   | 0.631      | -            | -                | -                | -         |   -12.06 | Lake, reck, s1n, slaxz-, Swisher |
|           40 |     1321 | 2024-10-20 | NRG              | W   | 0.608      | 0.477        | 0.122 (0.035)    | 0.578 (0.167)    | 0 (0.000) |     9.43 | Lake, reck, s1n, slaxz-, Swisher |
|           39 |     1401 | 2024-10-17 | Legacy           | W   | 0.589      | 0.477        | 0.074 (0.021)    | 0.502 (0.141)    | 0 (0.000) |     7.19 | Lake, reck, s1n, slaxz-, Swisher |
|           38 |     1432 | 2024-10-16 | NRG              | W   | 0.582      | 0.477        | 0.122 (0.034)    | 0.578 (0.160)    | -         |     9.08 | Lake, reck, s1n, slaxz-, Swisher |
|           37 |     1541 | 2024-10-09 | BOSS             | W   | 0.535      | 0.477        | -                | 0.421 (0.107)    | -         |     6.28 | Lake, reck, s1n, slaxz-, Swisher |
|           36 |     1547 | 2024-10-09 | BOSS             | L   | 0.535      | -            | -                | -                | -         |   -10.83 | Lake, reck, s1n, slaxz-, Swisher |
|           35 |     1580 | 2024-10-08 | Legacy           | W   | 0.528      | 0.477        | 0.074 (0.019)    | 0.502 (0.126)    | -         |     6.55 | Lake, reck, s1n, slaxz-, Swisher |
|           34 |     1587 | 2024-10-08 | Legacy           | L   | 0.528      | -            | -                | -                | -         |   -10.33 | Lake, reck, s1n, slaxz-, Swisher |
|           33 |     1678 | 2024-10-05 | Wildcard         | L   | 0.506      | -            | -                | -                | -         |    -4.98 | Lake, reck, s1n, slaxz-, Swisher |
|           32 |     1712 | 2024-10-04 | BIG              | L   | 0.500      | -            | -                | -                | -         |    -4.44 | Lake, reck, s1n, slaxz-, Swisher |
|           31 |     1716 | 2024-10-04 | Wildcard         | W   | 0.499      | 0.500        | 0.231 (0.058)    | 0.636 (0.159)    | 1 (0.499) |    10.97 | Lake, reck, s1n, slaxz-, Swisher |
|           30 |     1816 | 2024-10-01 | Party Astronauts | W   | 0.481      | -            | -                | -                | -         |     2.86 | Lake, reck, s1n, slaxz-, Swisher |
|           29 |     1821 | 2024-10-01 | Party Astronauts | L   | 0.481      | -            | -                | -                | -         |   -12.52 | Lake, reck, s1n, slaxz-, Swisher |
|           28 |     1826 | 2024-10-01 | Nouns            | W   | 0.481      | 0.477        | -                | 0.577 (0.132)    | -         |     5.71 | Lake, reck, s1n, slaxz-, Swisher |
|           27 |     1830 | 2024-10-01 | Nouns            | L   | 0.480      | -            | -                | -                | -         |    -9.66 | Lake, reck, s1n, slaxz-, Swisher |
|           26 |     1864 | 2024-09-30 | Revenge Nation   | W   | 0.474      | -            | -                | -                | -         |     0.82 | Lake, reck, s1n, slaxz-, Swisher |
|           25 |     1866 | 2024-09-30 | Revenge Nation   | W   | 0.474      | -            | -                | -                | -         |     0.83 | Lake, reck, s1n, slaxz-, Swisher |
|           24 |     1913 | 2024-09-28 | Take Flyte       | W   | 0.461      | -            | -                | -                | -         |     1.11 | Lake, reck, s1n, slaxz-, Swisher |
|           23 |     1914 | 2024-09-28 | Take Flyte       | W   | 0.461      | -            | -                | -                | -         |     1.12 | Lake, reck, s1n, slaxz-, Swisher |
|           22 |     1996 | 2024-09-26 | timbermen        | W   | 0.448      | -            | -                | -                | -         |     1.90 | Lake, reck, s1n, slaxz-, Swisher |
|           21 |     1998 | 2024-09-26 | timbermen        | W   | 0.448      | -            | -                | -                | -         |     1.94 | Lake, reck, s1n, slaxz-, Swisher |
|           20 |     2044 | 2024-09-25 | NRG              | W   | 0.441      | 0.477        | 0.122 (0.026)    | 0.578 (0.122)    | -         |     8.13 | Lake, reck, s1n, slaxz-, Swisher |
|           19 |     2049 | 2024-09-25 | NRG              | L   | 0.441      | -            | -                | -                | -         |    -5.88 | Lake, reck, s1n, slaxz-, Swisher |
|           18 |     2276 | 2024-09-19 | MIBR             | L   | 0.398      | -            | -                | -                | -         |    -1.39 | Lake, reck, s1n, slaxz-, Swisher |
|           17 |     2410 | 2024-09-14 | Imperial         | W   | 0.366      | 0.889        | 0.164 (0.053)    | 0.428 (0.139)    | 1 (0.366) |     5.76 | Lake, reck, s1n, slaxz-, Swisher |
|           16 |     2508 | 2024-09-11 | fnatic           | W   | 0.347      | 0.889        | 0.182 (0.056)    | -                | 1 (0.347) |     5.10 | Lake, reck, s1n, slaxz-, Swisher |
|           15 |     2543 | 2024-09-10 | Complexity       | W   | 0.339      | 0.889        | 0.121 (0.037)    | -                | 1 (0.339) |     7.60 | Lake, reck, s1n, slaxz-, Swisher |
|           14 |     3176 | 2024-08-22 | Falcons          | L   | 0.213      | -            | -                | -                | -         |    -5.02 | Lake, reck, s1n, slaxz-, Swisher |
|           13 |     3340 | 2024-08-18 | Wildcard         | L   | 0.187      | -            | -                | -                | -         |    -1.55 | Lake, reck, s1n, slaxz-, Swisher |
|           12 |     3355 | 2024-08-17 | undefined        | W   | 0.181      | -            | -                | -                | -         |     0.34 | Lake, reck, s1n, slaxz-, Swisher |
|           11 |     3464 | 2024-08-13 | InControl        | W   | 0.154      | -            | -                | -                | -         |     0.25 | Lake, reck, s1n, slaxz-, Swisher |
|           10 |     3505 | 2024-08-12 | Mythic           | W   | 0.148      | -            | -                | -                | -         |     0.13 | Lake, reck, s1n, slaxz-, Swisher |
|            9 |     3508 | 2024-08-12 | Mythic           | W   | 0.148      | -            | -                | -                | -         |     0.13 | Lake, reck, s1n, slaxz-, Swisher |
|            8 |     3645 | 2024-08-07 | LAG              | W   | 0.115      | -            | -                | -                | -         |     0.18 | Lake, reck, s1n, slaxz-, Swisher |
|            7 |     3647 | 2024-08-07 | LAG              | W   | 0.114      | -            | -                | -                | -         |     0.18 | Lake, reck, s1n, slaxz-, Swisher |
|            6 |     3699 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.108      | -            | -                | -                | -         |     0.69 | Lake, reck, s1n, slaxz-, Swisher |
|            5 |     3702 | 2024-08-06 | FLUFFY AIMERS    | W   | 0.108      | -            | -                | -                | -         |     0.70 | Lake, reck, s1n, slaxz-, Swisher |
|            4 |     3906 | 2024-07-31 | Limitless        | W   | 0.068      | -            | -                | -                | -         |     0.11 | Lake, reck, s1n, slaxz-, Swisher |
|            3 |     3912 | 2024-07-31 | Limitless        | W   | 0.068      | -            | -                | -                | -         |     0.11 | Lake, reck, s1n, slaxz-, Swisher |
|            2 |     3956 | 2024-07-30 | E-Xolos LAZER    | W   | 0.061      | -            | -                | -                | -         |     0.15 | Lake, reck, s1n, slaxz-, Swisher |
|            1 |     3961 | 2024-07-30 | E-Xolos LAZER    | W   | 0.061      | -            | -                | -                | -         |     0.15 | Lake, reck, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,614.59)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.608 | $25,000.00     | $15,193.53      |
| 2024-10-06 |      0.514 | $3,000.00      | $1,542.23       |
| 2024-09-22 |      0.420 | $32,000.00     | $13,431.36      |
| 2024-08-25 |      0.233 | $5,000.00      | $1,164.64       |
| 2024-08-18 |      0.189 | $1,500.00      | $282.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
