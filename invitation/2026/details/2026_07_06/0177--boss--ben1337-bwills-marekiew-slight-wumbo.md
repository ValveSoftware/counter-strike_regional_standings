### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [177](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_06.md)<br />
Regional Rank: [37]( ../../standings_americas_2026_07_06.md)<br />
<br />
Final Rank Value:  786.8<br />
<br />
Final Rank Value (786.8) = Starting Rank Value (797.9) + Head To Head Adjustments (-11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.224[<sup>2</sup>](#table1)

The average of these factors is 0.211<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 797.9
- 400 + ( ( 0.211 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 797.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1678 | 2026-04-30 | ex-Aether      | L   | 0.756      | -            | -                | -                | -         |   -15.07 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           28 |     1805 | 2026-04-27 | Fisher College | L   | 0.736      | -            | -                | -                | -         |    -5.10 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           27 |     1855 | 2026-04-26 | Zomblers       | L   | 0.729      | -            | -                | -                | -         |   -14.86 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           26 |     2328 | 2026-04-09 | Aether         | W   | 0.616      | 0.333        | 0.003 (0.001)    | 0.170 (0.035)    | 0 (0.000) |     7.76 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           25 |     2384 | 2026-04-07 | LAG            | W   | 0.602      | 0.333        | 0.024 (0.005)    | 0.520 (0.104)    | 0 (0.000) |    14.28 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           24 |     2514 | 2026-04-04 | LAG            | L   | 0.583      | -            | -                | -                | -         |    -4.59 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           23 |     2519 | 2026-04-04 | Villainous     | W   | 0.582      | 0.333        | 0.004 (0.001)    | 0.148 (0.029)    | 0 (0.000) |     5.63 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           22 |     2597 | 2026-04-03 | FlyQuest RED   | W   | 0.576      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     3.84 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           21 |     2676 | 2026-04-02 | Fisher College | L   | 0.570      | -            | -                | -                | -         |    -4.33 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           20 |     2686 | 2026-04-02 | TSG            | L   | 0.569      | -            | -                | -                | -         |   -15.33 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           19 |     2691 | 2026-04-02 | regain         | W   | 0.569      | 0.769        | 0.009 (0.004)    | 0.361 (0.158)    | 0 (0.000) |     6.91 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           18 |     2779 | 2026-04-01 | LAG            | L   | 0.563      | -            | -                | -                | -         |    -4.35 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           17 |     2867 | 2026-03-31 | 900FPSvsECO    | W   | 0.557      | 0.769        | 0.002 (0.001)    | 0.140 (0.060)    | 0 (0.000) |     5.69 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           16 |     2872 | 2026-03-31 | Akimbo         | L   | 0.556      | -            | -                | -                | -         |   -12.25 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           15 |     3033 | 2026-03-29 | LAG            | W   | 0.542      | 0.354        | 0.024 (0.005)    | 0.520 (0.100)    | 1 (0.542) |    13.30 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           14 |     3071 | 2026-03-29 | Voca           | L   | 0.540      | -            | -                | -                | -         |    -2.44 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           13 |     3112 | 2026-03-28 | Wanted Goons   | W   | 0.536      | 0.354        | 0.000 (0.000)    | 0.172 (0.033)    | 1 (0.536) |     6.62 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           12 |     3150 | 2026-03-28 | NuTorious      | W   | 0.534      | -            | -                | -                | 1 (0.534) |     2.49 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           11 |     3170 | 2026-03-28 | Demolition     | W   | 0.533      | -            | -                | -                | 1 (0.533) |     1.86 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           10 |     3391 | 2026-03-23 | Incognito      | W   | 0.503      | 0.624        | -                | 0.121 (0.038)    | -         |     2.83 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            9 |     4539 | 2026-02-28 | LAG            | L   | 0.350      | -            | -                | -                | -         |    -2.22 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            8 |     4542 | 2026-02-28 | Fisher College | W   | 0.350      | 0.769        | 0.043 (0.012)    | 0.378 (0.102)    | -         |     8.81 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            7 |     4586 | 2026-02-27 | Wildcard       | L   | 0.343      | -            | -                | -                | -         |    -0.54 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            6 |     4641 | 2026-02-26 | Aether         | W   | 0.336      | 0.769        | 0.003 (0.001)    | 0.170 (0.044)    | -         |     3.92 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            5 |     4852 | 2026-02-22 | BC.Game        | L   | 0.308      | -            | -                | -                | -         |    -2.93 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            4 |     4866 | 2026-02-22 | MASONIC        | L   | 0.307      | -            | -                | -                | -         |    -1.60 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            3 |     4874 | 2026-02-22 | illwill        | L   | 0.307      | -            | -                | -                | -         |    -2.85 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            2 |     4887 | 2026-02-22 | Sashi          | L   | 0.306      | -            | -                | -                | -         |    -1.43 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            1 |     4901 | 2026-02-22 | 9INE           | L   | 0.306      | -            | -                | -                | -         |    -5.12 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,059.01)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.543 | $1,950.00      | $1,059.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
