### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [154](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [105]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  711.9<br />
<br />
Final Rank Value (711.9) = Starting Rank Value (695.1) + Head To Head Adjustments (16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.1
- 400 + ( ( 0.149 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 695.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      632 | 2024-11-23 | NRG                | L   | 0.840      | -            | -                | -                | -         |    -1.79 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1569 | 2024-10-09 | FLUFFY AIMERS      | W   | 0.541      | 0.477        | 0.016 (0.004)    | 0.403 (0.104)    | 0 (0.000) |    13.34 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1574 | 2024-10-09 | FLUFFY AIMERS      | W   | 0.541      | 0.477        | 0.016 (0.004)    | 0.403 (0.104)    | 0 (0.000) |    13.75 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1604 | 2024-10-08 | Party Astronauts   | L   | 0.534      | -            | -                | -                | -         |    -3.53 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1609 | 2024-10-08 | Party Astronauts   | L   | 0.534      | -            | -                | -                | -         |    -3.64 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1639 | 2024-10-07 | E-Xolos LAZER      | L   | 0.528      | -            | -                | -                | -         |    -7.43 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1641 | 2024-10-07 | E-Xolos LAZER      | W   | 0.527      | 0.477        | 0.008 (0.002)    | 0.219 (0.055)    | 0 (0.000) |     9.41 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1762 | 2024-10-03 | LAG                | W   | 0.501      | 0.477        | 0.004 (0.001)    | 0.085 (0.020)    | 0 (0.000) |     6.09 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1766 | 2024-10-03 | LAG                | W   | 0.501      | 0.477        | 0.004 (0.001)    | 0.085 (0.020)    | 0 (0.000) |     6.36 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1836 | 2024-10-01 | FLUFFY AIMERS      | L   | 0.488      | -            | -                | -                | -         |    -2.92 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1859 | 2024-10-01 | Nouns              | L   | 0.486      | -            | -                | -                | -         |    -1.45 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1861 | 2024-10-01 | Nouns              | L   | 0.486      | -            | -                | -                | -         |    -1.47 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1887 | 2024-09-30 | M80                | L   | 0.480      | -            | -                | -                | -         |    -0.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1889 | 2024-09-30 | M80                | L   | 0.480      | -            | -                | -                | -         |    -0.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     2123 | 2024-09-24 | Legacy             | L   | 0.441      | -            | -                | -                | -         |    -1.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     2125 | 2024-09-24 | Legacy             | L   | 0.441      | -            | -                | -                | -         |    -1.86 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     2163 | 2024-09-23 | InControl          | W   | 0.435      | 0.371        | 0.006 (0.001)    | 0.056 (0.009)    | 0 (0.000) |     6.03 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2280 | 2024-09-19 | vagrants           | W   | 0.407      | 0.371        | 0.005 (0.001)    | 0.164 (0.025)    | 0 (0.000) |     7.32 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2319 | 2024-09-18 | Wildcard           | L   | 0.400      | -            | -                | -                | -         |    -0.28 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2321 | 2024-09-18 | Wildcard           | L   | 0.400      | -            | -                | -                | -         |    -0.28 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2430 | 2024-09-14 | Dangerous          | W   | 0.373      | -            | -                | -                | 0 (0.000) |     2.06 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2466 | 2024-09-13 | timbermen          | L   | 0.367      | -            | -                | -                | -         |    -2.80 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2467 | 2024-09-13 | timbermen          | L   | 0.367      | -            | -                | -                | -         |    -2.87 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2494 | 2024-09-12 | jahsdnmasjdm       | L   | 0.360      | -            | -                | -                | -         |    -8.36 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2726 | 2024-09-04 | vagrants           | L   | 0.307      | -            | -                | -                | -         |    -4.44 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2733 | 2024-09-04 | vagrants           | W   | 0.307      | 0.477        | 0.005 (0.001)    | 0.164 (0.024)    | 0 (0.000) |     5.34 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2759 | 2024-09-03 | BOSS               | L   | 0.301      | -            | -                | -                | -         |    -0.96 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2762 | 2024-09-03 | BOSS               | L   | 0.301      | -            | -                | -                | -         |    -0.97 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3567 | 2024-08-11 | USA                | L   | 0.148      | -            | -                | -                | -         |    -3.53 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3667 | 2024-08-07 | E-Xolos LAZER      | L   | 0.121      | -            | -                | -                | -         |    -1.72 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3672 | 2024-08-07 | Mythic             | W   | 0.120      | -            | -                | -                | 0 (0.000) |     1.14 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3673 | 2024-08-07 | Mythic             | L   | 0.120      | -            | -                | -                | -         |    -2.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3724 | 2024-08-06 | NRG                | L   | 0.114      | -            | -                | -                | -         |    -0.19 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3729 | 2024-08-06 | NRG                | L   | 0.114      | -            | -                | -                | -         |    -0.19 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3927 | 2024-07-31 | Bad News Capybaras | W   | 0.074      | 0.477        | 0.003 (0.000)    | 0.278 (0.010)    | -         |     1.38 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3932 | 2024-07-31 | Bad News Capybaras | W   | 0.074      | 0.477        | 0.003 (0.000)    | 0.278 (0.010)    | -         |     1.38 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     4024 | 2024-07-29 | LAG                | W   | 0.061      | -            | -                | -                | -         |     0.83 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     4089 | 2024-07-27 | Canada             | L   | 0.047      | -            | -                | -                | -         |    -0.80 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($982.16)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
